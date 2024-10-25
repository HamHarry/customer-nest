import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRequest } from './requests/user.request';
import { UserResponse } from './responses/user.response';

@Injectable()
export class UserService {
  create(userRequest: UserRequest) {
    return userRequest;
  }

  getUser(userId: string): UserResponse {
    const users: UserResponse[] = [
      {
        id: '1',
        fname: 'Saowapak',
        lname: 'Noibua',
        age: 23,
      },
      {
        id: '2',
        fname: 'Ingkarat',
        lname: 'Ruchai',
        age: 24,
      },
    ];

    if (!userId) throw new NotFoundException('User Not found');

    const findedUser = users.find((user) => {
      return user.id === userId;
    });
    return findedUser;
  }
}
