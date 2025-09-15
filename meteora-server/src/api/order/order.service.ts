import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async create(userId: number, createOrderDto: CreateOrderDto) {
    const { items } = createOrderDto;

    // Verify all products exist and have sufficient stock
    const products = await this.prisma.product.findMany({
      where: { id: { in: items.map(item => item.productId) } }
    });

    if (products.length !== items.length) {
      throw new NotFoundException('One or more products not found');
    }

    // Check stock and calculate total
    let total = 0;
    const orderItems: any[] = [];

    for (const item of items) {
      const product = products.find(p => p.id === item.productId);
      if (!product) {
        throw new NotFoundException(`Product with ID ${item.productId} not found`);
      }

      if (product.stock < item.quantity) {
        throw new BadRequestException(`Insufficient stock for product ${product.name}`);
      }

      const itemTotal = product.price.toNumber() * item.quantity;
      total += itemTotal;

      orderItems.push({
        productId: item.productId,
        quantity: item.quantity,
        price: product.price
      });
    }

    // Create order with items in a transaction
    const order = await this.prisma.$transaction(async (prisma) => {
      // Create the order
      const newOrder = await prisma.order.create({
        data: {
          userId,
          total,
          status: 'PENDING',
          orderItems: {
            create: orderItems
          }
        },
        include: {
          orderItems: {
            include: {
              product: true
            }
          }
        }
      });

      // Update product stock
      for (const item of items) {
        await prisma.product.update({
          where: { id: item.productId },
          data: { stock: { decrement: item.quantity } }
        });
      }

      return newOrder;
    });

    return order;
  }

  async findAllByUser(userId: number) {
    return this.prisma.order.findMany({
      where: { userId },
      include: {
        orderItems: {
          include: {
            product: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    });
  }

  async findOne(id: number, userId: number) {
    const order = await this.prisma.order.findFirst({
      where: { id, userId },
      include: {
        orderItems: {
          include: {
            product: true
          }
        }
      }
    });

    if (!order) {
      throw new NotFoundException('Order not found');
    }

    return order;
  }

  async updateStatus(id: number, status: string) {
    const order = await this.prisma.order.findUnique({ where: { id } });

    if (!order) {
      throw new NotFoundException('Order not found');
    }

    return this.prisma.order.update({
      where: { id },
      data: { status: status as any },
      include: {
        orderItems: {
          include: {
            product: true
          }
        }
      }
    });
  }
}