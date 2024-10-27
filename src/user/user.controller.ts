import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserRequest } from './requests/create_user.request';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() userRequest: CreateUserRequest) {
    return this.userService.createUser(userRequest);
  }

  @Get()
  getUserMongo() {
    return this.userService.getUserMongos();
  }

  @Get(':userId')
  getUserMongoByID(@Param('userId') userId: string) {
    return this.userService.getUserMongoByID(userId);
  }

  @Put(':userId')
  updateUserByID(
    @Param('userId') userId: string,
    @Body() updateUserRequest: CreateUserRequest,
  ) {
    return this.userService.updateUserByID(userId, updateUserRequest);
  }

  @Delete()
  deleteAllUsers() {
    return this.userService.deleteAllUsers();
  }

  @Delete(':userId')
  deleteUserById(@Param('userId') userId: string) {
    return this.userService.deleteUserById(userId);
  }
}
