'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Crown, User, Bell, Calendar, Settings, Activity, ChevronRight } from 'lucide-react';

const getMembershipBadgeStyle = (membership: string) => {
  switch (membership) {
    case 'premium':
      return 'bg-nekotina2-800 text-white';
    case 'vip':
      return 'bg-purple-600 text-white';
    default:
      return 'bg-blue-100 text-blue-800';
  }
};

const getMembershipIcon = (membership: string) => {
  switch (membership) {
    case 'premium':
      return <Shield className="h-5 w-5 text-nekotina2-800" />;
    case 'vip':
      return <Crown className="h-5 w-5 text-purple-600" />;
    default:
      return <User className="h-5 w-5 text-blue-600" />;
  }
};

const getMembershipLabel = (membership: string) => {
  switch (membership) {
    case 'premium':
      return 'Premium';
    case 'vip':
      return 'VIP';
    default:
      return 'Básica';
  }
};

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Redirigir si no hay usuario autenticado
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading || !user) {
    // Mostrar pantalla de carga mientras verificamos la autenticación
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="relative w-20 h-20 mx-auto mb-6">
            <div className="absolute inset-0 bg-nekotina-200 rounded-full opacity-70 animate-pulse"></div>
            <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-gradient-nekotina-light animate-pulse"></div>
            </div>
          </div>
          <p className="text-nekodark-600 animate-pulse">Cargando...</p>
        </div>
      </div>
    );
  }

  const membershipBadgeStyle = getMembershipBadgeStyle(user.membership);
  const membershipIcon = getMembershipIcon(user.membership);
  const membershipLabel = getMembershipLabel(user.membership);

  return (
    <main className="min-h-screen flex flex-col bg-nekotina-50/30">
      <Navbar />

      <div className="container mx-auto px-4 pt-28 pb-20">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-nekotina mb-3">Panel de Control</h1>
          <p className="text-nekodark-600">Bienvenido a tu cuenta, {user.username}. Gestiona tu perfil y membresía.</p>
        </div>

        {/* Hero Card */}
        <div className="mb-12">
          <div className="relative overflow-hidden rounded-2xl shadow-nekotina">
            <div className="absolute inset-0 bg-gradient-to-r from-nekotina-700 to-nekotina2-800"></div>
            <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDEwKSI+PHJlY3QgaWQ9InBhdHRlcm4tYmFja2dyb3VuZCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idHJhbnNwYXJlbnQiLz48Y2lyY2xlIGZpbGw9IiNmZmYiIGN4PSIyMCIgY3k9IjIwIiByPSIxIiAvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgaGVpZ2h0PSIxMDAlIiB3aWR0aD0iMTAwJSIgLz48L3N2Zz4=')]"></div>
            <div className="relative px-6 py-12 md:px-12 text-white">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${membershipBadgeStyle}`}>
                    {membershipIcon}
                    <span className="ml-1.5">Membresía {membershipLabel}</span>
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-2">Hola, {user.username} 👋</h2>
                  <p className="text-white/80 max-w-xl mb-4">
                    Accede a todas las funcionalidades de tu membresía {membershipLabel.toLowerCase()} y personaliza tu experiencia.
                  </p>
                  {user.membership !== 'vip' && (
                    <button className="bg-white text-nekotina-700 hover:text-nekotina-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/90 transition-colors flex items-center">
                      Mejorar membresía
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </button>
                  )}
                </div>
                <div className="flex-shrink-0">
                  <div className="w-28 h-28 relative">
                    <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                    <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                      <div
                        className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-xl
                          ${user.membership === 'premium' ? 'bg-nekotina2-800' :
                            user.membership === 'vip' ? 'bg-purple-600' : 'bg-blue-600'}`}
                      >
                        {user.username.substring(0, 2).toUpperCase()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Estadísticas */}
          <Card className="border border-nekotina-100 shadow-nekotina hover:shadow-nekotina-strong transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl font-bold text-nekodark-900 flex items-center">
                <Activity className="w-5 h-5 mr-2 text-nekotina-500" />
                Estadísticas
              </CardTitle>
              <CardDescription className="text-nekodark-600">
                Resumen de actividad
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-nekodark-700">Último inicio de sesión</div>
                  <div className="text-sm text-nekodark-600">{new Date().toLocaleDateString()}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-nekodark-700">IP registrada</div>
                  <div className="text-sm text-nekodark-600">{user.ipAddress || '127.0.0.1'}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-nekodark-700">Cuenta creada</div>
                  <div className="text-sm text-nekodark-600">{new Date().toLocaleDateString()}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notificaciones */}
          <Card className="border border-nekotina-100 shadow-nekotina hover:shadow-nekotina-strong transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl font-bold text-nekodark-900 flex items-center">
                <Bell className="w-5 h-5 mr-2 text-nekotina-500" />
                Notificaciones
              </CardTitle>
              <CardDescription className="text-nekodark-600">
                Actividad reciente
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-2 border-nekotina-400 pl-3 py-1">
                  <div className="text-sm font-medium text-nekodark-800">Inicio de sesión exitoso</div>
                  <div className="text-xs text-nekodark-600">Hace unos momentos</div>
                </div>
                <div className="border-l-2 border-nekodark-200 pl-3 py-1">
                  <div className="text-sm font-medium text-nekodark-700">Actualización de perfil</div>
                  <div className="text-xs text-nekodark-600">Pendiente</div>
                </div>
                <div className="border-l-2 border-nekodark-200 pl-3 py-1">
                  <div className="text-sm font-medium text-nekodark-700">Cambio de membresía</div>
                  <div className="text-xs text-nekodark-600">Pendiente</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Configuración Rápida */}
          <Card className="border border-nekotina-100 shadow-nekotina hover:shadow-nekotina-strong transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl font-bold text-nekodark-900 flex items-center">
                <Settings className="w-5 h-5 mr-2 text-nekotina-500" />
                Configuración
              </CardTitle>
              <CardDescription className="text-nekodark-600">
                Opciones de cuenta
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-2.5 rounded-lg text-sm font-medium text-nekodark-800 hover:bg-nekotina-50 transition-colors">
                  <span className="flex items-center">
                    <User className="w-4 h-4 mr-2 text-nekotina-600" />
                    Editar perfil
                  </span>
                  <ChevronRight className="w-4 h-4 text-nekodark-400" />
                </button>
                <button className="w-full flex items-center justify-between p-2.5 rounded-lg text-sm font-medium text-nekodark-800 hover:bg-nekotina-50 transition-colors">
                  <span className="flex items-center">
                    <Shield className="w-4 h-4 mr-2 text-nekotina-600" />
                    Cambiar membresía
                  </span>
                  <ChevronRight className="w-4 h-4 text-nekodark-400" />
                </button>
                <button className="w-full flex items-center justify-between p-2.5 rounded-lg text-sm font-medium text-nekodark-800 hover:bg-nekotina-50 transition-colors">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-nekotina-600" />
                    Próximos eventos
                  </span>
                  <ChevronRight className="w-4 h-4 text-nekodark-400" />
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sección de características según membresía */}
        <div className="mb-10">
          <h2 className="inline-block text-2xl font-bold mb-6 relative">
            Características de tu <span className="bg-clip-text text-transparent bg-gradient-nekotina">Membresía</span>
            <svg
              className="absolute -bottom-2 -z-10 w-full h-3 text-nekotina-200"
              viewBox="0 0 100 15"
              preserveAspectRatio="none"
            >
              <path
                d="M0,5 Q50,15 100,5"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              />
            </svg>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Plan Básico */}
            <div className={`relative overflow-hidden rounded-2xl border transition-all duration-300
              ${user.membership === 'basic'
                ? 'border-blue-300 bg-white shadow-xl'
                : 'border-nekotina-100 bg-white/70 opacity-70'}`}
            >
              {user.membership === 'basic' && (
                <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-center py-1 text-xs font-medium">
                  Tu plan actual
                </div>
              )}
              <div className={`p-6 ${user.membership === 'basic' ? 'pt-8' : ''}`}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-nekodark-900">Plan Básico</h3>
                    <p className="text-nekodark-600 text-sm">Gratuito</p>
                  </div>
                </div>

                <ul className="space-y-3 mt-6">
                  <li className="flex items-center text-nekodark-700">
                    <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>Acceso básico al dashboard</span>
                  </li>
                  <li className="flex items-center text-nekodark-700">
                    <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>1 perfil de usuario</span>
                  </li>
                  <li className="flex items-center text-nekodark-500">
                    <svg className="w-5 h-5 mr-2 text-nekodark-400 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                    <span className="text-nekodark-500">Funciones avanzadas</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Plan Premium */}
            <div className={`relative overflow-hidden rounded-2xl border transition-all duration-300
              ${user.membership === 'premium'
                ? 'border-nekotina2-400 bg-white shadow-xl'
                : 'border-nekotina-100 bg-white/70 opacity-70'}`}
            >
              {user.membership === 'premium' && (
                <div className="absolute top-0 left-0 right-0 bg-nekotina2-800 text-white text-center py-1 text-xs font-medium">
                  Tu plan actual
                </div>
              )}
              <div className={`p-6 ${user.membership === 'premium' ? 'pt-8' : ''}`}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-nekotina2-100 flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-nekotina2-800" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-nekodark-900">Plan Premium</h3>
                    <p className="text-nekodark-600 text-sm">$9.99/mes</p>
                  </div>
                </div>

                <ul className="space-y-3 mt-6">
                  <li className="flex items-center text-nekodark-700">
                    <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>Acceso total al dashboard</span>
                  </li>
                  <li className="flex items-center text-nekodark-700">
                    <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>5 perfiles de usuario</span>
                  </li>
                  <li className="flex items-center text-nekodark-700">
                    <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>Funciones avanzadas</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Plan VIP */}
            <div className={`relative overflow-hidden rounded-2xl border transition-all duration-300
              ${user.membership === 'vip'
                ? 'border-purple-400 bg-white shadow-xl'
                : 'border-nekotina-100 bg-white/70 opacity-70'}`}
            >
              {user.membership === 'vip' && (
                <div className="absolute top-0 left-0 right-0 bg-purple-600 text-white text-center py-1 text-xs font-medium">
                  Tu plan actual
                </div>
              )}
              <div className={`p-6 ${user.membership === 'vip' ? 'pt-8' : ''}`}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <Crown className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-nekodark-900">Plan VIP</h3>
                    <p className="text-nekodark-600 text-sm">$19.99/mes</p>
                  </div>
                </div>

                <ul className="space-y-3 mt-6">
                  <li className="flex items-center text-nekodark-700">
                    <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>Acceso ilimitado</span>
                  </li>
                  <li className="flex items-center text-nekodark-700">
                    <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>Perfiles ilimitados</span>
                  </li>
                  <li className="flex items-center text-nekodark-700">
                    <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>Soporte prioritario 24/7</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
