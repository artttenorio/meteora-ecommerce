import { UserService } from './users.service';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UserService);
    create(data: any): Promise<any>;
    getUsers(): Promise<{
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
    remove(id: string): Promise<{
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
    update(id: string, updateData: any): Promise<{
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
    getDashboard(req: any): Promise<{
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
}
