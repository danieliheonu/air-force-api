import mongoose, { Schema, Types, model } from "mongoose";
import { schemaOptions } from "./mixins";

export interface ShipDocument {
	_id?: Types.ObjectId;
	name: string;
	mothership: mongoose.Schema.Types.ObjectId;
	crews: any[];
	created_at?: Date;
	updated_at?: Date;
}

const ShipSchema = new Schema<ShipDocument>(
	{
		name: {
			type: String,
			required: true,
		},
		mothership: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: "MotherShip",
		}
	},
	schemaOptions
);

ShipSchema.virtual('crews',{
	ref: 'Crew',
	localField: '_id',
	foreignField: 'ship',
})

export default model<ShipDocument>("Ship", ShipSchema);
