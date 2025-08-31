import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    let user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    const userType = user.isAdmin ? 'admin' : 'user';

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Email ou senha incorretos');
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

  async refreshToken(token: string) {
    try {
      const payload = await this.jwtService.verifyAsync(token);
      const newAccessToken = await this.jwtService.signAsync(
        { sub: payload.sub, email: payload.email, role: payload.role },
        { expiresIn: '4h' },
      );
      return { accessToken: newAccessToken };
    } catch (err) {
      throw new UnauthorizedException('Refresh token inválido ou expirado');
    }
  }

  async login(dto: { email: string; password: string }) {
    return this.validateUser(dto.email, dto.password);
  }
}
