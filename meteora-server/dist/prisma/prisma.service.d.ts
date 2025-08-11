import { OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';
export declare class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    user: any;
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
}
