import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section con decoración animada */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/3 w-[600px] h-[600px] rounded-full bg-nekotina-100 opacity-70 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/3 w-[600px] h-[600px] rounded-full bg-nekotina-200 opacity-70 blur-3xl"></div>

        <div className="container relative mx-auto px-6 z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-block px-3 py-1 bg-nekotina-100 text-nekotina-700 rounded-full mb-8 text-sm font-medium">
              Diseño moderno e interactivo
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 max-w-4xl">
              <span className="bg-clip-text text-transparent bg-gradient-nekotina-light">Portal</span> web
              <span className="relative">
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-nekotina-amber"> moderno</span>
                <svg
                  className="absolute bottom-1 -z-10 w-full h-3 text-nekotina-200"
                  viewBox="0 0 100 15"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,5 Q25,0 50,5 T100,5 V15 H0 Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <br />y minimalista
            </h1>
            <p className="text-xl text-nekodark-600 max-w-2xl mb-10">
              Experimenta una interfaz dinámica con nuestra plataforma.
              Regístrate hoy y accede a todas las funcionalidades disponibles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Link href="/register">
                <Button className="text-lg px-8 py-6 bg-gradient-nekotina hover:opacity-90 transition-opacity text-white shadow-nekotina font-medium">
                  Comenzar ahora
                </Button>
              </Link>
              <Link href="/features">
                <Button variant="outline" className="text-lg px-8 py-6 border-nekotina-300 text-nekodark-800 hover:bg-nekotina-50">
                  Conoce más
                </Button>
              </Link>
            </div>
          </div>

          {/* Imagen/Preview Destacada */}
          <div className="relative mx-auto max-w-4xl w-full">
            <div className="absolute inset-0 -m-6 bg-nekotina-100 rounded-xl blur-xl opacity-50 animate-blob"></div>
            <div className="relative overflow-hidden rounded-xl border border-nekotina-200 shadow-nekotina-strong glow-border">
              <div className="w-full aspect-[16/9] bg-white p-6 rounded-xl">
                <div className="flex flex-col h-full bg-gradient-to-br from-nekotina-50 to-white rounded-lg overflow-hidden border border-nekotina-100">
                  <div className="h-8 bg-nekotina-100 flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-nekotina-300"></div>
                      <div className="w-3 h-3 rounded-full bg-nekotina2-800"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                  <div className="flex-1 p-6 flex items-center justify-center">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="w-32 h-32 rounded-full bg-gradient-nekotina flex items-center justify-center relative">
                        <div className="absolute inset-1 rounded-full bg-white flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full bg-nekotina-300 flex items-center justify-center text-white font-bold text-lg">
                            MP
                          </div>
                        </div>
                      </div>
                      <div className="md:text-left text-center">
                        <h3 className="text-2xl font-bold text-nekodark-900 mb-2">
                          <span className="bg-clip-text text-transparent bg-gradient-nekotina-light">Mi</span>Portal
                        </h3>
                        <p className="text-nekodark-600 max-w-xs">
                          Con un diseño moderno y atractivo, facilitamos la experiencia de usuario
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-nekotina-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="inline-block text-4xl font-bold mb-4 relative">
              Características <span className="bg-clip-text text-transparent bg-gradient-nekotina">principales</span>
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
            <p className="text-xl text-nekodark-600 max-w-2xl mx-auto">
              Nuestra plataforma ofrece múltiples funcionalidades para mejorar tu experiencia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group hover-scale">
              <div className="bg-white rounded-2xl border border-nekotina-100 shadow-nekotina overflow-hidden transition-all duration-300 h-full group-hover:shadow-nekotina-strong">
                <div className="p-8">
                  <div className="w-14 h-14 bg-nekotina-100 rounded-xl flex items-center justify-center mb-6 text-nekotina-700 transition-all duration-300 group-hover:bg-nekotina-700 group-hover:text-white group-hover:rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 19v-8.5a7 7 0 0 1 14 0V19" />
                      <path d="M16 9h3a2 2 0 0 1 2 2v8h-5" />
                      <path d="M10 19v-9" />
                      <path d="m2 19 8 2 8-2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-nekodark-900">Diseño Interactivo</h3>
                  <p className="text-nekodark-600">
                    Interfaz moderna y minimalista con elementos interactivos que mejoran la experiencia del usuario.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group hover-scale">
              <div className="bg-white rounded-2xl border border-nekotina-100 shadow-nekotina overflow-hidden transition-all duration-300 h-full group-hover:shadow-nekotina-strong">
                <div className="p-8">
                  <div className="w-14 h-14 bg-nekotina-100 rounded-xl flex items-center justify-center mb-6 text-nekotina-700 transition-all duration-300 group-hover:bg-nekotina-700 group-hover:text-white group-hover:rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-nekodark-900">Sistema de Autenticación</h3>
                  <p className="text-nekodark-600">
                    Registro e inicio de sesión seguro con diferentes niveles de membresía para los usuarios.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group hover-scale">
              <div className="bg-white rounded-2xl border border-nekotina-100 shadow-nekotina overflow-hidden transition-all duration-300 h-full group-hover:shadow-nekotina-strong">
                <div className="p-8">
                  <div className="w-14 h-14 bg-nekotina-100 rounded-xl flex items-center justify-center mb-6 text-nekotina-700 transition-all duration-300 group-hover:bg-nekotina-700 group-hover:text-white group-hover:rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-nekodark-900">Membresías personalizadas</h3>
                  <p className="text-nekodark-600">
                    Tres niveles de membresía con diferentes beneficios y características disponibles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Tiers Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="inline-block text-4xl font-bold mb-4 relative">
              Planes de <span className="bg-clip-text text-transparent bg-gradient-nekotina">Membresía</span>
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
            <p className="text-xl text-nekodark-600 max-w-2xl mx-auto">
              Elige el plan que mejor se adapte a tus necesidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="relative group hover-scale">
              <div className="bg-white rounded-2xl border border-nekotina-100 shadow-nekotina overflow-hidden transition-all duration-300 h-full group-hover:shadow-nekotina-strong">
                <div className="p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-nekodark-900">Básico</h3>
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="16" />
                        <line x1="8" y1="12" x2="16" y2="12" />
                      </svg>
                    </div>
                  </div>
                  <div className="mb-6">
                    <p className="text-nekodark-600 mb-6">Ideal para usuarios individuales que buscan explorar.</p>
                    <div className="flex items-end mb-2">
                      <span className="text-4xl font-bold text-nekodark-900">Gratis</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center text-nekodark-600">
                      <svg className="w-5 h-5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      Acceso a funciones básicas
                    </li>
                    <li className="flex items-center text-nekodark-600">
                      <svg className="w-5 h-5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      1 perfil de usuario
                    </li>
                    <li className="flex items-center text-nekodark-500 opacity-50">
                      <svg className="w-5 h-5 mr-2 text-nekodark-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                      Sin funciones avanzadas
                    </li>
                  </ul>
                  <Link href="/register" className="block">
                    <Button className="w-full bg-white border border-nekotina-300 text-nekodark-800 hover:bg-nekotina-50">
                      Registrarse
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="relative group hover-scale">
              <div className="absolute -inset-[1px] bg-gradient-to-r from-nekotina-500 to-nekotina2-800 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl border border-nekotina-200 shadow-nekotina-strong overflow-hidden transition-all duration-300 h-full">
                <div className="absolute top-0 left-0 right-0 bg-gradient-nekotina-light text-white text-center py-1 text-sm font-medium">
                  Recomendado
                </div>
                <div className="p-8 pt-12">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-nekodark-900">Premium</h3>
                    <div className="w-10 h-10 rounded-full bg-nekotina2-800 bg-opacity-20 flex items-center justify-center text-nekotina2-800">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.2 6 A2 2 0 0 1 22 8 V16 A2 2 0 0 1 20 18 H8 L1 23 V2 L8 6 Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="mb-6">
                    <p className="text-nekodark-600 mb-6">Para usuarios que necesitan características adicionales.</p>
                    <div className="flex items-end mb-2">
                      <span className="text-4xl font-bold text-nekodark-900">$9.99</span>
                      <span className="text-nekodark-600 ml-1">/mes</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center text-nekodark-600">
                      <svg className="w-5 h-5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      Acceso a todas las funciones
                    </li>
                    <li className="flex items-center text-nekodark-600">
                      <svg className="w-5 h-5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      5 perfiles de usuario
                    </li>
                    <li className="flex items-center text-nekodark-600">
                      <svg className="w-5 h-5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      Soporte por email
                    </li>
                  </ul>
                  <Link href="/register" className="block">
                    <Button className="w-full bg-gradient-nekotina hover:opacity-90 transition-opacity text-white shadow-nekotina font-medium">
                      Obtener Premium
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* VIP Plan */}
            <div className="relative group hover-scale">
              <div className="bg-white rounded-2xl border border-nekotina-100 shadow-nekotina overflow-hidden transition-all duration-300 h-full group-hover:shadow-nekotina-strong">
                <div className="p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-nekodark-900">VIP</h3>
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 6 A2 2 0 0 1 5 4 H19 A2 2 0 0 1 21 6 V18 A2 2 0 0 1 19 20 H5 A2 2 0 0 1 3 18 Z" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    </div>
                  </div>
                  <div className="mb-6">
                    <p className="text-nekodark-600 mb-6">Acceso a todas las funciones premium y exclusivas.</p>
                    <div className="flex items-end mb-2">
                      <span className="text-4xl font-bold text-nekodark-900">$19.99</span>
                      <span className="text-nekodark-600 ml-1">/mes</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center text-nekodark-600">
                      <svg className="w-5 h-5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      Acceso ilimitado
                    </li>
                    <li className="flex items-center text-nekodark-600">
                      <svg className="w-5 h-5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      Perfiles ilimitados
                    </li>
                    <li className="flex items-center text-nekodark-600">
                      <svg className="w-5 h-5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      Soporte prioritario 24/7
                    </li>
                  </ul>
                  <Link href="/register" className="block">
                    <Button className="w-full bg-white border border-nekotina-300 text-nekodark-800 hover:bg-nekotina-50">
                      Obtener VIP
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-nekotina-50">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-3xl p-10 md:p-16 shadow-nekotina-strong relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-nekotina-100/50 to-transparent"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-nekotina-100 rounded-full opacity-50 blur-3xl"></div>

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="md:max-w-lg">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-nekodark-900">
                  ¿Listo para comenzar<br />tu <span className="bg-clip-text text-transparent bg-gradient-nekotina">aventura</span>?
                </h2>
                <p className="text-lg text-nekodark-600 mb-8">
                  Regístrate ahora y accede a todas las funcionalidades de nuestra plataforma web moderna. Experimenta la diferencia de un diseño pensado para ti.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/register">
                    <Button className="px-6 py-6 bg-gradient-nekotina hover:opacity-90 transition-opacity text-white shadow-nekotina font-medium">
                      Crear cuenta
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button variant="outline" className="px-6 py-6 border-nekotina-300 text-nekodark-800 hover:bg-nekotina-50">
                      Iniciar sesión
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="w-full md:w-auto flex-shrink-0">
                <div className="relative w-56 h-56 mx-auto">
                  <div className="absolute inset-0 bg-gradient-nekotina rounded-full opacity-20 animate-blob blur-xl"></div>
                  <div className="absolute inset-4 bg-white rounded-full shadow-nekotina flex items-center justify-center">
                    <div className="w-28 h-28 bg-gradient-nekotina-light rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-white border-t border-nekotina-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="font-bold text-2xl inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-nekotina-light">Mi</span>
                <span className="text-nekodark-900">Portal</span>
              </Link>
              <p className="text-sm text-nekodark-600 mt-2">
                Diseño moderno para mejorar tu experiencia
              </p>
            </div>
            <div className="text-sm text-nekodark-600">
              &copy; {new Date().getFullYear()} MiPortal. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
