import { PrismaService } from 'src/api/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user-dto';
import { User } from './entities/user.entity';
import { Prisma } from 'generated/prisma';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    createUser(createUser: CreateUserDto): Promise<User>;
    findAll(skip?: number, filters?: Prisma.UserWhereInput): Promise<{
        name: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string;
        phone: string | null;
        birthDate: Date | null;
        address: string | null;
        isAdmin: boolean;
    }[]>;
    getInfo(userId: number): Promise<{
        user: {
            name: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string;
            phone: string | null;
            birthDate: Date | null;
            address: string | null;
            isAdmin: boolean;
        };
    }>;
    removeUser(id: string): Promise<{
        success: boolean;
        message: string;
        data: {
            name: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string;
            phone: string | null;
            birthDate: Date | null;
            address: string | null;
            isAdmin: boolean;
        };
    }>;
    updateUser(id: number, updateData: Partial<CreateUserDto>): Promise<{
        success: boolean;
        message: string;
        data: {
            name: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string;
            phone: string | null;
            birthDate: Date | null;
            address: string | null;
            isAdmin: boolean;
        };
    }>;
}
