import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CarDocument = Car & Document;

@Schema()
export class Car {
  @Prop()
  brand: string;

  @Prop()
  model: string;
}

const CarSchema = SchemaFactory.createForClass(Car);
export { CarSchema };
