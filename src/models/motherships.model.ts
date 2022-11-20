import mongoose, { Schema, Types, model } from "mongoose";
import { schemaOptions } from "./mixins";

export interface MotherShipDocument {
	_id?: Types.ObjectId;
	name: string;
	user: mongoose.Schema.Types.ObjectId;
	ships: any[];
	created_at?: Date;
	updated_at?: Date;
}

const MotherShipSchema = new Schema<MotherShipDocument>(
	{
		name: {
			type: String,
			required: true,
		},
		user: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
	},
	schemaOptions
);

MotherShipSchema.virtual("ships", {
	ref: "Ship",
	localField: "_id",
	foreignField: "mothership",
});

export default model<MotherShipDocument>("MotherShip", MotherShipSchema);
