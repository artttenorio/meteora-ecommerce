import { IsArray, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CreateOrderItemDto {
  @IsNumber()
  @IsPositive()
  productId: number;

  @IsNumber()
  @IsPositive()
  quantity: number;
}

export class CreateOrderDto {
  @IsArray()
  @IsNotEmpty()
  items: CreateOrderItemDto[];
}