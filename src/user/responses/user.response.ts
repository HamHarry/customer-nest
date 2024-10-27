import { Expose, Type } from 'class-transformer';

export class UserResponse {
  @Expose()
  _id: string;

  @Expose()
  fname: string;

  @Expose()
  lname: string;

  @Expose()
  phone: string;

  @Expose()
  gender: string;
}

export class UserResponseList {
  @Type(() => UserResponse)
  @Expose()
  data: UserResponse[];
}
