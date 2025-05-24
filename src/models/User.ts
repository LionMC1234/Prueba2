import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

export type MembershipType = 'basic' | 'premium' | 'vip';

export interface IUser extends mongoose.Document {
  username: string;
  email: string;
  password: string;
  membership: MembershipType;
  ipAddress: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema = new mongoose.Schema<IUser>(
  {
    username: {
      type: String,
      required: [true, 'Por favor proporciona un nombre de usuario'],
      unique: true,
      trim: true,
      minlength: [3, 'El nombre de usuario debe tener al menos 3 caracteres'],
      maxlength: [20, 'El nombre de usuario no puede exceder los 20 caracteres'],
    },
    email: {
      type: String,
      required: [true, 'Por favor proporciona un correo electrónico'],
      unique: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Por favor proporciona un correo electrónico válido',
      ],
    },
    password: {
      type: String,
      required: [true, 'Por favor proporciona una contraseña'],
      minlength: [6, 'La contraseña debe tener al menos 6 caracteres'],
      select: false, // No incluir password en consultas
    },
    membership: {
      type: String,
      enum: ['basic', 'premium', 'vip'],
      default: 'basic',
    },
    ipAddress: {
      type: String,
      required: [true, 'Es necesaria la dirección IP'],
    },
  },
  { timestamps: true }
);

// Middleware para hashear la contraseña antes de guardar
UserSchema.pre('save', async function (next) {
  // Solo hashear si la contraseña ha sido modificada (o es nueva)
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error: any) {
    next(error);
  }
});

// Método para comparar contraseñas
UserSchema.methods.comparePassword = async function (candidatePassword: string) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Usar una función para exportar el modelo para evitar errores de modelos duplicados
export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
