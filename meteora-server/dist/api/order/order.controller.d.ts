import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    create(req: any, createOrderDto: CreateOrderDto): Promise<{
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
    findAll(req: any): Promise<({
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
    findOne(id: string, req: any): Promise<{
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
    updateStatus(id: string, status: string): Promise<{
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
