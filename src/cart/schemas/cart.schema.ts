import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema, Document, Types } from 'mongoose';
import { Product } from 'src/product/schemas/product.schema';

export type CartDocument = Cart & Document;

@Schema({
  toJSON: { virtuals: true },
})
export class Cart {
  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: Product.name })
  productIds: Types.ObjectId;

  @Prop()
  totalPrice: number;

  @Prop()
  totalItem: number;
}

const CartSchema = SchemaFactory.createForClass(Cart);

//TODO: ยังไม่ได้สอน แค่พูดเฉยๆ
CartSchema.virtual('products', {
  ref: Product.name,
  localField: 'productIds',
  foreignField: '_id',
});

export { CartSchema };
