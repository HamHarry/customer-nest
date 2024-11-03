import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { GenderEnum } from 'src/enums/user.enum';

export type UserDocument = User & Document;

@Schema()
export class User {
  // required: true เฉพาะ key สำคัญ
  @Prop({ required: true })
  fname: string;

  @Prop({ required: true })
  lname: string;

  @Prop()
  phone: string;

  // default values
  @Prop({ default: GenderEnum.MALE })
  gender: string;
}

const UserSchema = SchemaFactory.createForClass(User);
export { UserSchema };
