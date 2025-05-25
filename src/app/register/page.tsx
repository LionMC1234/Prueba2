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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Bot,
  User,
  Mail,
  Lock,
  MapPin,
  Crown,
  Star,
  Zap,
  Eye,
  EyeOff,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { toast } from "sonner";

const registerSchema = z.object({
  username: z.string()
    .min(3, "El nombre de usuario debe tener al menos 3 caracteres")
    .max(20, "El nombre de usuario no puede exceder 20 caracteres")
    .regex(/^[a-zA-Z0-9_]+$/, "Solo se permiten letras, números y guiones bajos"),
  email: z.string().email("Email inválido"),
  password: z.string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Debe contener al menos una mayúscula, una minúscula y un número"),
  membership: z.enum(["basic", "pro", "premium"], {
    required_error: "Selecciona un tipo de membresía",
  }),
});

type RegisterForm = z.infer<typeof registerSchema>;

const memberships = [
  {
    id: "basic",
    name: "Básica",
    description: "Perfecto para comenzar",
    price: "Gratis",
    icon: User,
    color: "from-blue-500 to-cyan-500",
    features: [
      "1,000 mensajes/mes",
      "1 chatbot",
      "Soporte por email",
      "Integración básica"
    ],
  },
  {
    id: "pro",
    name: "Pro",
    description: "Para empresas en crecimiento",
    price: "$29/mes",
    icon: Star,
    color: "from-purple-500 to-pink-500",
    popular: true,
    features: [
      "25,000 mensajes/mes",
      "5 chatbots",
      "Soporte prioritario",
      "Todas las integraciones",
      "Analytics avanzados"
    ],
  },
  {
    id: "premium",
    name: "Premium",
    description: "Solución empresarial completa",
    price: "$99/mes",
    icon: Crown,
    color: "from-amber-500 to-orange-500",
    features: [
      "Mensajes ilimitados",
      "Chatbots ilimitados",
      "Soporte 24/7",
      "API completa",
      "White-label",
      "SLA garantizado"
    ],
  },
];

export default function RegisterPage() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [selectedMembership, setSelectedMembership] = React.useState<string>("");
  const [userIP, setUserIP] = React.useState<string>("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  // Obtener IP del usuario
  React.useEffect(() => {
    const getIP = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        setUserIP(data.ip);
      } catch (error) {
        // Fallback a una IP simulada si falla la API
        setUserIP("192.168.1.1");
      }
    };
    getIP();
  }, []);

  const onSubmit = async (data: RegisterForm) => {
    setIsSubmitting(true);

    // Simulate registration
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const registrationData = {
      ...data,
      ipAddress: userIP,
      registeredAt: new Date().toISOString(),
    };

    console.log("Datos de registro:", registrationData);
    toast.success("¡Cuenta creada exitosamente! Bienvenido a Aira.");
    setIsSubmitting(false);
  };

  const handleMembershipSelect = (membershipId: string) => {
    setSelectedMembership(membershipId);
    setValue("membership", membershipId as "basic" | "pro" | "premium");
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
                Únete a <span className="gradient-text">Aira</span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Crea tu cuenta y comienza a transformar tus conversaciones con IA avanzada
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Membership Selection */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="glass-card p-8 border-0 shadow-2xl h-full">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Crown className="w-6 h-6 mr-2 text-primary" />
                  Elige tu membresía
                </h2>

                <div className="space-y-4">
                  {memberships.map((membership) => (
                    <motion.div
                      key={membership.id}
                      className={`relative p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                        selectedMembership === membership.id
                          ? "border-primary bg-primary/5 shadow-glow"
                          : "border-border hover:border-primary/50 hover:bg-accent/50"
                      }`}
                      onClick={() => handleMembershipSelect(membership.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {membership.popular && (
                        <Badge className="absolute -top-2 -right-2 gradient-primary text-white">
                          Popular
                        </Badge>
                      )}

                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${membership.color} shadow-lg`}>
                          <membership.icon className="w-6 h-6 text-white" />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-bold">{membership.name}</h3>
                            <span className="text-lg font-bold text-primary">
                              {membership.price}
                            </span>
                          </div>
                          <p className="text-muted-foreground text-sm mb-3">
                            {membership.description}
                          </p>

                          <div className="space-y-1">
                            {membership.features.slice(0, 3).map((feature, index) => (
                              <div key={index} className="flex items-center text-sm">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                <span>{feature}</span>
                              </div>
                            ))}
                            {membership.features.length > 3 && (
                              <div className="text-xs text-muted-foreground ml-6">
                                +{membership.features.length - 3} características más
                              </div>
                            )}
                          </div>
                        </div>

                        {selectedMembership === membership.id && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-6 h-6 rounded-full bg-primary flex items-center justify-center"
                          >
                            <CheckCircle className="w-4 h-4 text-white" />
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {errors.membership && (
                  <p className="text-sm text-red-500 mt-2">{errors.membership.message}</p>
                )}
              </Card>
            </motion.div>

            {/* Registration Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="glass-card p-8 border-0 shadow-2xl">
                <h2 className="text-2xl font-bold mb-6">Crear cuenta</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Username */}
                  <div className="space-y-2">
                    <Label htmlFor="username" className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      Nombre de usuario
                    </Label>
                    <Input
                      id="username"
                      placeholder="mi_usuario_123"
                      {...register("username")}
                      className="rounded-lg"
                    />
                    {errors.username && (
                      <p className="text-sm text-red-500">{errors.username.message}</p>
                    )}
                  </div>

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
                    <Label htmlFor="password" className="flex items-center">
                      <Lock className="w-4 h-4 mr-2" />
                      Contraseña
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Mínimo 8 caracteres"
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

                  {/* IP Address Display */}
                  <div className="space-y-2">
                    <Label className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      Dirección IP
                    </Label>
                    <div className="p-3 rounded-lg bg-accent/50 border border-border">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-mono">{userIP || "Detectando..."}</span>
                        <Badge variant="secondary" className="text-xs">
                          Auto-detectada
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting || !selectedMembership}
                    className="w-full gradient-primary text-white rounded-full py-6 button-modern hover-glow group"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Creando cuenta...
                      </>
                    ) : (
                      <>
                        Crear mi cuenta
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>

                  {/* Login Link */}
                  <div className="text-center pt-4 border-t border-border">
                    <p className="text-muted-foreground">
                      ¿Ya tienes una cuenta?{" "}
                      <Link
                        href="/login"
                        className="text-primary hover:underline font-medium"
                      >
                        Iniciar sesión
                      </Link>
                    </p>
                  </div>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
