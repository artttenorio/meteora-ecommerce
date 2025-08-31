import { Injectable } from '@nestjs/common';
import { PrismaService } from '../api/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateProductDto) {
    return this.prisma.product.create({ data });
  }

  findAll() {
    return this.prisma.product.findMany({
      include: { category: true },
    });
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({ where: { id } });
  }

  remove(id: number) {
    return this.prisma.product.delete({ where: { id } });
  }

  update(id: number, data: CreateProductDto) {
    return this.prisma.product.update({
      where: { id },
      data,
    });
  }
}
