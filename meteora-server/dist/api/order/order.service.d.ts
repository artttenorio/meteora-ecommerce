import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
export declare class OrderService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: number, createOrderDto: CreateOrderDto): Promise<{
        orderItems: ({
            product: {
                createdAt: Date;
                updatedAt: Date;
                id: number;
                price: import("generated/prisma/runtime/library").Decimal;
                name: string;
                description: string | null;
                imageUrl: string | null;
                stock: number;
                categoryId: number;
            };
        } & {
            id: number;
            quantity: number;
            price: import("generated/prisma/runtime/library").Decimal;
            productId: number;
            orderId: number;
        })[];
    } & {
        status: import("generated/prisma").$Enums.OrderStatus;
        total: import("generated/prisma/runtime/library").Decimal;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
    }>;
    findAllByUser(userId: number): Promise<({
        orderItems: ({
            product: {
                createdAt: Date;
                updatedAt: Date;
                id: number;
                price: import("generated/prisma/runtime/library").Decimal;
                name: string;
                description: string | null;
                imageUrl: string | null;
                stock: number;
                categoryId: number;
            };
        } & {
            id: number;
            quantity: number;
            price: import("generated/prisma/runtime/library").Decimal;
            productId: number;
            orderId: number;
        })[];
    } & {
        status: import("generated/prisma").$Enums.OrderStatus;
        total: import("generated/prisma/runtime/library").Decimal;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
    })[]>;
    findOne(id: number, userId: number): Promise<{
        orderItems: ({
            product: {
                createdAt: Date;
                updatedAt: Date;
                id: number;
                price: import("generated/prisma/runtime/library").Decimal;
                name: string;
                description: string | null;
                imageUrl: string | null;
                stock: number;
                categoryId: number;
            };
        } & {
            id: number;
            quantity: number;
            price: import("generated/prisma/runtime/library").Decimal;
            productId: number;
            orderId: number;
        })[];
    } & {
        status: import("generated/prisma").$Enums.OrderStatus;
        total: import("generated/prisma/runtime/library").Decimal;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
    }>;
    updateStatus(id: number, status: string): Promise<{
        orderItems: ({
            product: {
                createdAt: Date;
                updatedAt: Date;
                id: number;
                price: import("generated/prisma/runtime/library").Decimal;
                name: string;
                description: string | null;
                imageUrl: string | null;
                stock: number;
                categoryId: number;
            };
        } & {
            id: number;
            quantity: number;
            price: import("generated/prisma/runtime/library").Decimal;
            productId: number;
            orderId: number;
        })[];
    } & {
        status: import("generated/prisma").$Enums.OrderStatus;
        total: import("generated/prisma/runtime/library").Decimal;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
    }>;
}
