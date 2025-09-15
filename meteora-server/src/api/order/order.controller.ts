import { Controller, Get, Post, Body, Patch, Param, UseGuards, Request } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { JwtAuthGuard } from '../auth/guards/jwt.auth.guard';

@Controller('orders')
@UseGuards(JwtAuthGuard)
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Request() req, @Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(req.user.userId, createOrderDto);
  }

  @Get()
  findAll(@Request() req) {
    return this.orderService.findAllByUser(req.user.userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Request() req) {
    return this.orderService.findOne(+id, req.user.userId);
  }

  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body('status') status: string) {
    return this.orderService.updateStatus(+id, status);
  }
}