"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Sparkles,
  Zap,
  Shield,
  Globe,
  MessageSquare,
  Code,
  BarChart3,
  Smartphone,
  Cloud,
  Lock,
  Rocket,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Inteligencia Avanzada",
    description: "Procesamiento de lenguaje natural de última generación con comprensión contextual profunda.",
    color: "from-blue-500 to-cyan-500",
    delay: 0.1,
  },
  {
    icon: Sparkles,
    title: "Generación Creativa",
    description: "Crea contenido original, desde textos y código hasta ideas innovadoras para tu negocio.",
    color: "from-purple-500 to-pink-500",
    delay: 0.2,
  },
  {
    icon: Zap,
    title: "Respuestas Instantáneas",
    description: "Procesamiento ultrarrápido que entrega respuestas precisas en tiempo real.",
    color: "from-yellow-500 to-orange-500",
    delay: 0.3,
  },
  {
    icon: Shield,
    title: "Seguridad Empresarial",
    description: "Encriptación de extremo a extremo y cumplimiento total con regulaciones de privacidad.",
    color: "from-green-500 to-teal-500",
    delay: 0.4,
  },
  {
    icon: Globe,
    title: "Multiidioma",
    description: "Soporte nativo para más de 50 idiomas con traducción automática en tiempo real.",
    color: "from-indigo-500 to-purple-500",
    delay: 0.5,
  },
  {
    icon: MessageSquare,
    title: "Conversaciones Naturales",
    description: "Diálogos fluidos y contextuales que se sienten como hablar con un humano.",
    color: "from-pink-500 to-rose-500",
    delay: 0.6,
  },
];

const advancedFeatures = [
  {
    icon: Code,
    title: "API Completa",
    description: "Integración perfecta con RESTful API y webhooks para máxima flexibilidad.",
    stats: "99.9% Uptime",
  },
  {
    icon: BarChart3,
    title: "Analytics Avanzados",
    description: "Métricas detalladas e insights accionables sobre tus conversaciones.",
    stats: "50+ Métricas",
  },
  {
    icon: Smartphone,
    title: "Multiplataforma",
    description: "Funciona perfectamente en web, móvil, apps y sistemas de mensajería.",
    stats: "12 Plataformas",
  },
  {
    icon: Cloud,
    title: "Escalabilidad",
    description: "Infraestructura cloud que escala automáticamente según tus necesidades.",
    stats: "∞ Escalable",
  },
];

export function FeaturesSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-background to-accent/5">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 rounded-full">
            <Rocket className="w-4 h-4 mr-2" />
            Características Avanzadas
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Potencia tu negocio con{" "}
            <span className="gradient-text">IA Avanzada</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Descubre cómo Aira revoluciona la manera en que interactúas con tus clientes,
            automatiza procesos y potencia tu productividad.
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: feature.delay }}
            >
              <Card className="h-full p-6 glass-card hover-lift group cursor-pointer border-0 shadow-modern-lg">
                <div className="mb-4">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Advanced Features */}
        <motion.div
          className="glass-card p-8 rounded-3xl border-0 shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Funcionalidades <span className="gradient-text">Empresariales</span>
            </h3>
            <p className="text-muted-foreground text-lg">
              Herramientas profesionales para empresas que buscan maximizar su potencial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advancedFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="mb-4 mx-auto w-16 h-16 bg-gradient-to-r from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="font-bold mb-2 group-hover:gradient-text transition-all duration-300">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {feature.description}
                </p>
                <Badge variant="secondary" className="font-semibold">
                  {feature.stats}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interactive Demo Preview */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="glass-card p-8 rounded-3xl border-0 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
              <div className="relative">
                <h3 className="text-2xl font-bold mb-4">
                  ¿Listo para ver Aira en acción?
                </h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  Experimenta el poder de la IA conversacional en tiempo real
                </p>

                {/* Mock Chat Interface */}
                <div className="bg-background/50 rounded-2xl p-6 shadow-inner">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm font-medium">Demo en vivo</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      <Lock className="w-3 h-3 mr-1" />
                      Seguro
                    </Badge>
                  </div>

                  <div className="space-y-3">
                    <motion.div
                      className="bg-accent/50 p-3 rounded-lg rounded-tl-sm max-w-xs"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <p className="text-sm">Hola Aira, ayúdame con mi proyecto</p>
                    </motion.div>

                    <motion.div
                      className="bg-primary/10 p-3 rounded-lg rounded-tr-sm max-w-sm ml-auto"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    >
                      <p className="text-sm">
                        ¡Perfecto! Te ayudo a estructurar tu proyecto.
                        ¿Qué tipo de proyecto tienes en mente?
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
