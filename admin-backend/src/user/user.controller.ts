import { Controller, Get, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}


@Post()
async create(@Body() createUser: any) {
    return await this.userService.create(createUser);
  }

@Post('login')
async login(@Body() body: { name: string; password: string }) {
    const user = await this.userService.login(body.name, body.password);
    if (!user) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }
}
