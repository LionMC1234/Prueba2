import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db/mongodb';
import User from '@/models/User';

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { username, email, password, membership = 'basic' } = await req.json();

    // Validaciones básicas
    if (!username || !email || !password) {
      return NextResponse.json(
        { success: false, message: 'Falta información requerida' },
        { status: 400 }
      );
    }

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({
      $or: [{ email }, { username }]
    });

    if (existingUser) {
      return NextResponse.json(
        { success: false, message: 'El usuario o correo electrónico ya existe' },
        { status: 409 }
      );
    }

    // Obtener IP del cliente
    const forwardedFor = req.headers.get('x-forwarded-for');
    const ipAddress = forwardedFor ? forwardedFor.split(',')[0] : '127.0.0.1';

    // Crear nuevo usuario
    const newUser = await User.create({
      username,
      email,
      password,
      membership,
      ipAddress,
    });

    // Omitir la contraseña en la respuesta
    const user = {
      id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      membership: newUser.membership,
    };

    return NextResponse.json(
      { success: true, message: 'Usuario registrado exitosamente', user },
      { status: 201 }
    );

  } catch (error: any) {
    console.error('Error al registrar usuario:', error);
    return NextResponse.json(
      { success: false, message: 'Error al registrar usuario', error: error.message },
      { status: 500 }
    );
  }
}
