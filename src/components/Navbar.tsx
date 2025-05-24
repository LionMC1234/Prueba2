'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu, X, ChevronDown, UserCircle, Shield, Crown } from 'lucide-react';

// Función para obtener iniciales del nombre de usuario
const getInitials = (name: string) => {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);
};

// Componente de la barra de navegación
const Navbar = () => {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Manejar el efecto de scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determinar si el link está activo
  const isActive = (path: string) => pathname === path;

  // Cerrar el menú móvil
  const closeSheet = () => setIsSheetOpen(false);

  // Manejar el dropdown del perfil
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const closeDropdown = () => setIsDropdownOpen(false);

  // Enlaces de navegación
  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/features', label: 'Funcionalidades' },
    { href: '/pricing', label: 'Membresías' },
    { href: '/about', label: 'Nosotros' },
  ];

  // Icono de membresía
  const getMembershipIcon = (membership: string) => {
    switch (membership) {
      case 'premium':
        return <Shield className="h-4 w-4 text-amber-500 mr-1" />;
      case 'vip':
        return <Crown className="h-4 w-4 text-purple-500 mr-1" />;
      default:
        return <UserCircle className="h-4 w-4 text-nekotina-700 mr-1" />;
    }
  };

  // Renderizar links de navegación
  const renderNavLinks = (
    <ul className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
      {navLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={`font-medium transition-colors relative group ${
              isActive(link.href)
                ? 'text-nekotina-700 font-semibold'
                : 'text-nekodark-800 hover:text-nekotina-600'
            }`}
            onClick={closeSheet}
          >
            {link.label}
            <span
              className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-nekotina-500 transition-all duration-300 group-hover:w-full ${
                isActive(link.href) ? 'w-full' : ''
              }`}
            />
          </Link>
        </li>
      ))}
    </ul>
  );

  // Renderizar botones de autenticación
  const renderAuthButtons = user ? (
    <div className="relative">
      <div
        className="flex items-center space-x-1 cursor-pointer hover-scale"
        onClick={toggleDropdown}
      >
        <Avatar className="h-8 w-8 border-2 border-nekotina-200 shadow-nekotina">
          <AvatarImage
            src={`https://api.dicebear.com/7.x/micah/svg?seed=${user.username}&backgroundColor=ffdffc`}
            alt={user.username}
          />
          <AvatarFallback className="bg-nekotina-100 text-nekotina-700">
            {getInitials(user.username)}
          </AvatarFallback>
        </Avatar>
        <div className="hidden md:flex items-center">
          <span className="text-sm font-medium ml-2 text-nekodark-900">{user.username}</span>
          <ChevronDown className={`h-4 w-4 ml-1 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </div>
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-nekotina-strong bg-white z-50 py-2 border border-nekotina-100">
          <div className="px-4 py-2 border-b border-nekotina-100">
            <p className="text-sm font-medium text-nekodark-900">{user.username}</p>
            <div className="flex items-center text-xs text-nekodark-700">
              {getMembershipIcon(user.membership)}
              <span className="capitalize">{user.membership}</span>
            </div>
          </div>
          <Link
            href="/dashboard"
            className="block px-4 py-2 text-sm text-nekodark-800 hover:bg-nekotina-100 hover:text-nekotina-700"
            onClick={closeDropdown}
          >
            Panel de control
          </Link>
          <Link
            href="/profile"
            className="block px-4 py-2 text-sm text-nekodark-800 hover:bg-nekotina-100 hover:text-nekotina-700"
            onClick={closeDropdown}
          >
            Mi perfil
          </Link>
          <button
            onClick={() => {
              closeDropdown();
              logout();
            }}
            className="w-full text-left px-4 py-2 text-sm text-nekodark-800 hover:bg-nekotina-100 hover:text-nekotina-700"
          >
            Cerrar sesión
          </button>
        </div>
      )}
    </div>
  ) : (
    <div className="flex items-center space-x-3">
      <Link href="/login" onClick={closeSheet}>
        <Button variant="ghost" className="font-medium text-nekodark-800 hover:text-nekotina-700 hover:bg-nekotina-100">
          Iniciar sesión
        </Button>
      </Link>
      <Link href="/register" onClick={closeSheet}>
        <Button className="bg-gradient-nekotina hover:opacity-90 transition-opacity text-white shadow-nekotina font-medium">
          Crear cuenta
        </Button>
      </Link>
    </div>
  );

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-2'
          : 'bg-white py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-2xl relative group">
          <span className="bg-clip-text text-transparent bg-gradient-nekotina-light">Mi</span>
          <span className="text-nekodark-900">Portal</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-nekotina-500 transition-all duration-300 group-hover:w-full" />
        </Link>

        {/* Navegación de escritorio */}
        <nav className="hidden md:block">{renderNavLinks}</nav>

        {/* Botones de autenticación en escritorio */}
        <div className="hidden md:block">{renderAuthButtons}</div>

        {/* Menú móvil */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <Menu className="h-6 w-6 text-nekodark-800" />
              <span className="sr-only">Menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="border-l-nekotina-200">
            <SheetHeader className="mb-8">
              <SheetTitle className="font-bold text-2xl">
                <Link href="/" onClick={closeSheet} className="font-bold text-2xl relative inline-block">
                  <span className="bg-clip-text text-transparent bg-gradient-nekotina-light">Mi</span>
                  <span className="text-nekodark-900">Portal</span>
                </Link>
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col h-full py-6 space-y-8">
              <nav className="flex-1">{renderNavLinks}</nav>
              <div className="mt-auto">{renderAuthButtons}</div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
