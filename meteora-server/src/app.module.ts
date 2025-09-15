import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './api/prisma/prisma.module';
import { CategoryModule } from './api/auth/category/category.module';
import { ProductModule } from './api/product/product.module';
import { AuthModule } from './api/auth/auth.module';
import { UsersModule } from './api/users/users.module';
import { OrderModule } from './api/order/order.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 👈 garante que todas as variáveis do .env fiquem disponíveis
    }),
    PrismaModule,
    CategoryModule,
    ProductModule,
    AuthModule,
    UsersModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
