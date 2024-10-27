import { Injectable } from '@nestjs/common';
import { CreateUserRequest } from './requests/create_user.request';
import { UserResponse } from './responses/user.response';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async createUser(createUserRequest: CreateUserRequest) {
    const createdUser = await new this.userModel(createUserRequest).save();
    return createdUser;
  }

  async getUserMongo() {
    const userRerults = await this.userModel.find();
    return userRerults;
  }

  async getUserMongoByID(userId: string): Promise<UserResponse> {
    const userRerults = await this.userModel.findById(userId);
    return userRerults as UserResponse;
  }

  async updateUserByID(userId: string, updateUserRequest: CreateUserRequest) {
    const updatedUser = await this.userModel.findByIdAndUpdate(
      userId,
      updateUserRequest,
    );
    return updatedUser;
  }

  async deleteAllUsers() {
    const deletedUsers = await this.userModel.deleteMany();
    return deletedUsers;
  }

  async deleteUserById(userId: string) {
    const deletedUserById = await this.userModel.findByIdAndDelete(userId);
    return deletedUserById;
  }
}
