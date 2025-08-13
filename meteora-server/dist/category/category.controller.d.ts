import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(dto: CreateCategoryDto): import("generated/prisma").Prisma.Prisma__CategoryClient<{
        name: string;
        imageUrl: string | null;
        id: number;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findAll(): import("generated/prisma").Prisma.PrismaPromise<({
        products: {
            name: string;
            imageUrl: string | null;
            id: number;
            description: string | null;
            price: import("generated/prisma/runtime/library").Decimal;
            stock: number;
            categoryId: number;
            createdAt: Date;
            updatedAt: Date;
        }[];
    } & {
        name: string;
        imageUrl: string | null;
        id: number;
    })[]>;
}
