import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(dto: LoginDto): Promise<{
        accessToken: string;
        refreshToken: string;
        userType: string;
        userId: number;
    }>;
    refresh(refreshToken: string): Promise<{
        accessToken: string;
    }>;
}
