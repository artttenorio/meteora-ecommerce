import { CreateProductDto } from './dto/create-product.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class ProductService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateProductDto): import("generated/prisma").Prisma.Prisma__ProductClient<{
        name: string;
        imageUrl: string | null;
        id: number;
        description: string | null;
        price: import("generated/prisma/runtime/library").Decimal;
        stock: number;
        categoryId: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findAll(): import("generated/prisma").Prisma.PrismaPromise<({
        category: {
            name: string;
            imageUrl: string | null;
            id: number;
        };
    } & {
        name: string;
        imageUrl: string | null;
        id: number;
        description: string | null;
        price: import("generated/prisma/runtime/library").Decimal;
        stock: number;
        categoryId: number;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: number): import("generated/prisma").Prisma.Prisma__ProductClient<{
        name: string;
        imageUrl: string | null;
        id: number;
        description: string | null;
        price: import("generated/prisma/runtime/library").Decimal;
        stock: number;
        categoryId: number;
        createdAt: Date;
        updatedAt: Date;
    } | null, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    remove(id: number): import("generated/prisma").Prisma.Prisma__ProductClient<{
        name: string;
        imageUrl: string | null;
        id: number;
        description: string | null;
        price: import("generated/prisma/runtime/library").Decimal;
        stock: number;
        categoryId: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    update(id: number, data: CreateProductDto): import("generated/prisma").Prisma.Prisma__ProductClient<{
        name: string;
        imageUrl: string | null;
        id: number;
        description: string | null;
        price: import("generated/prisma/runtime/library").Decimal;
        stock: number;
        categoryId: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
}
