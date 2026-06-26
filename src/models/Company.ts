import { Schema, model, models, Model, InferSchemaType } from "mongoose";

const CompanySchema = new Schema(
  {
    userId: { type: String, required: true },

    ownerName: {
      type: String,
      required: true,
    },

    companyLogin: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    country: String,
    state: String,
    city: String,
    zip: String,
    address: String,
  },
  {
    timestamps: true,
  }
);

export type ICompany = InferSchemaType<typeof CompanySchema>;

const Company =
  (models.Company as Model<ICompany>) ||
  model<ICompany>("Company", CompanySchema);

export default Company;