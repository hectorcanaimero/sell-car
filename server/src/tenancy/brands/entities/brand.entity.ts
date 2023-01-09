import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { TypeVehicle } from '@tenancy/type-vehicles/entities/type-vehicle.entity';

export type BrandDocument = Brand & mongoose.Document;

@Schema({ timestamps: true, versionKey: false })
export class Brand {
  @Prop()
  name: string;

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TypeVehicle',
      },
    ],
  })
  typeVehicle: TypeVehicle;

  @Prop({ default: true })
  status: boolean;
}

export const BrandSchema = SchemaFactory.createForClass(Brand);
