"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Bot,
  Target,
  Heart,
  Users,
  Globe,
  Lightbulb,
  Award,
  TrendingUp,
  Shield,
  Zap,
  ArrowRight,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Centrados en el Usuario",
    description: "Cada decisión que tomamos tiene en mente la experiencia del usuario y su éxito.",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Lightbulb,
    title: "Innovación Constante",
    description: "Siempre buscamos nuevas formas de mejorar y revolucionar la IA conversacional.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Transparencia",
    description: "Operamos con total transparencia en nuestros procesos y decisiones.",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: Globe,
    title: "Accesibilidad Global",
    description: "Creemos que la IA avanzada debe estar disponible para todos, en cualquier lugar.",
    color: "from-blue-500 to-cyan-500",
  },
];

const team = [
  {
    name: "Ana García",
    role: "CEO & Fundadora",
    description: "Ex-Google, especialista en IA con 10+ años de experiencia en productos conversacionales.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face",
    social: {
      linkedin: "#",
      twitter: "#",
    }
  },
  {
    name: "Carlos Mendoza",
    role: "CTO",
    description: "Arquitecto de sistemas distribuidos, anteriormente en OpenAI y Microsoft Research.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    social: {
      linkedin: "#",
      github: "#",
    }
  },
  {
    name: "Sofia Chen",
    role: "Head of AI Research",
    description: "PhD en Machine Learning, investigadora en procesamiento de lenguaje natural.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    social: {
      linkedin: "#",
      twitter: "#",
    }
  },
  {
    name: "Miguel Torres",
    role: "Head of Product",
    description: "Especialista en UX/UI con experiencia en productos SaaS y herramientas empresariales.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    social: {
      linkedin: "#",
      twitter: "#",
    }
  },
];

const stats = [
  { icon: Users, value: "10,000+", label: "Usuarios Activos" },
  { icon: Globe, value: "50+", label: "Países" },
  { icon: Bot, value: "1M+", label: "Conversaciones" },
  { icon: Award, value: "99.9%", label: "Uptime" },
];

const timeline = [
  {
    year: "2020",
    title: "Fundación",
    description: "Aira nace de la visión de democratizar la IA conversacional para todos los negocios."
  },
  {
    year: "2021",
    title: "Primera Ronda",
    description: "Levantamos $2M en semilla para desarrollar nuestra plataforma core."
  },
  {
    year: "2022",
    title: "Lanzamiento Público",
    description: "Lanzamos Aira 1.0 con más de 1,000 empresas en lista de espera."
  },
  {
    year: "2023",
    title: "Expansión Global",
    description: "Alcanzamos 10,000 usuarios activos en más de 50 países."
  },
  {
    year: "2024",
    title: "Aira 2.0",
    description: "Lanzamos la próxima generación con capacidades de IA multimodal."
  },
];

export default function AboutPage() {
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
              <Bot className="w-4 h-4 mr-2" />
              Nuestra Historia
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Construyendo el futuro de la{" "}
              <span className="gradient-text">conversación</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              En Aira, creemos que la inteligencia artificial debe ser accesible, útil y
              transformadora para empresas de todos los tamaños. Esta es nuestra historia.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card p-8 h-full border-0 shadow-modern-lg">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Nuestra Misión</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Democratizar el acceso a la inteligencia artificial conversacional,
                  empoderando a empresas de todos los tamaños para que ofrezcan
                  experiencias de cliente excepcionales.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Creemos que cada empresa debería tener acceso a tecnología de IA
                  de clase mundial, sin importar su tamaño o presupuesto.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card p-8 h-full border-0 shadow-modern-lg">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Nuestra Visión</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Ser la plataforma líder mundial de IA conversacional, donde cada
                  interacción digital se sienta natural, útil y transformadora.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Imaginamos un futuro donde la comunicación entre humanos y
                  máquinas sea tan fluida que transforme la manera en que
                  trabajamos y vivimos.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Nuestros <span className="gradient-text">valores</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Los principios que guían cada decisión y acción en Aira
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card p-8 h-full hover-lift group border-0 shadow-modern-lg">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Nuestro <span className="gradient-text">camino</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Los hitos más importantes en el crecimiento de Aira
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 to-primary/10"></div>

            <div className="space-y-12">
              {timeline.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className="relative flex items-start space-x-8"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full flex items-center justify-center border-4 border-background shadow-lg">
                    <span className="text-sm font-bold text-primary">{milestone.year}</span>
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
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
              Conoce a nuestro <span className="gradient-text">equipo</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Las mentes brillantes detrás de Aira, dedicadas a revolucionar la IA conversacional
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card p-6 text-center hover-lift group border-0 shadow-modern-lg">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-lg group-hover:shadow-glow transition-all duration-300">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-1 group-hover:gradient-text transition-all duration-300">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {member.description}
                  </p>
                  <div className="flex justify-center space-x-3">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="w-8 h-8 rounded-full bg-accent/50 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        className="w-8 h-8 rounded-full bg-accent/50 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        className="w-8 h-8 rounded-full bg-accent/50 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
                ¿Quieres formar parte de{" "}
                <span className="gradient-text">nuestra historia</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Únete a miles de empresas que ya están transformando sus conversaciones con Aira
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
                  Conocer más
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
