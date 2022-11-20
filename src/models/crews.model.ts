import mongoose, { Schema, Types, model } from "mongoose";
import { schemaOptions } from "./mixins";

interface CrewDocument {
	_id?: Types.ObjectId;
	name: string;
	ship: mongoose.Schema.Types.ObjectId;
	created_at?: Date;
	updated_at?: Date;
}

const CrewSchema = new Schema<CrewDocument>(
	{
		name: {
			type: String,
			required: true,
		},
		ship: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: "Ship",
		},
	},
	schemaOptions
);

export default model<CrewDocument>("Crew", CrewSchema);
