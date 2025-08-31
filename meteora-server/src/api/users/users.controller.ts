import { Roles } from 'src/common/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt.auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { UserService } from './users.service';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async create(@Body() data: any): Promise<any> {
    const user = await this.userService.createUser(data);

    return {
      user,
    };
  }

  @Get()
  async getUsers() {
    return this.userService.findAll();
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    return this.userService.removeUser(id);
  }

  @Put('update/:id')
  async update(@Param('id') id: string, @Body() updateData: any) {
    const updatedUser = await this.userService.updateUser(
      Number(id),
      updateData,
    );
    return updatedUser;
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('candidate')
  async getDashboard(@Req() req) {
    const userId = req.user.sub;
    console.log(userId);
    return this.userService.getInfo(userId);
  }
}
