"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  Users,
  Headphones,
  BookOpen,
} from "lucide-react";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  company: z.string().optional(),
  subject: z.string().min(5, "El asunto debe tener al menos 5 caracteres"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type ContactForm = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    description: "Contáctanos por email",
    details: "hola@aira.com",
    action: "mailto:hola@aira.com",
  },
  {
    icon: Phone,
    title: "Teléfono",
    description: "Llámanos directamente",
    details: "+1 (555) 123-4567",
    action: "tel:+15551234567",
  },
  {
    icon: MapPin,
    title: "Oficina",
    description: "Visítanos en persona",
    details: "123 Tech Street, Silicon Valley, CA",
    action: "#",
  },
  {
    icon: Clock,
    title: "Horarios",
    description: "Estamos disponibles",
    details: "Lun-Vie: 9AM-6PM PST",
    action: "#",
  },
];

const supportOptions = [
  {
    icon: MessageCircle,
    title: "Chat en Vivo",
    description: "Respuesta inmediata a tus preguntas",
    availability: "24/7 disponible",
    action: "Iniciar Chat",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Headphones,
    title: "Soporte Técnico",
    description: "Ayuda especializada para integraciones",
    availability: "Lun-Vie 9AM-6PM",
    action: "Contactar Soporte",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: Users,
    title: "Ventas",
    description: "Consultas sobre planes empresariales",
    availability: "Lun-Vie 8AM-8PM",
    action: "Hablar con Ventas",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: BookOpen,
    title: "Documentación",
    description: "Guías completas y tutoriales",
    availability: "Siempre disponible",
    action: "Ver Docs",
    color: "from-amber-500 to-orange-500",
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.success("¡Mensaje enviado exitosamente! Te responderemos pronto.");
    reset();
    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background to-accent/5">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="mb-4 px-4 py-1 rounded-full">
              <MessageCircle className="w-4 h-4 mr-2" />
              Contáctanos
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Estamos aquí{" "}
              <span className="gradient-text">para ayudarte</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              ¿Tienes preguntas sobre Aira? Nuestro equipo está listo para ayudarte a encontrar
              la solución perfecta para tu negocio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Múltiples formas de{" "}
              <span className="gradient-text">conectar</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Elige la opción que mejor se adapte a tus necesidades
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {supportOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6 glass-card hover-lift group cursor-pointer border-0 shadow-modern-lg text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${option.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <option.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:gradient-text transition-all duration-300">
                    {option.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                    {option.description}
                  </p>
                  <Badge variant="secondary" className="mb-4 text-xs">
                    {option.availability}
                  </Badge>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full rounded-full"
                  >
                    {option.action}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding bg-gradient-to-b from-accent/5 to-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card p-8 border-0 shadow-2xl">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">Envíanos un mensaje</h3>
                  <p className="text-muted-foreground">
                    Completa el formulario y te responderemos en menos de 24 horas
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre *</Label>
                      <Input
                        id="name"
                        placeholder="Tu nombre completo"
                        {...register("name")}
                        className="rounded-lg"
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500">{errors.name.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
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
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa (opcional)</Label>
                    <Input
                      id="company"
                      placeholder="Nombre de tu empresa"
                      {...register("company")}
                      className="rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Asunto *</Label>
                    <Input
                      id="subject"
                      placeholder="¿En qué podemos ayudarte?"
                      {...register("subject")}
                      className="rounded-lg"
                    />
                    {errors.subject && (
                      <p className="text-sm text-red-500">{errors.subject.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      placeholder="Cuéntanos más detalles sobre tu consulta..."
                      rows={5}
                      {...register("message")}
                      className="rounded-lg resize-none"
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gradient-primary text-white rounded-full py-6 button-modern hover-glow group"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensaje
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">Información de contacto</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.title}
                      href={info.action}
                      className="flex items-start space-x-4 p-4 rounded-xl hover:bg-accent/50 transition-colors duration-200 group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-primary/10 to-primary/20 rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                        <info.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div>
                        <h4 className="font-semibold group-hover:gradient-text transition-all duration-300">
                          {info.title}
                        </h4>
                        <p className="text-muted-foreground text-sm mb-1">
                          {info.description}
                        </p>
                        <p className="font-medium">{info.details}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <motion.div
                className="glass-card p-6 rounded-2xl border-0 shadow-modern-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold mb-4">¿Por qué elegir Aira?</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm">Respuesta en menos de 2 horas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm">Más de 10,000 clientes satisfechos</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm">Soporte técnico especializado</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm">Implementación en 24 horas</span>
                  </div>
                </div>
              </motion.div>

              {/* Map Placeholder */}
              <motion.div
                className="glass-card p-6 rounded-2xl border-0 shadow-modern-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl h-48 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Oficinas en Silicon Valley
                    </p>
                    <p className="text-xs text-muted-foreground">
                      123 Tech Street, CA 94025
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
