'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const { login, error, loading, clearError } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Verificar si viene de registro exitoso
    const registered = searchParams.get('registered');
    if (registered === 'true') {
      setRegistrationSuccess(true);

      // Ocultar mensaje de éxito después de 5 segundos
      const timer = setTimeout(() => {
        setRegistrationSuccess(false);
      }, 5000);

      return () => clearTimeout(timer);
    }

    // Obtener redirect URL si existe
    const redirect = searchParams.get('redirect');
    if (redirect) {
      // Guardar en sessionStorage para redirigir después de login
      sessionStorage.setItem('redirectAfterLogin', redirect);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    setFormError('');

    // Validaciones básicas
    if (!email || !password) {
      setFormError('Por favor ingresa tu correo y contraseña');
      return;
    }

    const success = await login(email, password);

    if (success) {
      // Verificar si hay una redirección pendiente
      const redirectPath = sessionStorage.getItem('redirectAfterLogin');
      if (redirectPath) {
        sessionStorage.removeItem('redirectAfterLogin');
        router.push(redirectPath);
      } else {
        router.push('/dashboard');
      }
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="absolute -inset-0.5 bg-gradient-nekotina rounded-2xl blur opacity-30"></div>
      <Card className="w-full max-w-md mx-auto border border-nekotina-200 bg-white/95 backdrop-blur-sm rounded-xl shadow-nekotina-strong relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-nekotina-100 rounded-full -translate-y-16 translate-x-16 opacity-50 blur-2xl pointer-events-none"></div>

        <CardHeader className="relative z-10 space-y-1 pb-8 text-center">
          <CardTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-nekotina">Iniciar sesión</CardTitle>
          <CardDescription className="text-nekodark-600">
            Ingresa tus credenciales para acceder
          </CardDescription>
        </CardHeader>

        <CardContent className="relative z-10">
          <form onSubmit={handleSubmit} className="space-y-4">
            {registrationSuccess && (
              <Alert className="border border-green-200 bg-green-50 text-green-800">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">
                  ¡Registro exitoso! Ahora puedes iniciar sesión con tus credenciales.
                </AlertDescription>
              </Alert>
            )}

            {(error || formError) && (
              <Alert variant="destructive" className="border border-red-200 text-red-800 bg-red-50">
                <AlertCircle className="h-4 w-4 text-red-600" />
                <AlertDescription>
                  {formError || error}
                </AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="text-nekodark-800 font-medium">Correo electrónico</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@correo.com"
                autoComplete="email"
                className="border-nekotina-200 focus:border-nekotina-500 focus:ring-nekotina-300"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-nekodark-800 font-medium">Contraseña</Label>
                <Link href="/forgot-password" className="text-xs text-nekotina-700 hover:text-nekotina-800 hover:underline underline-offset-2">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                autoComplete="current-password"
                className="border-nekotina-200 focus:border-nekotina-500 focus:ring-nekotina-300"
              />
            </div>

            <Button
              type="submit"
              className="w-full py-6 mt-6 bg-gradient-nekotina hover:opacity-90 transition-opacity text-white shadow-nekotina font-medium"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Iniciando sesión...
                </div>
              ) : 'Iniciar sesión'}
            </Button>

            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-nekotina-100"></div>
              <span className="flex-shrink mx-4 text-nekodark-500 text-xs">o continúa con</span>
              <div className="flex-grow border-t border-nekotina-100"></div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2 py-2.5 border border-nekotina-100 rounded-lg hover:bg-nekotina-50 transition-colors"
              >
                <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#a)">
                    <path d="M19.999 10.22c0-.66-.06-1.3-.17-1.91H10.2v3.6h5.48a4.7 4.7 0 0 1-2.04 3.1v2.58h3.3c1.93-1.77 3.06-4.4 3.06-7.37Z" fill="#4285F4"/>
                    <path d="M10.2 20c2.76 0 5.07-.91 6.76-2.45l-3.3-2.56a6.01 6.01 0 0 1-9-3.18H1.24v2.65A10.4 10.4 0 0 0 10.2 20Z" fill="#34A853"/>
                    <path d="M4.66 11.82a6.14 6.14 0 0 1 0-3.64V5.53H1.25a10.42 10.42 0 0 0 0 8.94l3.4-2.65Z" fill="#FBBC05"/>
                    <path d="M10.2 3.98c1.46 0 2.79.5 3.82 1.49v.01l2.93-2.92A9.9 9.9 0 0 0 10.2 0a10.4 10.4 0 0 0-8.96 5.5l3.4 2.66a6.01 6.01 0 0 1 5.56-4.18Z" fill="#EA4335"/>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h20v20H0z"/>
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-nekodark-800 text-sm">Google</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 py-2.5 border border-nekotina-100 rounded-lg hover:bg-nekotina-50 transition-colors"
              >
                <svg width="22" height="22" fill="currentColor" className="text-nekodark-800">
                  <path d="M16.31 10.74a5.47 5.47 0 0 0 1.33-3.58c0-2.37-1.7-4.5-4.05-5a5.12 5.12 0 0 0-2.26 3.8c0 1.86 1 3.52 2.36 4.42-.28.8-1.06 2.76-3.2 4.3 2.1.16 3.55-.23 4.5-.56.53-.2 1.29-.23 2.1-.16-1.02-1.63-2.2-1.9-2.2-1.9.84.26 3.07 1.2 3.87 3.17 1.2-.2 2.26-.36 3.52-.76-1.03-1.93-3.97-3.83-5.98-3.73Z"/>
                  <path d="M11.35 12.65c-.49-.8-.39-1.16-.39-1.16.33.1 1.33.2 1.93.83.39-.16.89-.56 1.2-.96-.47-.13-.99-.1-1.3-.06a4.52 4.52 0 0 1-1.56.23.8.8 0 0 0 .12 1.12Z"/>
                </svg>
                <span className="text-nekodark-800 text-sm">Discord</span>
              </button>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex justify-center relative z-10 pt-4 pb-8">
          <p className="text-sm text-nekodark-600">
            ¿No tienes una cuenta?{' '}
            <Link href="/register" className="font-medium text-nekotina-700 hover:text-nekotina-800 underline-offset-2 hover:underline">
              Crear cuenta
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginForm;
