import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

// Clave secreta para JWT (debe coincidir con la de la API)
const JWT_SECRET = 'your_jwt_secret_key_should_be_more_complex_in_production';

// Rutas que requieren autenticación
const protectedRoutes = ['/dashboard', '/profile'];

// Rutas de autenticación
const authRoutes = ['/login', '/register'];

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Verificar si es una ruta protegida
  const isProtectedRoute = protectedRoutes.some(route =>
    path.startsWith(route)
  );

  // Verificar si es una ruta de autenticación
  const isAuthRoute = authRoutes.some(route =>
    path === route
  );

  // Obtener token del header Authorization o de las cookies
  const authHeader = request.headers.get('authorization');
  const token = authHeader ?
    authHeader.split(' ')[1] :
    request.cookies.get('auth_token')?.value;

  // Si es una ruta protegida y no hay token, redirigir a login
  if (isProtectedRoute && !token) {
    const url = new URL('/login', request.url);
    url.searchParams.set('redirect', path);
    return NextResponse.redirect(url);
  }

  // Si hay token, verificarlo
  if (token) {
    try {
      // Verificar validez del token
      const decoded = jwt.verify(token, JWT_SECRET);

      // Si el usuario ya está autenticado e intenta acceder a login/register,
      // redirigirlo al dashboard
      if (isAuthRoute) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
      }

      // Pasar los datos del usuario a la petición para usarlos en la página
      const requestHeaders = new Headers(request.headers);
      requestHeaders.set('x-user-data', JSON.stringify(decoded));

      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    } catch (error) {
      // Token inválido o expirado
      if (isProtectedRoute) {
        // Limpiar cookie y redirigir a login
        const url = new URL('/login', request.url);
        const response = NextResponse.redirect(url);
        response.cookies.delete('auth_token');
        return response;
      }
    }
  }

  return NextResponse.next();
}

// Configurar matcher para rutas que queremos procesar
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images|.*\\.png$).*)',
  ],
};
