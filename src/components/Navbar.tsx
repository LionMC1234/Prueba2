"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown, Bot, MessageCircle, Settings, HelpCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeSwitch } from "@/components/theme-switch";

type NavLink = {
  href: string;
  label: string;
  icon?: React.ReactNode;
};

const navLinks: NavLink[] = [
  { href: "/", label: "Inicio", icon: <Bot className="h-4 w-4" /> },
  { href: "/caracteristicas", label: "Características", icon: <MessageCircle className="h-4 w-4" /> },
  { href: "/planes", label: "Planes", icon: <FileText className="h-4 w-4" /> },
  { href: "/documentacion", label: "Documentación", icon: <HelpCircle className="h-4 w-4" /> },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  // Efecto para detectar el scroll
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cierra el menú móvil
  const closeSheet = () => setIsSheetOpen(false);

  // Verifica si una ruta está activa
  const isActive = (path: string) => pathname === path;

  // Renderiza los enlaces de navegación
  const renderNavLinks = (
    <ul className="flex flex-col md:flex-row gap-8 md:gap-6">
      {navLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={`
              relative text-base font-medium transition-colors duration-200 flex items-center gap-2
              ${isActive(link.href)
                ? "text-neko-pink-700 dark:text-neko-pink-400 font-semibold"
                : "text-neko-dark-800 dark:text-neko-dark-200 hover:text-neko-pink-600 dark:hover:text-neko-pink-500"
              }
            `}
            onClick={closeSheet}
          >
            {link.icon && <span className="md:hidden">{link.icon}</span>}
            {link.label}
            {isActive(link.href) && (
              <motion.span
                layoutId="navIndicator"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neko-pink-600 dark:bg-neko-pink-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <header
      className={`
        fixed top-0 w-full z-50 transition-all duration-300
        ${isScrolled
          ? "py-3 bg-white/90 dark:bg-neko-dark-950/90 backdrop-blur-md shadow-md"
          : "py-5 bg-transparent"
        }
      `}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative group flex items-center">
          <div className="w-8 h-8 rounded-full bg-gradient-neko flex items-center justify-center mr-2 shadow-neko">
            <Bot className="h-4 w-4 text-white" />
          </div>
          <div>
            <span className="text-gradient-neko text-2xl font-bold">Aira</span>
            <span className="text-neko-dark-900 dark:text-white text-lg"> chatbot</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neko-pink-600 dark:bg-neko-pink-500 transition-all duration-300 group-hover:w-full" />
          </div>
        </Link>

        {/* Navegación de escritorio */}
        <nav className="hidden md:flex items-center gap-6">
          {renderNavLinks}
        </nav>

        {/* Controles de autenticación y tema */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeSwitch />
          <Link href="/login">
            <Button variant="ghost" className="font-medium text-neko-dark-800 dark:text-neko-dark-100 hover:text-neko-pink-700 dark:hover:text-neko-pink-400 hover:bg-neko-pink-50 dark:hover:bg-neko-pink-950/30">
              Iniciar sesión
            </Button>
          </Link>
          <Link href="/registro">
            <Button className="bg-gradient-neko hover:opacity-90 transition-opacity text-white shadow-neko font-medium">
              Probar gratis
            </Button>
          </Link>
        </div>

        {/* Menú móvil */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeSwitch />

          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
                <Menu className="h-5 w-5 text-neko-dark-800 dark:text-neko-dark-100" />
                <span className="sr-only">Menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="border-l-neko-pink-200 dark:border-l-neko-dark-800">
              <SheetHeader className="mb-8">
                <SheetTitle className="text-left font-bold text-2xl flex items-center">
                  <Link href="/" onClick={closeSheet} className="inline-block flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-neko flex items-center justify-center mr-2">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gradient-neko">Aira</span>
                    <span className="text-neko-dark-900 dark:text-white"> chatbot</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col h-full py-6 space-y-8">
                <nav className="flex-1">{renderNavLinks}</nav>
                <div className="flex flex-col gap-3">
                  <Link href="/login" onClick={closeSheet}>
                    <Button variant="ghost" className="w-full justify-start font-medium text-neko-dark-800 dark:text-neko-dark-100 hover:text-neko-pink-700 dark:hover:text-neko-pink-400 hover:bg-neko-pink-50 dark:hover:bg-neko-pink-950/30">
                      Iniciar sesión
                    </Button>
                  </Link>
                  <Link href="/registro" onClick={closeSheet}>
                    <Button className="w-full bg-gradient-neko hover:opacity-90 transition-opacity text-white shadow-neko font-medium">
                      Probar gratis
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
