import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<{
        accessToken: string;
        refreshToken: string;
        userType: "candidate" | "company" | null;
        userId: any;
    }>;
    refreshToken(token: string): Promise<{
        accessToken: string;
    }>;
    login(dto: {
        email: string;
        password: string;
    }): Promise<{
        accessToken: string;
        refreshToken: string;
        userType: "candidate" | "company" | null;
        userId: any;
    }>;
}
