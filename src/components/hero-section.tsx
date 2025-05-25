"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Bot,
  ArrowRight,
  Sparkles,
  MessageCircle,
  Zap,
  Play,
  Star,
} from "lucide-react";

const floatingElements = [
  { icon: Sparkles, delay: 0, x: "10%", y: "20%" },
  { icon: MessageCircle, delay: 0.5, x: "80%", y: "30%" },
  { icon: Zap, delay: 1, x: "15%", y: "70%" },
  { icon: Bot, delay: 1.5, x: "85%", y: "65%" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 gradient-primary rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute hidden lg:block"
          style={{ left: element.x, top: element.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: element.delay, duration: 0.8 }}
        >
          <motion.div
            className="glass-card p-3 shadow-glow"
            animate={{ y: [-10, 10, -10] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: element.delay,
            }}
          >
            <element.icon className="w-6 h-6 text-primary" />
          </motion.div>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="container-custom relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Heading */}
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 text-balance leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            El futuro de la{" "}
            <span className="gradient-text">conversación</span>
            <br />
            <span className="relative">
              inteligente
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 gradient-primary rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Experimenta el poder de la inteligencia artificial con Aira, el chatbot más avanzado que transforma cada conversación en una experiencia extraordinaria.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
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
              className="rounded-full px-8 py-6 text-lg font-semibold glass border-primary/20 hover:bg-primary/10 group"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Ver Demo
            </Button>
          </motion.div>
        </div>

        {/* Hero Visual */}
        <motion.div
          className="mt-20 relative max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <div className="relative">
            {/* Main Chat Interface Preview */}
            <div className="glass-card gradient-border overflow-hidden shadow-2xl">
              <div className="bg-background/50 p-6">
                {/* Chat Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="gradient-primary p-2 rounded-full">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Aira Assistant</h3>
                      <p className="text-sm text-muted-foreground">En línea</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="space-y-4">
                  <motion.div
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                      <span className="text-sm font-medium">Tú</span>
                    </div>
                    <div className="glass px-4 py-2 rounded-2xl rounded-tl-sm max-w-xs">
                      <p className="text-sm">¿Puedes ayudarme a crear una presentación?</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2 }}
                  >
                    <div className="gradient-primary p-1 rounded-full">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div className="glass px-4 py-2 rounded-2xl rounded-tl-sm max-w-sm">
                      <p className="text-sm">
                        ¡Por supuesto! Te ayudo a crear una presentación impactante.
                        ¿Sobre qué tema necesitas que sea?
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-2 px-4 py-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                  >
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200" />
                    </div>
                    <span className="text-sm text-muted-foreground">Aira está escribiendo...</span>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Floating Action Cards */}
            <motion.div
              className="absolute -top-6 -left-6 glass-card p-4 shadow-glow hidden lg:block"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-sm font-medium">4.9/5 Rating</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -right-6 glass-card p-4 shadow-glow hidden lg:block"
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Respuesta instantánea</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
