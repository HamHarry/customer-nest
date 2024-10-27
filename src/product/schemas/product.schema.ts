import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  size: string;

  @Prop()
  price: number;
}

const ProductSchema = SchemaFactory.createForClass(Product);
export { ProductSchema };
