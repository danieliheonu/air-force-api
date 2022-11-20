import { Schema, Types, model } from "mongoose";
import bcrypt from "bcryptjs";
import { schemaOptions } from "./mixins";

export interface UserDocument {
	_id?: Types.ObjectId;
	email: string;
	password: string;
	created_at?: Date;
	updated_at?: Date;
}

const UserSchema = new Schema<UserDocument>(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	schemaOptions
);

UserSchema.pre("save", async function (next) {
	if (this.isModified("password")) {
		this.password = await bcrypt.hash(this.password, 8);
	}
	next();
});

export default model<UserDocument>("User", UserSchema);
