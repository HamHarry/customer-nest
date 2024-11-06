import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SummaryDocument = Summary & Document;

@Schema()
export class Summary {
  @Prop()
  name: string;

  @Prop()
  tel: string;

  @Prop()
  gender: string;
}

const SummarySchema = SchemaFactory.createForClass(Summary);
export { SummarySchema };
