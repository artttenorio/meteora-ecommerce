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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createUser(createUser) {
        const existEmail = await this.prisma.user.findFirst({
            where: { email: createUser.email },
        });
        if (existEmail) {
            throw new common_1.ConflictException('email já cadastrado');
        }
        const hashedPassword = await bcrypt.hash(createUser.password, 10);
        return this.prisma.user.create({
            data: { ...createUser, password: hashedPassword },
        });
    }
    async findAll(skip = 0, filters) {
        return this.prisma.user.findMany({
            skip,
            where: filters,
        });
    }
    async getInfo(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
        });
        if (!user) {
            throw new common_1.ConflictException('Usuário não encontrado');
        }
        return {
            user,
        };
    }
    async removeUser(id) {
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
    async updateUser(id, updateData) {
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
        }
        catch (error) {
            throw new common_1.ConflictException('Erro ao atualizar usuário: ' + error.message);
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=users.service.js.map