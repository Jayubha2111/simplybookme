import mongoose, { Schema, models, model } from 'mongoose'

export interface IUser {
  _id?: string
  name: string
  email: string
  password?: string        // optional — Google users won't have this
  image?: string           // Google profile picture
  provider: 'credentials' | 'google'
  createdAt?: Date
}

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      // Not required — Google login users won't have a password
    },
    image: {
      type: String,
    },
    provider: {
      type: String,
      enum: ['credentials', 'google'],
      default: 'credentials',
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt automatically
  }
)

// Prevent model recompilation in Next.js dev mode
const User = models.User || model<IUser>('User', UserSchema)
export default User