'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

type MembershipType = 'basic' | 'premium' | 'vip';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [membership, setMembership] = useState<MembershipType>('basic');
  const [formError, setFormError] = useState('');
  const { register, error, loading, clearError } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    setFormError('');

    // Validaciones
    if (!username || !email || !password || !confirmPassword) {
      setFormError('Todos los campos son obligatorios');
      return;
    }

    if (password !== confirmPassword) {
      setFormError('Las contraseñas no coinciden');
      return;
    }

    if (password.length < 6) {
      setFormError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    const success = await register(username, email, password, membership);
    if (success) {
      router.push('/login?registered=true');
    }
  };

  // Función para obtener estilos de etiqueta de membership
  const getMembershipStyle = (type: string) => {
    switch (type) {
      case 'premium':
        return 'bg-nekotina2-800 text-white';
      case 'vip':
        return 'bg-purple-600 text-white';
      default:
        return 'bg-blue-100 text-blue-700';
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="absolute -inset-0.5 bg-gradient-nekotina-amber rounded-2xl blur opacity-30"></div>
      <Card className="w-full max-w-md mx-auto border border-nekotina-200 bg-white/95 backdrop-blur-sm rounded-xl shadow-nekotina-strong relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-nekotina-100 rounded-full -translate-y-16 translate-x-16 opacity-50 blur-2xl pointer-events-none"></div>
        <CardHeader className="relative z-10 space-y-1 pb-8 text-center">
          <CardTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-nekotina-light">Crear cuenta</CardTitle>
          <CardDescription className="text-nekodark-600">
            Regístrate para acceder a todas las funcionalidades
          </CardDescription>
        </CardHeader>
        <CardContent className="relative z-10">
          <form onSubmit={handleSubmit} className="space-y-4">
            {(error || formError) && (
              <Alert variant="destructive" className="border border-red-200 text-red-800 bg-red-50">
                <AlertCircle className="h-4 w-4 text-red-600" />
                <AlertDescription>
                  {formError || error}
                </AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <Label htmlFor="username" className="text-nekodark-800 font-medium">Nombre de usuario</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Ingresa tu nombre de usuario"
                autoComplete="username"
                className="border-nekotina-200 focus:border-nekotina-500 focus:ring-nekotina-300"
              />
            </div>

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
              <Label htmlFor="password" className="text-nekodark-800 font-medium">Contraseña</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                autoComplete="new-password"
                className="border-nekotina-200 focus:border-nekotina-500 focus:ring-nekotina-300"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-nekodark-800 font-medium">Confirmar contraseña</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                autoComplete="new-password"
                className="border-nekotina-200 focus:border-nekotina-500 focus:ring-nekotina-300"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="membership" className="text-nekodark-800 font-medium">Tipo de membresía</Label>
              <div className="grid grid-cols-3 gap-3 pt-1">
                <div
                  className={`cursor-pointer rounded-lg border p-3 text-center transition-all ${
                    membership === 'basic'
                      ? 'border-blue-400 bg-blue-50 ring-2 ring-blue-100'
                      : 'border-nekotina-100 hover:border-blue-200 hover:bg-blue-50/50'
                  }`}
                  onClick={() => setMembership('basic')}
                >
                  <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="16" />
                      <line x1="8" y1="12" x2="16" y2="12" />
                    </svg>
                  </div>
                  <div className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${getMembershipStyle('basic')}`}>
                    Básica
                  </div>
                </div>
                <div
                  className={`cursor-pointer rounded-lg border p-3 text-center transition-all ${
                    membership === 'premium'
                      ? 'border-nekotina2-400 bg-nekotina2-50 ring-2 ring-nekotina2-100'
                      : 'border-nekotina-100 hover:border-nekotina2-200 hover:bg-nekotina2-50/50'
                  }`}
                  onClick={() => setMembership('premium')}
                >
                  <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-nekotina2-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-nekotina2-800">
                      <path d="M20.2 6 A2 2 0 0 1 22 8 V16 A2 2 0 0 1 20 18 H8 L1 23 V2 L8 6 Z" />
                    </svg>
                  </div>
                  <div className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${getMembershipStyle('premium')}`}>
                    Premium
                  </div>
                </div>
                <div
                  className={`cursor-pointer rounded-lg border p-3 text-center transition-all ${
                    membership === 'vip'
                      ? 'border-purple-400 bg-purple-50 ring-2 ring-purple-100'
                      : 'border-nekotina-100 hover:border-purple-200 hover:bg-purple-50/50'
                  }`}
                  onClick={() => setMembership('vip')}
                >
                  <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-700">
                      <path d="M3 6 A2 2 0 0 1 5 4 H19 A2 2 0 0 1 21 6 V18 A2 2 0 0 1 19 20 H5 A2 2 0 0 1 3 18 Z" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <div className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${getMembershipStyle('vip')}`}>
                    VIP
                  </div>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full py-6 mt-6 bg-gradient-nekotina hover:opacity-90 transition-opacity text-white shadow-nekotina font-medium"
              disabled={loading}
            >
              {loading ? 'Registrando...' : 'Registrarse'}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center relative z-10 pt-4 pb-8">
          <p className="text-sm text-nekodark-600">
            ¿Ya tienes una cuenta?{' '}
            <Link href="/login" className="font-medium text-nekotina-700 hover:text-nekotina-800 underline-offset-2 hover:underline">
              Iniciar sesión
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegisterForm;
