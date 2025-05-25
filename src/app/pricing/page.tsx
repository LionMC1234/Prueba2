"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Check,
  X,
  Star,
  Zap,
  Crown,
  ArrowRight,
  MessageCircle,
  BarChart3,
  Shield,
  Headphones,
  Globe,
  Code,
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfecto para proyectos personales y pequeños negocios",
    price: 0,
    period: "Gratis para siempre",
    icon: MessageCircle,
    color: "from-blue-500 to-cyan-500",
    popular: false,
    features: [
      { name: "1,000 mensajes/mes", included: true },
      { name: "1 chatbot", included: true },
      { name: "Integración básica", included: true },
      { name: "Soporte por email", included: true },
      { name: "Análisis básicos", included: true },
      { name: "Personalización de marca", included: false },
      { name: "API acceso", included: false },
      { name: "Soporte prioritario", included: false },
      { name: "Integraciones avanzadas", included: false },
    ],
    cta: "Comenzar Gratis",
    ctaVariant: "outline" as const,
  },
  {
    name: "Professional",
    description: "Ideal para empresas en crecimiento que necesitan más potencia",
    price: 29,
    period: "/mes",
    icon: BarChart3,
    color: "from-purple-500 to-pink-500",
    popular: true,
    features: [
      { name: "25,000 mensajes/mes", included: true },
      { name: "5 chatbots", included: true },
      { name: "Todas las integraciones", included: true },
      { name: "Soporte prioritario", included: true },
      { name: "Análisis avanzados", included: true },
      { name: "Personalización completa", included: true },
      { name: "API completa", included: true },
      { name: "Webhook en tiempo real", included: true },
      { name: "Exportación de datos", included: false },
    ],
    cta: "Probar 14 días gratis",
    ctaVariant: "default" as const,
  },
  {
    name: "Enterprise",
    description: "Solución completa para empresas con necesidades específicas",
    price: 99,
    period: "/mes",
    icon: Crown,
    color: "from-amber-500 to-orange-500",
    popular: false,
    features: [
      { name: "Mensajes ilimitados", included: true },
      { name: "Chatbots ilimitados", included: true },
      { name: "Integración personalizada", included: true },
      { name: "Soporte 24/7 dedicado", included: true },
      { name: "Analytics empresariales", included: true },
      { name: "White-label completo", included: true },
      { name: "API y webhooks ilimitados", included: true },
      { name: "SLA garantizado", included: true },
      { name: "Exportación completa", included: true },
    ],
    cta: "Contactar Ventas",
    ctaVariant: "outline" as const,
  },
];

const faqs = [
  {
    question: "¿Puedo cambiar de plan en cualquier momento?",
    answer: "Sí, puedes actualizar o degradar tu plan en cualquier momento. Los cambios se aplicarán en tu próximo ciclo de facturación."
  },
  {
    question: "¿Hay contratos a largo plazo?",
    answer: "No, todos nuestros planes son mensuales sin compromiso. Puedes cancelar en cualquier momento."
  },
  {
    question: "¿Qué incluye el soporte prioritario?",
    answer: "El soporte prioritario incluye respuesta en menos de 2 horas, chat en vivo 24/7 y acceso a nuestro equipo de especialistas."
  },
  {
    question: "¿Ofrecen descuentos por pagos anuales?",
    answer: "Sí, ofrecemos un 20% de descuento cuando pagas anualmente. Contacta a ventas para más detalles."
  }
];

const features = [
  {
    icon: MessageCircle,
    title: "Conversaciones Naturales",
    description: "IA avanzada para diálogos fluidos y contextuales"
  },
  {
    icon: BarChart3,
    title: "Analytics Profundos",
    description: "Métricas detalladas y insights accionables"
  },
  {
    icon: Shield,
    title: "Seguridad Empresarial",
    description: "Cifrado end-to-end y cumplimiento GDPR"
  },
  {
    icon: Globe,
    title: "Multiidioma",
    description: "Soporte para más de 100 idiomas"
  },
  {
    icon: Code,
    title: "API Completa",
    description: "Integración perfecta con tus sistemas"
  },
  {
    icon: Headphones,
    title: "Soporte Experto",
    description: "Equipo dedicado para tu éxito"
  }
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = React.useState(false);

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
              <Zap className="w-4 h-4 mr-2" />
              Precios Transparentes
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Elige el plan perfecto{" "}
              <span className="gradient-text">para tu negocio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance mb-8">
              Comienza gratis y escala según tus necesidades. Sin sorpresas, sin costos ocultos.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span className={`text-sm ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                Mensual
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  isAnnual ? 'bg-primary' : 'bg-muted'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isAnnual ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                Anual
              </span>
              {isAnnual && (
                <Badge variant="secondary" className="ml-2">
                  Ahorra 20%
                </Badge>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="gradient-primary text-white px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Más Popular
                    </Badge>
                  </div>
                )}

                <Card className={`h-full p-8 ${plan.popular ? 'glass-card border-primary/20 shadow-glow' : 'glass-card'} hover-lift transition-all duration-300 border-0 shadow-modern-lg`}>
                  <div className="mb-6">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${plan.color} shadow-lg mb-4`}>
                      <plan.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm">{plan.description}</p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">
                        ${isAnnual && plan.price > 0 ? Math.floor(plan.price * 0.8) : plan.price}
                      </span>
                      <span className="text-muted-foreground ml-1">
                        {plan.price === 0 ? plan.period : plan.period}
                      </span>
                    </div>
                    {isAnnual && plan.price > 0 && (
                      <p className="text-sm text-muted-foreground">
                        Facturado anualmente (${plan.price * 12 * 0.8}/año)
                      </p>
                    )}
                  </div>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                        )}
                        <span className={`text-sm ${feature.included ? '' : 'text-muted-foreground'}`}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full ${plan.popular ? 'gradient-primary text-white button-modern hover-glow' : ''} ${plan.ctaVariant === 'outline' ? 'rounded-full' : 'rounded-full'}`}
                    variant={plan.ctaVariant}
                    size="lg"
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
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
              Todo incluido en{" "}
              <span className="gradient-text">cualquier plan</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              No importa qué plan elijas, tendrás acceso a estas características fundamentales
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 mx-auto w-16 h-16 bg-gradient-to-r from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-bold mb-2 group-hover:gradient-text transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Preguntas <span className="gradient-text">frecuentes</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              ¿Tienes dudas? Aquí están las respuestas a las preguntas más comunes
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 rounded-2xl border-0 shadow-modern"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-bold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
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
                ¿Listo para{" "}
                <span className="gradient-text">transformar tu negocio</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Únete a miles de empresas que ya están revolucionando su atención al cliente con Aira
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="gradient-primary text-white rounded-full px-8 py-6 text-lg font-semibold button-modern hover-glow group"
                >
                  Comenzar Gratis Ahora
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 py-6 text-lg font-semibold glass border-primary/20 hover:bg-primary/10"
                >
                  Hablar con Ventas
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
