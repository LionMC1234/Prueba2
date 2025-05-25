"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Sparkles,
  Zap,
  Shield,
  Globe,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

// Simulación de lazy loading para las features
function useLazyFeatures(features, delay = 400) {
  const [visibleCount, setVisibleCount] = React.useState(0);

  React.useEffect(() => {
    let mounted = true;
    if (visibleCount < features.length) {
      const timeout = setTimeout(() => {
        if (mounted) setVisibleCount((c) => c + 1);
      }, delay);
      return () => {
        mounted = false;
        clearTimeout(timeout);
      };
    }
  }, [visibleCount, features.length, delay]);

  return features.slice(0, visibleCount);
}

const features = [
  {
    icon: Brain,
    title: "Inteligencia Avanzada",
    description:
      "Procesamiento de lenguaje natural de última generación con comprensión contextual profunda.",
    color: "from-blue-500 to-cyan-500",
    delay: 0.1,
  },
  {
    icon: Sparkles,
    title: "Generación Creativa",
    description:
      "Crea contenido original, desde textos y código hasta ideas innovadoras para tu negocio.",
    color: "from-purple-500 to-pink-500",
    delay: 0.2,
  },
  {
    icon: Zap,
    title: "Respuestas Instantáneas",
    description:
      "Procesamiento ultrarrápido que entrega respuestas precisas en tiempo real.",
    color: "from-yellow-500 to-orange-500",
    delay: 0.3,
  },
  {
    icon: Shield,
    title: "Seguridad Empresarial",
    description:
      "Encriptación de extremo a extremo y cumplimiento total con regulaciones de privacidad.",
    color: "from-green-500 to-teal-500",
    delay: 0.4,
  },
  {
    icon: Globe,
    title: "Multiidioma",
    description:
      "Soporte nativo para más de 50 idiomas con traducción automática en tiempo real.",
    color: "from-indigo-500 to-purple-500",
    delay: 0.5,
  },
  {
    icon: MessageSquare,
    title: "Conversaciones Naturales",
    description:
      "Diálogos fluidos y contextuales que se sienten como hablar con un humano.",
    color: "from-pink-500 to-rose-500",
    delay: 0.6,
  },
];

export function FeaturesSection() {
  // Simula lazy loading de features
  const visibleFeatures = useLazyFeatures(features, 300);

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-background to-accent/10" />

      {/* Floating Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.05 }}>
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20 hover-lift">
              Características
            </Badge>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Tecnología{" "}
            <span className="gradient-text hover:scale-105 transition-transform duration-300 inline-block cursor-pointer">
              avanzada
            </span>{" "}
            para todos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Descubre las funcionalidades que hacen de Aira la plataforma de inteligencia artificial más completa y fácil de usar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {visibleFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
            >
              <Card className="h-full glass-card hover-lift border-0 hover:shadow-glow transition-all duration-300 group-hover:border-primary/30 card-hover">
                <CardContent className="p-8">
                  <motion.div
                    className="mb-6 relative"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      className={`p-4 rounded-2xl w-fit bg-gradient-to-r ${feature.color} shadow-lg button-bounce`}
                    >
                      <feature.icon className="w-8 h-8 text-white icon-hover" />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
                  </motion.div>
                  <motion.h3
                    className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300 cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    {feature.title}
                  </motion.h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              size="lg"
              className="gradient-primary text-white rounded-full px-8 py-6 text-lg font-semibold button-modern hover-glow group pulse-glow"
            >
              Explorar todas las características
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform icon-hover" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
