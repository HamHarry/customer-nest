import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRequest } from './requests/user.request';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() userRequest: UserRequest) {
    return this.userService.create(userRequest);
  }
}
