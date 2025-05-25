"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Bot,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
  MessageCircle,
} from "lucide-react";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(1, "La contraseña es requerida"),
});

type LoginForm = z.infer<typeof loginSchema>;

const features = [
  {
    icon: Sparkles,
    title: "IA Avanzada",
    description: "Conversaciones naturales y inteligentes",
  },
  {
    icon: Shield,
    title: "Totalmente Seguro",
    description: "Encriptación de extremo a extremo",
  },
  {
    icon: Zap,
    title: "Ultra Rápido",
    description: "Respuestas en tiempo real",
  },
  {
    icon: MessageCircle,
    title: "Multicanal",
    description: "Integración con todas tus plataformas",
  },
];

export default function LoginPage() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    setIsSubmitting(true);

    try {
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (result?.error) {
        toast.error("Credenciales inválidas. Por favor, verifica tu email y contraseña.");
      } else if (result?.ok) {
        toast.success("¡Bienvenido de vuelta! Redirigiendo al dashboard...");

        // Redirect to dashboard
        setTimeout(() => {
          router.push("/dashboard");
        }, 1000);
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Error al iniciar sesión. Por favor, inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="container-custom py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="gradient-primary p-3 rounded-2xl mr-3">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Bienvenido a <span className="gradient-text">Aira</span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Inicia sesión para continuar con tu experiencia de IA conversacional
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Login Form */}
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="glass-card p-8 border-0 shadow-2xl w-full max-w-md mx-auto">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-2">Iniciar Sesión</h2>
                  <p className="text-muted-foreground">
                    Accede a tu cuenta para continuar donde lo dejaste
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      Correo electrónico
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@empresa.com"
                      {...register("email")}
                      className="rounded-lg"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Password */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password" className="flex items-center">
                        <Lock className="w-4 h-4 mr-2" />
                        Contraseña
                      </Label>
                      <Link
                        href="/forgot-password"
                        className="text-sm text-primary hover:underline"
                      >
                        ¿Olvidaste tu contraseña?
                      </Link>
                    </div>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Tu contraseña"
                        {...register("password")}
                        className="rounded-lg pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-sm text-red-500">{errors.password.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gradient-primary text-white rounded-full py-6 button-modern hover-glow group"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Iniciando sesión...
                      </>
                    ) : (
                      <>
                        Iniciar Sesión
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>

                  {/* Divider */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-border" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">
                        O continúa con
                      </span>
                    </div>
                  </div>

                  {/* Social Login Buttons */}
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="rounded-full"
                      onClick={() => signIn("google")}
                    >
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      Google
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="rounded-full"
                      onClick={() => signIn("facebook")}
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Facebook
                    </Button>
                  </div>

                  {/* Register Link */}
                  <div className="text-center pt-4 border-t border-border">
                    <p className="text-muted-foreground">
                      ¿No tienes una cuenta?{" "}
                      <Link
                        href="/register"
                        className="text-primary hover:underline font-medium"
                      >
                        Crear cuenta gratis
                      </Link>
                    </p>
                  </div>
                </form>
              </Card>
            </motion.div>

            {/* Features Showcase */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Features */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-6">
                  ¿Por qué elegir <span className="gradient-text">Aira</span>?
                </h3>
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="glass-card p-4 rounded-xl border-0 shadow-modern hover-lift group cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary/10 to-primary/20 rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                        <feature.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 group-hover:gradient-text transition-all duration-300">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                className="glass-card p-6 rounded-2xl border-0 shadow-modern-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <Badge variant="secondary" className="mb-3">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Oferta especial
                </Badge>
                <h4 className="font-bold mb-2">
                  Prueba Premium gratis por 14 días
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Sin tarjeta de crédito requerida. Cancela en cualquier momento.
                </p>
                <Button variant="outline" size="sm" className="rounded-full">
                  Saber más
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}