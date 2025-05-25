import mongoose, { type Document, type Model, Schema } from 'mongoose'

export interface IUser extends Document {
  name: string
  email: string
  password: string
  image?: string
  emailVerified?: Date
  createdAt: Date
  updatedAt: Date
}

const UserSchema: Schema<IUser> = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
    lowercase: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please provide a valid email address',
    ],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: [6, 'Password must be at least 6 characters'],
    select: false, // Don't include password in queries by default
  },
  image: {
    type: String,
    default: null,
  },
  emailVerified: {
    type: Date,
    default: null,
  },
}, {
  timestamps: true,
})

// Prevent re-compilation of the model
const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema)

export default User