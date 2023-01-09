import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TypeVehicleDocument = TypeVehicle & Document;

@Schema({ timestamps: true, versionKey: false })
export class TypeVehicle {
  @Prop()
  name: string;

  @Prop({ default: true })
  status: boolean;
}

export const TypeVehicleSchema = SchemaFactory.createForClass(TypeVehicle);
