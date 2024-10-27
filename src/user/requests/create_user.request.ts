import { Type } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  ValidateNested,
} from 'class-validator';

export enum genderEnum {
  MALE = '1', //ผู้ชาย
  FEMALE = '2', //ผู้หญิง
}

export class UserRequest {
  @IsNotEmpty()
  fname: string;

  @IsNotEmpty()
  lname: string;

  @IsOptional()
  phone?: string;

  @IsEnum(genderEnum)
  gender: string;
}

export class CreateUserRequest {
  @Type(() => UserRequest)
  @ValidateNested()
  @IsNotEmpty()
  userData: UserRequest;
}
