import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(dto: CreateProductDto): import("generated/prisma").Prisma.Prisma__ProductClient<{
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
}
