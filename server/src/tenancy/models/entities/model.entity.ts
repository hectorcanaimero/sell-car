import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Brand } from '@tenancy/brands/entities/brand.entity';

export type ModelsDocument = Models & mongoose.Document;

@Schema({ timestamps: true, versionKey: false })
export class Models {
  @Prop()
  name: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Brand.name,
    autopopulate: true,
  })
  brand: Brand;

  @Prop({ default: true })
  status: boolean;
}

export const ModelsSchema = SchemaFactory.createForClass(Models);
