import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserRequest } from './requests/create_user.request';
import { UserResponse, UserResponseList } from './responses/user.response';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import { modelMapper } from 'src/utils/mapper.utils';
import { GenderEnum } from 'src/enums/user.enum';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>, // userModel เรียกใช้ Database
  ) {}

  async createUser(
    createUserRequest: CreateUserRequest,
  ): Promise<UserResponse> {
    try {
      const { userData: userData } = createUserRequest;
      const createdUser = await new this.userModel(userData).save();

      const user = modelMapper(UserResponse, createdUser);
      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getUserMongos(): Promise<UserResponse[]> {
    const userRerults = await this.userModel.find();
    if (!userRerults) throw new NotFoundException('user not found');

    const users = modelMapper(UserResponseList, { data: userRerults }).data;
    return users;
  }

  async getUserMongoByID(userId: string): Promise<UserResponse> {
    const userRerult = await this.userModel.findById(userId);
    if (!userRerult) throw new NotFoundException('userById not found');

    const user = modelMapper(UserResponse, userRerult);
    return user;
  }

  async updateUserByID(userId: string, updateUserRequest: CreateUserRequest) {
    const user = updateUserRequest.userData;
    const updatedUser = await this.userModel.findByIdAndUpdate(userId, user);
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

  checkGender(gender: string) {
    if (gender === GenderEnum.MALE) {
    }
  }
}
