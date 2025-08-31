import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/api/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user-dto';
import { User } from './entities/user.entity';
import { Prisma } from 'generated/prisma';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(createUser: CreateUserDto): Promise<User> {
    const existEmail = await this.prisma.user.findFirst({
      where: { email: createUser.email },
    });

    if (existEmail) {
      throw new ConflictException('email já cadastrado');
    }
    const hashedPassword = await bcrypt.hash(createUser.password, 10);

    return this.prisma.user.create({
      data: { ...createUser, password: hashedPassword },
    });
  }

  async findAll(skip = 0, filters?: Prisma.UserWhereInput) {
    return this.prisma.user.findMany({
      skip,
      where: filters,
    });
  }

  async getInfo(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      throw new ConflictException('Usuário não encontrado');
    }
    return {
      user,
    };
  }

  async removeUser(id: string) {
    const userId = parseInt(id);

    const deletedId = await this.prisma.user.delete({
      where: {
        id: userId,
      },
    });

    return {
      success: true,
      message: 'Usuario deletado com sucesso',
      data: deletedId,
    };
  }

  async updateUser(id: number, updateData: Partial<CreateUserDto>) {
    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 10);
    }

    try {
      const updatedUser = await this.prisma.user.update({
        where: { id },
        data: updateData,
      });
      return {
        success: true,
        message: 'Usuário atualizado com sucesso',
        data: updatedUser,
      };
    } catch (error) {
      throw new ConflictException(
        'Erro ao atualizar usuário: ' + error.message,
      );
    }
  }
}
