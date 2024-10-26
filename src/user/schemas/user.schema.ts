import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  fname: string;

  @Prop()
  lname: string;

  @Prop()
  phone: string;
}

const UserSchema = SchemaFactory.createForClass(User);
export { UserSchema };
