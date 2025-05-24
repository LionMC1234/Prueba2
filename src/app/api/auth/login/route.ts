import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db/mongodb';
import User from '@/models/User';
import jwt from 'jsonwebtoken';

// Clave secreta para JWT (en producción, usar variables de entorno)
const JWT_SECRET = 'your_jwt_secret_key_should_be_more_complex_in_production';

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { email, password } = await req.json();

    // Validaciones básicas
    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Correo y contraseña son requeridos' },
        { status: 400 }
      );
    }

    // Buscar usuario y seleccionar explícitamente el campo password
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Credenciales inválidas' },
        { status: 401 }
      );
    }

    // Verificar contraseña
    const isPasswordMatch = await user.comparePassword(password);

    if (!isPasswordMatch) {
      return NextResponse.json(
        { success: false, message: 'Credenciales inválidas' },
        { status: 401 }
      );
    }

    // Actualizar IP si ha cambiado
    const forwardedFor = req.headers.get('x-forwarded-for');
    const ipAddress = forwardedFor ? forwardedFor.split(',')[0] : '127.0.0.1';

    if (user.ipAddress !== ipAddress) {
      user.ipAddress = ipAddress;
      await user.save();
    }

    // Generar token JWT
    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
        email: user.email,
        membership: user.membership
      },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    // Datos del usuario para devolver (sin password)
    const userData = {
      id: user._id,
      username: user.username,
      email: user.email,
      membership: user.membership,
    };

    return NextResponse.json(
      {
        success: true,
        message: 'Inicio de sesión exitoso',
        user: userData,
        token
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Error al iniciar sesión:', error);
    return NextResponse.json(
      { success: false, message: 'Error al iniciar sesión', error: error.message },
      { status: 500 }
    );
  }
}
