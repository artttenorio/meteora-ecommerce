export declare class CreateUserDto {
    email: string;
    password: string;
    name?: string;
    phone?: string;
    birthDate?: Date;
    address?: string;
    isAdmin?: boolean;
}
export declare class UpdateUserDto {
    email?: string;
    password?: string;
    name?: string;
    phone?: string;
    birthDate?: Date;
    address?: string;
    isAdmin?: boolean;
}
