"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  ArrowRight,
  Check,
  Star,
} from "lucide-react";

const detailedFeatures = [
  {
    icon: Brain,
    title: "Procesamiento de Lenguaje Natural Avanzado",
    description: "Aira utiliza modelos de IA de última generación para comprender el contexto, las emociones y las intenciones detrás de cada mensaje.",
    benefits: [
      "Comprensión contextual profunda",
      "Análisis de sentimientos en tiempo real",
      "Detección automática de intenciones",
      "Manejo de conversaciones complejas"
    ],
    category: "IA Core",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Sparkles,
    title: "Generación de Contenido Creativo",
    description: "Desde artículos y emails hasta código y presentaciones, Aira crea contenido original adaptado a tus necesidades específicas.",
    benefits: [
      "Redacción automatizada de contenido",
      "Generación de código en múltiples lenguajes",
      "Creación de presentaciones interactivas",
      "Optimización SEO automática"
    ],
    category: "Creatividad",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Zap,
    title: "Rendimiento Ultra-Rápido",
    description: "Arquitectura optimizada que garantiza respuestas instantáneas, incluso bajo alta demanda de usuarios.",
    benefits: [
      "Tiempo de respuesta < 100ms",
      "Escalabilidad automática",
      "CDN global distribuido",
      "Cache inteligente predictivo"
    ],
    category: "Performance",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Shield,
    title: "Seguridad Empresarial",
    description: "Protección completa de datos con cifrado militar y cumplimiento total de regulaciones internacionales.",
    benefits: [
      "Cifrado AES-256 end-to-end",
      "Cumplimiento GDPR y SOC2",
      "Auditorías de seguridad continuas",
      "Control granular de permisos"
    ],
    category: "Seguridad",
    color: "from-green-500 to-teal-500"
  },
  {
    icon: Globe,
    title: "Capacidades Multiidioma",
    description: "Comunicación fluida en más de 100 idiomas con traducción automática y adaptación cultural.",
    benefits: [
      "Soporte para 100+ idiomas",
      "Traducción automática contextual",
      "Adaptación cultural regional",
      "Detección automática de idioma"
    ],
    category: "Global",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Code,
    title: "API e Integraciones",
    description: "Conecta Aira con cualquier sistema existente através de nuestra API RESTful completa y webhooks.",
    benefits: [
      "API RESTful completa",
      "SDKs para múltiples lenguajes",
      "Webhooks en tiempo real",
      "Documentación interactiva"
    ],
    category: "Desarrollo",
    color: "from-pink-500 to-rose-500"
  }
];

const useCases = [
  {
    title: "Atención al Cliente 24/7",
    description: "Resuelve consultas automáticamente y escala a agentes humanos cuando es necesario.",
    icon: MessageSquare,
    metrics: "85% reducción en tickets"
  },
  {
    title: "Automatización de Ventas",
    description: "Califica leads, agenda citas y guía a prospects através del embudo de ventas.",
    icon: BarChart3,
    metrics: "300% aumento en conversiones"
  },
  {
    title: "Soporte Técnico",
    description: "Diagnóstica problemas, proporciona soluciones y crea tickets automáticamente.",
    icon: Smartphone,
    metrics: "60% reducción en tiempo de resolución"
  },
  {
    title: "Capacitación Empresarial",
    description: "Crea contenido educativo personalizado y evalúa el progreso de los empleados.",
    icon: Star,
    metrics: "40% mejora en retención"
  }
];

export default function FeaturesPage() {
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
              <Rocket className="w-4 h-4 mr-2" />
              Características Completas
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Todo lo que necesitas en un{" "}
              <span className="gradient-text">chatbot inteligente</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Descubre cómo cada característica de Aira está diseñada para transformar
              tu negocio y potenciar la experiencia de tus clientes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-20">
            {detailedFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="lg:w-1/2">
                  <div className="glass-card p-8 rounded-3xl shadow-2xl">
                    <div className="relative mb-6">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} shadow-lg`}>
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <Badge variant="secondary" className="ml-4 text-xs">
                        {feature.category}
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="space-y-3">
                      {feature.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl blur-3xl" />
                    <div className="relative bg-background/50 backdrop-blur-sm border border-primary/10 rounded-3xl p-8">
                      <div className="space-y-4">
                        <div className="h-4 bg-gradient-to-r from-primary/20 to-primary/5 rounded-full" />
                        <div className="h-4 bg-gradient-to-r from-primary/15 to-transparent rounded-full w-3/4" />
                        <div className="h-4 bg-gradient-to-r from-primary/10 to-transparent rounded-full w-1/2" />
                        <div className="grid grid-cols-2 gap-4 pt-4">
                          <div className="h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center">
                            <feature.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="h-16 bg-gradient-to-br from-accent/50 to-accent/20 rounded-xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-gradient-to-b from-accent/5 to-background">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Casos de uso <span className="gradient-text">reales</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubre cómo empresas como la tuya están transformando sus resultados con Aira
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-8 glass-card hover-lift group cursor-pointer border-0 shadow-modern-lg">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                      <useCase.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <Badge variant="outline" className="text-xs font-semibold">
                      {useCase.metrics}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                    {useCase.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {useCase.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            className="glass-card p-12 rounded-3xl text-center border-0 shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-3xl" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Listo para experimentar el futuro de la{" "}
                <span className="gradient-text">conversación inteligente</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Únete a miles de empresas que ya están transformando su negocio con Aira
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="gradient-primary text-white rounded-full px-8 py-6 text-lg font-semibold button-modern hover-glow group"
                >
                  Comenzar Gratis
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 py-6 text-lg font-semibold glass border-primary/20 hover:bg-primary/10"
                >
                  Agendar Demo
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
