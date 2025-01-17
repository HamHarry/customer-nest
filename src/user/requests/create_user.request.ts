import { Type } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { GenderEnum } from 'src/enums/user.enum';

export class UserRequest {
  @IsNotEmpty()
  fname: string;

  @IsNotEmpty()
  lname: string;

  @IsOptional()
  phone?: string;

  @IsEnum(GenderEnum)
  gender: string;
}

export class CreateUserRequest {
  @Type(() => UserRequest)
  @ValidateNested()
  @IsNotEmpty()
  userData: UserRequest;
}
