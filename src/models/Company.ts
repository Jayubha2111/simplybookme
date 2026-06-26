import mongoose, { Schema, models, model } from 'mongoose'

export interface ICompany {
  _id?: string
  userId: string
  ownerName: string
  companyLogin: string   // unique URL slug — e.g. "jayraj" → jayraj.simplybook.me
  phone: string
  category: string
  country?: string
  state?: string
  city?: string
  zip?: string
  address?: string
  createdAt?: Date
}

const CompanySchema = new Schema<ICompany>(
  {
    userId: {
      type: String,
      required: true,
    },
    ownerName: {
      type: String,
      required: true,
      trim: true,
    },
    companyLogin: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
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
  { timestamps: true }
)

const Company = models.Company || model<ICompany>('Company', CompanySchema)
export default Company