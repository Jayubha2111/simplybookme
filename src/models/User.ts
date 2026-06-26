import { Schema, model, models, Model, InferSchemaType } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: String,

    image: String,

    provider: {
      type: String,
      enum: ["credentials", "google"],
      default: "credentials",
    },
  },
  {
    timestamps: true,
  }
);

export type IUser = InferSchemaType<typeof UserSchema>;

const User =
  (models.User as Model<IUser>) || model<IUser>("User", UserSchema);

export default User;