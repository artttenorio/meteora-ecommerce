"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    prisma;
    jwtService;
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async validateUser(email, password) {
        let user = await this.prisma.user.findUnique({ where: { email } });
        if (!user) {
            throw new Error('Usuário não encontrado');
        }
        const userType = user.isAdmin ? 'admin' : 'user';
        if (!user || !(await bcrypt.compare(password, user.password))) {
            throw new common_1.UnauthorizedException('Email ou senha incorretos');
        }
        const payload = { sub: user.id, email: user.email, role: userType };
        const accessToken = await this.jwtService.signAsync(payload, {
            expiresIn: '1d',
        });
        const refreshToken = await this.jwtService.signAsync(payload, {
            expiresIn: '7d',
        });
        return {
            accessToken,
            refreshToken,
            userType,
            userId: user.id,
        };
    }
    async refreshToken(token) {
        try {
            const payload = await this.jwtService.verifyAsync(token);
            const newAccessToken = await this.jwtService.signAsync({ sub: payload.sub, email: payload.email, role: payload.role }, { expiresIn: '4h' });
            return { accessToken: newAccessToken };
        }
        catch (err) {
            throw new common_1.UnauthorizedException('Refresh token inválido ou expirado');
        }
    }
    async login(dto) {
        return this.validateUser(dto.email, dto.password);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map