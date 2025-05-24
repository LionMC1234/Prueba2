import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BrainCircuit,
  Sparkles,
  Zap,
  Shield,
  BarChart,
  MessageCircle,
  Check,
  X,
  Code,
  Image as ImageIcon,
  GraduationCap,
  Laptop,
  HeartHandshake,
  FileText,
  Clock,
  Users,
  Share2,
  Search,
  Lightbulb,
  Layers,
  Bot,
  ListChecks,
  User,
  Smartphone,
  Mail,
  MessageSquare,
  Twitter,
  Facebook,
  Instagram,
  Linkedin
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-neko-dark-950 transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-20 overflow-hidden">
        {/* Gradientes decorativos */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/3 w-[600px] h-[600px] rounded-full bg-neko-pink-100 dark:bg-neko-pink-900/30 opacity-70 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/3 w-[600px] h-[600px] rounded-full bg-neko-amber-100 dark:bg-neko-amber-900/20 opacity-70 blur-3xl"></div>

        <div className="container relative mx-auto px-6 z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-neko-pink-100 dark:bg-neko-pink-900/30 text-neko-pink-700 dark:text-neko-pink-400 rounded-full mb-8 text-sm font-medium">
              Asistente Virtual Inteligente
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 max-w-4xl">
              <span className="text-gradient-neko">Aira</span> - chatbot
              <span className="relative mx-2">
                <span className="relative z-10 text-gradient-neko-amber">avanzado</span>
                <svg
                  className="absolute bottom-1 -z-10 w-full h-3 text-neko-pink-200 dark:text-neko-pink-800/50"
                  viewBox="0 0 100 15"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,5 Q25,0 50,5 T100,5 V15 H0 Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <br />e interactivo
            </h1>

            <p className="text-xl text-neko-dark-600 dark:text-neko-dark-300 max-w-2xl mb-10">
              Experimenta el poder de un chatbot de última generación con una interfaz
              moderna y minimalista. Potencia tus conversaciones con inteligencia artificial avanzada.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Link href="/registro">
                <Button className="text-lg px-8 py-6 bg-gradient-neko hover:opacity-90 transition-opacity text-white shadow-neko font-medium">
                  Probar Aira ahora
                </Button>
              </Link>
              <Link href="/caracteristicas">
                <Button variant="outline" className="text-lg px-8 py-6 border-neko-pink-300 dark:border-neko-pink-800 text-neko-dark-800 dark:text-neko-dark-200 hover:bg-neko-pink-50 dark:hover:bg-neko-pink-950/30">
                  Conoce más
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Imagen/Preview Destacada */}
          <div className="relative mx-auto max-w-4xl w-full">
            <div className="absolute inset-0 -m-6 bg-neko-pink-100 dark:bg-neko-pink-900/30 rounded-xl blur-xl opacity-50 animate-blob"></div>
            <div className="relative overflow-hidden rounded-xl border border-neko-pink-200 dark:border-neko-pink-800/50 shadow-neko dark:shadow-none glow-border">
              <div className="w-full aspect-[16/9] bg-white dark:bg-neko-dark-900 p-6 rounded-xl">
                <div className="flex flex-col h-full bg-gradient-to-br from-neko-pink-50 to-white dark:from-neko-dark-900 dark:to-neko-dark-950 rounded-lg overflow-hidden border border-neko-pink-100 dark:border-neko-pink-900/50">
                  <div className="h-8 bg-neko-pink-100 dark:bg-neko-dark-800 flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-neko-pink-400"></div>
                      <div className="w-3 h-3 rounded-full bg-neko-amber-600"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                  </div>

                  <div className="flex-1 p-6 flex items-center justify-center">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="w-32 h-32 rounded-full bg-gradient-neko flex items-center justify-center relative">
                        <div className="absolute inset-1 rounded-full bg-white dark:bg-neko-dark-900 flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-neko-pink-600 flex items-center justify-center text-white font-bold text-xl">
                            <Bot size={28} />
                          </div>
                        </div>
                      </div>

                      <div className="md:text-left text-center">
                        <h3 className="text-2xl font-bold text-neko-dark-900 dark:text-white mb-2">
                          <span className="text-gradient-neko">Aira</span> Chatbot
                        </h3>
                        <p className="text-neko-dark-600 dark:text-neko-dark-300 max-w-xs">
                          Asistente virtual con diseño moderno y minimalista para una experiencia de conversación inteligente.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Aira Section */}
      <section className="py-20 bg-neko-pink-50/50 dark:bg-neko-dark-900/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
                ¿Qué es <span className="text-gradient-neko">Aira</span>?
                <svg
                  className="absolute -bottom-2 -z-10 w-full h-3 text-neko-pink-200 dark:text-neko-pink-800/50"
                  viewBox="0 0 100 15"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,5 Q50,15 100,5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                </svg>
              </h2>
              <p className="text-lg text-neko-dark-600 dark:text-neko-dark-300 mb-8">
                Aira es un avanzado chatbot impulsado por inteligencia artificial diseñado para ofrecer experiencias de conversación naturales y humanas. Utilizando tecnología de procesamiento de lenguaje natural de última generación, Aira puede comprender contextos, aprender de interacciones y proporcionar respuestas útiles y precisas.
              </p>
              <p className="text-lg text-neko-dark-600 dark:text-neko-dark-300 mb-8">
                Desde responder preguntas hasta generar contenido creativo, Aira es tu asistente personal para tareas cotidianas y profesionales.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-neko-dark-800 dark:text-neko-dark-200">
                  <Check className="h-5 w-5 text-neko-pink-600" />
                  <span>Procesamiento de lenguaje natural</span>
                </div>
                <div className="flex items-center gap-2 text-neko-dark-800 dark:text-neko-dark-200">
                  <Check className="h-5 w-5 text-neko-pink-600" />
                  <span>Aprendizaje personalizado</span>
                </div>
                <div className="flex items-center gap-2 text-neko-dark-800 dark:text-neko-dark-200">
                  <Check className="h-5 w-5 text-neko-pink-600" />
                  <span>Respuestas en tiempo real</span>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-neko-pink-200 to-neko-amber-200 dark:from-neko-pink-900/40 dark:to-neko-amber-900/40 rounded-2xl blur-lg opacity-70"></div>
              <div className="relative border border-neko-pink-200 dark:border-neko-pink-900/50 rounded-2xl overflow-hidden shadow-neko dark:shadow-none bg-white dark:bg-neko-dark-950 p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-neko-pink-100 dark:bg-neko-pink-900/50 flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-neko-pink-700 dark:text-neko-pink-400" />
                    </div>
                    <div className="bg-neko-pink-50 dark:bg-neko-dark-900 p-3 rounded-lg rounded-tl-none">
                      <p className="text-neko-dark-800 dark:text-neko-dark-200">¿Puedes explicarme qué es la inteligencia artificial?</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-neko flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-neko-pink-100 dark:bg-neko-pink-900/30 p-3 rounded-lg rounded-tl-none">
                      <p className="text-neko-dark-800 dark:text-neko-dark-200">
                        La inteligencia artificial (IA) es la simulación de procesos de inteligencia humana por sistemas informáticos. Estos procesos incluyen el aprendizaje (la adquisición de información y reglas para usar la información), el razonamiento (usando las reglas para llegar a conclusiones aproximadas o definitivas) y la autocorrección.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-neko-pink-100 dark:bg-neko-pink-900/50 flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-neko-pink-700 dark:text-neko-pink-400" />
                    </div>
                    <div className="bg-neko-pink-50 dark:bg-neko-dark-900 p-3 rounded-lg rounded-tl-none">
                      <p className="text-neko-dark-800 dark:text-neko-dark-200">Gracias, ¿y puedes darme un ejemplo práctico?</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-neko flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-neko-pink-100 dark:bg-neko-pink-900/30 p-3 rounded-lg rounded-tl-none">
                      <p className="text-neko-dark-800 dark:text-neko-dark-200">
                        ¡Claro! Un ejemplo práctico de IA es precisamente un chatbot como yo (Aira). Utilizo procesamiento de lenguaje natural para entender tus preguntas y generar respuestas coherentes. Otros ejemplos incluyen los asistentes de voz como Siri o Alexa, sistemas de recomendación en plataformas como Netflix, o incluso los filtros de correo no deseado que identifican patrones para clasificar mensajes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-neko-pink-50 dark:from-neko-dark-950 dark:to-neko-dark-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="inline-block text-4xl font-bold mb-4 relative">
              Características <span className="text-gradient-neko">principales</span>
              <svg
                className="absolute -bottom-2 -z-10 w-full h-3 text-neko-pink-200 dark:text-neko-pink-800/50"
                viewBox="0 0 100 15"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,5 Q50,15 100,5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                />
              </svg>
            </h2>
            <p className="text-xl text-neko-dark-600 dark:text-neko-dark-300 max-w-2xl mx-auto">
              Descubre todo lo que Aira puede hacer por ti
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group hover-scale">
              <div className="bg-white dark:bg-neko-dark-900 rounded-2xl border border-neko-pink-100 dark:border-neko-pink-900/50 shadow-neko dark:shadow-none overflow-hidden transition-all duration-300 h-full group-hover:shadow-neko-strong dark:group-hover:shadow-none">
                <div className="p-8">
                  <div className="w-14 h-14 bg-neko-pink-100 dark:bg-neko-pink-900/30 rounded-xl flex items-center justify-center mb-6 text-neko-pink-700 dark:text-neko-pink-400 transition-all duration-300 group-hover:bg-neko-pink-700 group-hover:text-white dark:group-hover:bg-neko-pink-600 group-hover:rounded-full">
                    <BrainCircuit size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-neko-dark-900 dark:text-white">Inteligencia Avanzada</h3>
                  <p className="text-neko-dark-600 dark:text-neko-dark-300">
                    Algoritmos de última generación que comprenden contextos complejos y generan respuestas coherentes.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group hover-scale">
              <div className="bg-white dark:bg-neko-dark-900 rounded-2xl border border-neko-pink-100 dark:border-neko-pink-900/50 shadow-neko dark:shadow-none overflow-hidden transition-all duration-300 h-full group-hover:shadow-neko-strong dark:group-hover:shadow-none">
                <div className="p-8">
                  <div className="w-14 h-14 bg-neko-pink-100 dark:bg-neko-pink-900/30 rounded-xl flex items-center justify-center mb-6 text-neko-pink-700 dark:text-neko-pink-400 transition-all duration-300 group-hover:bg-neko-pink-700 group-hover:text-white dark:group-hover:bg-neko-pink-600 group-hover:rounded-full">
                    <Sparkles size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-neko-dark-900 dark:text-white">Generación Creativa</h3>
                  <p className="text-neko-dark-600 dark:text-neko-dark-300">
                    Crea contenido original, desde textos y poemas hasta guiones y código, adaptándose a tus necesidades.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group hover-scale">
              <div className="bg-white dark:bg-neko-dark-900 rounded-2xl border border-neko-pink-100 dark:border-neko-pink-900/50 shadow-neko dark:shadow-none overflow-hidden transition-all duration-300 h-full group-hover:shadow-neko-strong dark:group-hover:shadow-none">
                <div className="p-8">
                  <div className="w-14 h-14 bg-neko-pink-100 dark:bg-neko-pink-900/30 rounded-xl flex items-center justify-center mb-6 text-neko-pink-700 dark:text-neko-pink-400 transition-all duration-300 group-hover:bg-neko-pink-700 group-hover:text-white dark:group-hover:bg-neko-pink-600 group-hover:rounded-full">
                    <Zap size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-neko-dark-900 dark:text-white">Respuestas Instantáneas</h3>
                  <p className="text-neko-dark-600 dark:text-neko-dark-300">
                    Obtén respuestas rápidas y precisas a tus preguntas, con un tiempo de procesamiento optimizado.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="group hover-scale">
              <div className="bg-white dark:bg-neko-dark-900 rounded-2xl border border-neko-pink-100 dark:border-neko-pink-900/50 shadow-neko dark:shadow-none overflow-hidden transition-all duration-300 h-full group-hover:shadow-neko-strong dark:group-hover:shadow-none">
                <div className="p-8">
                  <div className="w-14 h-14 bg-neko-pink-100 dark:bg-neko-pink-900/30 rounded-xl flex items-center justify-center mb-6 text-neko-pink-700 dark:text-neko-pink-400 transition-all duration-300 group-hover:bg-neko-pink-700 group-hover:text-white dark:group-hover:bg-neko-pink-600 group-hover:rounded-full">
                    <Code size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-neko-dark-900 dark:text-white">Asistencia Técnica</h3>
                  <p className="text-neko-dark-600 dark:text-neko-dark-300">
                    Ayuda con programación, depuración de código y explicación de conceptos técnicos de manera sencilla.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="group hover-scale">
              <div className="bg-white dark:bg-neko-dark-900 rounded-2xl border border-neko-pink-100 dark:border-neko-pink-900/50 shadow-neko dark:shadow-none overflow-hidden transition-all duration-300 h-full group-hover:shadow-neko-strong dark:group-hover:shadow-none">
                <div className="p-8">
                  <div className="w-14 h-14 bg-neko-pink-100 dark:bg-neko-pink-900/30 rounded-xl flex items-center justify-center mb-6 text-neko-pink-700 dark:text-neko-pink-400 transition-all duration-300 group-hover:bg-neko-pink-700 group-hover:text-white dark:group-hover:bg-neko-pink-600 group-hover:rounded-full">
                    <ImageIcon size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-neko-dark-900 dark:text-white">Análisis de Imágenes</h3>
                  <p className="text-neko-dark-600 dark:text-neko-dark-300">
                    Capacidad para interpretar y describir imágenes, facilitando la interacción multimodal.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="group hover-scale">
              <div className="bg-white dark:bg-neko-dark-900 rounded-2xl border border-neko-pink-100 dark:border-neko-pink-900/50 shadow-neko dark:shadow-none overflow-hidden transition-all duration-300 h-full group-hover:shadow-neko-strong dark:group-hover:shadow-none">
                <div className="p-8">
                  <div className="w-14 h-14 bg-neko-pink-100 dark:bg-neko-pink-900/30 rounded-xl flex items-center justify-center mb-6 text-neko-pink-700 dark:text-neko-pink-400 transition-all duration-300 group-hover:bg-neko-pink-700 group-hover:text-white dark:group-hover:bg-neko-pink-600 group-hover:rounded-full">
                    <GraduationCap size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-neko-dark-900 dark:text-white">Aprendizaje Continuo</h3>
                  <p className="text-neko-dark-600 dark:text-neko-dark-300">
                    Se actualiza constantemente con nueva información y mejora con cada interacción para ofrecerte lo mejor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white dark:bg-neko-dark-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="inline-block text-4xl font-bold mb-4 relative">
              Casos de <span className="text-gradient-neko">Uso</span>
              <svg
                className="absolute -bottom-2 -z-10 w-full h-3 text-neko-pink-200 dark:text-neko-pink-800/50"
                viewBox="0 0 100 15"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,5 Q50,15 100,5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                />
              </svg>
            </h2>
            <p className="text-xl text-neko-dark-600 dark:text-neko-dark-300 max-w-2xl mx-auto">
              Descubre cómo Aira puede transformar tu día a día
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Case 1 */}
            <div className="bg-neko-pink-50 dark:bg-neko-dark-900 rounded-xl p-6 hover-lift">
              <div className="w-12 h-12 bg-white dark:bg-neko-dark-800 rounded-lg shadow-sm flex items-center justify-center text-neko-pink-600 dark:text-neko-pink-500 mb-5">
                <Laptop size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-neko-dark-900 dark:text-white">Asistencia Profesional</h3>
              <p className="text-neko-dark-600 dark:text-neko-dark-300">
                Aumenta tu productividad con ayuda para redactar correos, informes y presentaciones.
              </p>
            </div>

            {/* Case 2 */}
            <div className="bg-neko-pink-50 dark:bg-neko-dark-900 rounded-xl p-6 hover-lift">
              <div className="w-12 h-12 bg-white dark:bg-neko-dark-800 rounded-lg shadow-sm flex items-center justify-center text-neko-pink-600 dark:text-neko-pink-500 mb-5">
                <GraduationCap size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-neko-dark-900 dark:text-white">Educación</h3>
              <p className="text-neko-dark-600 dark:text-neko-dark-300">
                Aprende nuevos temas con explicaciones claras y adaptadas a tu nivel de conocimiento.
              </p>
            </div>

            {/* Case 3 */}
            <div className="bg-neko-pink-50 dark:bg-neko-dark-900 rounded-xl p-6 hover-lift">
              <div className="w-12 h-12 bg-white dark:bg-neko-dark-800 rounded-lg shadow-sm flex items-center justify-center text-neko-pink-600 dark:text-neko-pink-500 mb-5">
                <HeartHandshake size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-neko-dark-900 dark:text-white">Atención al Cliente</h3>
              <p className="text-neko-dark-600 dark:text-neko-dark-300">
                Proporciona soporte 24/7 a tus clientes con respuestas precisas y personalizadas.
              </p>
            </div>

            {/* Case 4 */}
            <div className="bg-neko-pink-50 dark:bg-neko-dark-900 rounded-xl p-6 hover-lift">
              <div className="w-12 h-12 bg-white dark:bg-neko-dark-800 rounded-lg shadow-sm flex items-center justify-center text-neko-pink-600 dark:text-neko-pink-500 mb-5">
                <FileText size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-neko-dark-900 dark:text-white">Creación de Contenido</h3>
              <p className="text-neko-dark-600 dark:text-neko-dark-300">
                Genera artículos, historias y contenido creativo para tus proyectos y redes sociales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-neko-pink-50/70 dark:bg-neko-dark-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="inline-block text-4xl font-bold mb-4 relative">
              Cómo <span className="text-gradient-neko">Funciona</span>
              <svg
                className="absolute -bottom-2 -z-10 w-full h-3 text-neko-pink-200 dark:text-neko-pink-800/50"
                viewBox="0 0 100 15"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,5 Q50,15 100,5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                />
              </svg>
            </h2>
            <p className="text-xl text-neko-dark-600 dark:text-neko-dark-300 max-w-2xl mx-auto">
              Descubre el proceso que hace de Aira un chatbot tan avanzado
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            {/* Step 1 */}
            <div className="bg-white dark:bg-neko-dark-950 rounded-2xl p-8 shadow-neko dark:shadow-none relative hover-lift max-w-xs w-full">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-neko-pink-600 text-white flex items-center justify-center font-bold text-lg">1</div>
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-neko-pink-100 dark:bg-neko-pink-900/30 flex items-center justify-center text-neko-pink-700 dark:text-neko-pink-400">
                  <MessageCircle size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-neko-dark-900 dark:text-white">Interacción</h3>
              <p className="text-center text-neko-dark-600 dark:text-neko-dark-300">
                Escribe tu pregunta o solicitud en el chat y Aira la procesa en tiempo real.
              </p>
            </div>

            <div className="hidden md:block">
              <ArrowRight className="h-8 w-8 text-neko-pink-300 dark:text-neko-pink-800" />
            </div>
            <div className="block md:hidden">
              <ArrowRight className="h-8 w-8 text-neko-pink-300 dark:text-neko-pink-800 rotate-90" />
            </div>

            {/* Step 2 */}
            <div className="bg-white dark:bg-neko-dark-950 rounded-2xl p-8 shadow-neko dark:shadow-none relative hover-lift max-w-xs w-full">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-neko-pink-600 text-white flex items-center justify-center font-bold text-lg">2</div>
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-neko-pink-100 dark:bg-neko-pink-900/30 flex items-center justify-center text-neko-pink-700 dark:text-neko-pink-400">
                  <BrainCircuit size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-neko-dark-900 dark:text-white">Procesamiento</h3>
              <p className="text-center text-neko-dark-600 dark:text-neko-dark-300">
                Los algoritmos de IA analizan el contenido, contexto e intención de tu mensaje.
              </p>
            </div>

            <div className="hidden md:block">
              <ArrowRight className="h-8 w-8 text-neko-pink-300 dark:text-neko-pink-800" />
            </div>
            <div className="block md:hidden">
              <ArrowRight className="h-8 w-8 text-neko-pink-300 dark:text-neko-pink-800 rotate-90" />
            </div>

            {/* Step 3 */}
            <div className="bg-white dark:bg-neko-dark-950 rounded-2xl p-8 shadow-neko dark:shadow-none relative hover-lift max-w-xs w-full">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-neko-pink-600 text-white flex items-center justify-center font-bold text-lg">3</div>
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-neko-pink-100 dark:bg-neko-pink-900/30 flex items-center justify-center text-neko-pink-700 dark:text-neko-pink-400">
                  <Sparkles size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-neko-dark-900 dark:text-white">Respuesta</h3>
              <p className="text-center text-neko-dark-600 dark:text-neko-dark-300">
                Aira genera una respuesta coherente, útil y personalizada a tu consulta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-white dark:bg-neko-dark-950">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
                Integración <span className="text-gradient-neko">Perfecta</span>
                <svg
                  className="absolute -bottom-2 -z-10 w-full h-3 text-neko-pink-200 dark:text-neko-pink-800/50"
                  viewBox="0 0 100 15"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,5 Q50,15 100,5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                </svg>
              </h2>
              <p className="text-lg text-neko-dark-600 dark:text-neko-dark-300 mb-8">
                Aira puede integrarse fácilmente en tus plataformas y flujos de trabajo existentes, permitiéndote aprovechar el poder de la IA donde más lo necesites.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-neko-pink-600" />
                  <span className="text-neko-dark-800 dark:text-neko-dark-200">Sitios web</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-neko-pink-600" />
                  <span className="text-neko-dark-800 dark:text-neko-dark-200">Aplicaciones móviles</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-neko-pink-600" />
                  <span className="text-neko-dark-800 dark:text-neko-dark-200">Plataformas de mensajería</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-neko-pink-600" />
                  <span className="text-neko-dark-800 dark:text-neko-dark-200">CRM y sistemas internos</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-neko-pink-600" />
                  <span className="text-neko-dark-800 dark:text-neko-dark-200">Redes sociales</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-neko-pink-600" />
                  <span className="text-neko-dark-800 dark:text-neko-dark-200">API personalizadas</span>
                </div>
              </div>

              <Link href="/integracion">
                <Button className="bg-gradient-neko hover:opacity-90 transition-opacity text-white shadow-neko dark:shadow-none font-medium">
                  Ver documentación de API
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-4">
              {/* Integration Icons */}
              {[
                { icon: <Layers size={30} />, name: "Websites" },
                { icon: <Smartphone size={30} />, name: "Apps" },
                { icon: <Mail size={30} />, name: "Email" },
                { icon: <Users size={30} />, name: "CRM" },
                { icon: <Share2 size={30} />, name: "Social" },
                { icon: <Code size={30} />, name: "API" },
                { icon: <Search size={30} />, name: "Search" },
                { icon: <MessageSquare size={30} />, name: "Chat" },
                { icon: <Lightbulb size={30} />, name: "Analytics" },
              ].map((item, index) => (
                <div key={index} className="bg-neko-pink-50 dark:bg-neko-dark-900 rounded-lg p-4 flex flex-col items-center justify-center hover-lift">
                  <div className="text-neko-pink-600 dark:text-neko-pink-400 mb-2">
                    {item.icon}
                  </div>
                  <p className="text-sm font-medium text-neko-dark-800 dark:text-neko-dark-200">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Planes Section */}
      <section className="py-20 md:py-32 bg-neko-pink-50/50 dark:bg-neko-dark-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="inline-block text-4xl font-bold mb-4 relative">
              Nuestros <span className="text-gradient-neko">Planes</span>
              <svg
                className="absolute -bottom-2 -z-10 w-full h-3 text-neko-pink-200 dark:text-neko-pink-800/50"
                viewBox="0 0 100 15"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,5 Q50,15 100,5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                />
              </svg>
            </h2>
            <p className="text-xl text-neko-dark-600 dark:text-neko-dark-300 max-w-2xl mx-auto">
              Elige el plan que mejor se adapte a tus necesidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan Básico */}
            <div className="relative group hover-scale">
              <div className="bg-white dark:bg-neko-dark-900 rounded-2xl border border-neko-pink-100 dark:border-neko-pink-900/50 shadow-neko dark:shadow-none overflow-hidden transition-all duration-300 h-full group-hover:shadow-neko-strong dark:group-hover:shadow-none">
                <div className="p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-neko-dark-900 dark:text-white">Personal</h3>
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-700 dark:text-blue-400">
                      <MessageCircle size={20} />
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-neko-dark-600 dark:text-neko-dark-300 mb-6">Ideal para uso individual y proyectos personales.</p>
                    <div className="flex items-end mb-2">
                      <span className="text-4xl font-bold text-neko-dark-900 dark:text-white">Gratis</span>
                    </div>
                    <p className="text-neko-dark-500 dark:text-neko-dark-400 text-sm">Para siempre</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center text-neko-dark-600 dark:text-neko-dark-300">
                      <Check className="w-5 h-5 mr-2 text-green-500" />
                      100 mensajes por día
                    </li>
                    <li className="flex items-center text-neko-dark-600 dark:text-neko-dark-300">
                      <Check className="w-5 h-5 mr-2 text-green-500" />
                      Funcionalidades básicas
                    </li>
                    <li className="flex items-center text-neko-dark-600 dark:text-neko-dark-300">
                      <Check className="w-5 h-5 mr-2 text-green-500" />
                      Soporte comunitario
                    </li>
                    <li className="flex items-center text-neko-dark-500 dark:text-neko-dark-400 opacity-50">
                      <X className="w-5 h-5 mr-2 text-neko-dark-400" />
                      Sin análisis avanzado
                    </li>
                  </ul>

                  <Link href="/registro" className="block">
                    <Button variant="outline" className="w-full border-neko-pink-300 dark:border-neko-pink-800 text-neko-dark-800 dark:text-neko-dark-200 hover:bg-neko-pink-50 dark:hover:bg-neko-pink-950/30">
                      Comenzar gratis
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Plan Pro */}
            <div className="relative group hover-scale">
              <div className="absolute -inset-[1px] bg-gradient-to-r from-neko-pink-600 to-neko-amber-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white dark:bg-neko-dark-900 rounded-2xl border border-neko-pink-200 dark:border-neko-pink-800/50 shadow-neko-strong dark:shadow-none overflow-hidden transition-all duration-300 h-full">
                <div className="absolute top-0 left-0 right-0 bg-gradient-neko text-white text-center py-1 text-sm font-medium">
                  Recomendado
                </div>

                <div className="p-8 pt-12">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-neko-dark-900 dark:text-white">Profesional</h3>
                    <div className="w-10 h-10 rounded-full bg-neko-amber-100 dark:bg-neko-amber-900/30 flex items-center justify-center text-neko-amber-700 dark:text-neko-amber-400">
                      <BarChart size={20} />
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-neko-dark-600 dark:text-neko-dark-300 mb-6">Para profesionales y pequeñas empresas.</p>
                    <div className="flex items-end mb-2">
                      <span className="text-4xl font-bold text-neko-dark-900 dark:text-white">$9.99</span>
                      <span className="text-neko-dark-600 dark:text-neko-dark-300 ml-1">/mes</span>
                    </div>
                    <p className="text-neko-dark-500 dark:text-neko-dark-400 text-sm">Facturado anualmente o $14.99/mes</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center text-neko-dark-600 dark:text-neko-dark-300">
                      <Check className="w-5 h-5 mr-2 text-green-500" />
                      Mensajes ilimitados
                    </li>
                    <li className="flex items-center text-neko-dark-600 dark:text-neko-dark-300">
                      <Check className="w-5 h-5 mr-2 text-green-500" />
                      Todas las funcionalidades
                    </li>
                    <li className="flex items-center text-neko-dark-600 dark:text-neko-dark-300">
                      <Check className="w-5 h-5 mr-2 text-green-500" />
                      Soporte por email prioritario
                    </li>
                    <li className="flex items-center text-neko-dark-600 dark:text-neko-dark-300">
                      <Check className="w-5 h-5 mr-2 text-green-500" />
                      Análisis e informes mensuales
                    </li>
                  </ul>

                  <Link href="/registro" className="block">
                    <Button className="w-full bg-gradient-neko hover:opacity-90 transition-opacity text-white shadow-neko dark:shadow-none font-medium">
                      Suscribirse
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Plan Enterprise */}
            <div className="relative group hover-scale">
              <div className="bg-white dark:bg-neko-dark-900 rounded-2xl border border-neko-pink-100 dark:border-neko-pink-900/50 shadow-neko dark:shadow-none overflow-hidden transition-all duration-300 h-full group-hover:shadow-neko-strong dark:group-hover:shadow-none">
                <div className="p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-neko-dark-900 dark:text-white">Empresarial</h3>
                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-700 dark:text-purple-400">
                      <Shield size={20} />
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-neko-dark-600 dark:text-neko-dark-300 mb-6">Para grandes empresas con necesidades específicas.</p>
                    <div className="flex items-end mb-2">
                      <span className="text-4xl font-bold text-neko-dark-900 dark:text-white">Personalizado</span>
                    </div>
                    <p className="text-neko-dark-500 dark:text-neko-dark-400 text-sm">Contacta para más detalles</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center text-neko-dark-600 dark:text-neko-dark-300">
                      <Check className="w-5 h-5 mr-2 text-green-500" />
                      Uso ilimitado y escalable
                    </li>
                    <li className="flex items-center text-neko-dark-600 dark:text-neko-dark-300">
                      <Check className="w-5 h-5 mr-2 text-green-500" />
                      Personalización completa
                    </li>
                    <li className="flex items-center text-neko-dark-600 dark:text-neko-dark-300">
                      <Check className="w-5 h-5 mr-2 text-green-500" />
                      API dedicada y privada
                    </li>
                    <li className="flex items-center text-neko-dark-600 dark:text-neko-dark-300">
                      <Check className="w-5 h-5 mr-2 text-green-500" />
                      Soporte 24/7 con SLA garantizado
                    </li>
                  </ul>

                  <Link href="/contacto" className="block">
                    <Button variant="outline" className="w-full border-neko-pink-300 dark:border-neko-pink-800 text-neko-dark-800 dark:text-neko-dark-200 hover:bg-neko-pink-50 dark:hover:bg-neko-pink-950/30">
                      Contactar ventas
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Plan comparison */}
          <div className="mt-12 text-center">
            <Link href="/comparativa-planes">
              <span className="text-neko-pink-700 dark:text-neko-pink-400 hover:underline inline-flex items-center">
                Ver comparativa completa de planes
                <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-neko-dark-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="inline-block text-4xl font-bold mb-4 relative">
              Preguntas <span className="text-gradient-neko">Frecuentes</span>
              <svg
                className="absolute -bottom-2 -z-10 w-full h-3 text-neko-pink-200 dark:text-neko-pink-800/50"
                viewBox="0 0 100 15"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,5 Q50,15 100,5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                />
              </svg>
            </h2>
            <p className="text-xl text-neko-dark-600 dark:text-neko-dark-300 max-w-2xl mx-auto">
              Respuestas a las dudas más comunes sobre Aira
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* FAQ Item 1 */}
            <div className="bg-neko-pink-50 dark:bg-neko-dark-900 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-neko-dark-900 dark:text-white">¿Qué tipo de preguntas puede responder Aira?</h3>
              <p className="text-neko-dark-600 dark:text-neko-dark-300">
                Aira puede responder a una amplia variedad de preguntas, desde consultas generales de conocimiento hasta análisis detallados de temas específicos, asistencia en programación, creación de contenido, y mucho más.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-neko-pink-50 dark:bg-neko-dark-900 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-neko-dark-900 dark:text-white">¿Es segura mi información?</h3>
              <p className="text-neko-dark-600 dark:text-neko-dark-300">
                Absolutamente. La privacidad y seguridad son prioridades para nosotros. Toda la comunicación está encriptada y no almacenamos tus conversaciones a menos que lo solicites explícitamente para entrenamiento o mejora del servicio.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-neko-pink-50 dark:bg-neko-dark-900 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-neko-dark-900 dark:text-white">¿Cómo puedo integrar Aira en mi sitio web?</h3>
              <p className="text-neko-dark-600 dark:text-neko-dark-300">
                Ofrecemos múltiples opciones de integración, desde widgets simples hasta API completas. Nuestros planes Profesional y Empresarial incluyen herramientas de integración y soporte técnico para ayudarte a implementar Aira en tu plataforma.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-neko-pink-50 dark:bg-neko-dark-900 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-neko-dark-900 dark:text-white">¿Aira aprende de mis interacciones?</h3>
              <p className="text-neko-dark-600 dark:text-neko-dark-300">
                Sí, Aira está diseñada para aprender de las interacciones y adaptarse a tus necesidades específicas. Con el tiempo, las respuestas serán más personalizadas y relevantes para tu contexto particular.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/faq">
              <Button variant="outline" className="border-neko-pink-300 dark:border-neko-pink-800 text-neko-dark-800 dark:text-neko-dark-200 hover:bg-neko-pink-50 dark:hover:bg-neko-pink-950/30">
                Ver todas las preguntas frecuentes
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-neko-pink-50 dark:bg-neko-dark-900">
        <div className="container mx-auto px-6">
          <div className="bg-white dark:bg-neko-dark-950 rounded-3xl p-10 md:p-16 shadow-neko-strong dark:shadow-none relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-neko-pink-100/50 to-transparent dark:from-neko-pink-900/10 dark:to-transparent"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-neko-pink-100 dark:bg-neko-pink-900/20 rounded-full opacity-50 blur-3xl"></div>

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="md:max-w-lg">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neko-dark-900 dark:text-white">
                  ¿Listo para comenzar<br />con <span className="text-gradient-neko">Aira</span>?
                </h2>
                <p className="text-lg text-neko-dark-600 dark:text-neko-dark-300 mb-8">
                  Registrate ahora y descubre todo el potencial de nuestro chatbot inteligente. Transforma la manera en que interactúas con la tecnología.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/registro">
                    <Button className="px-6 py-6 bg-gradient-neko hover:opacity-90 transition-opacity text-white shadow-neko dark:shadow-none font-medium">
                      Crear cuenta gratis
                    </Button>
                  </Link>
                  <Link href="/demo">
                    <Button variant="outline" className="px-6 py-6 border-neko-pink-300 dark:border-neko-pink-800 text-neko-dark-800 dark:text-neko-dark-200 hover:bg-neko-pink-50 dark:hover:bg-neko-pink-950/30">
                      Probar demo
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="w-full md:w-auto flex-shrink-0">
                <div className="relative w-56 h-56 mx-auto">
                  <div className="absolute inset-0 bg-gradient-neko rounded-full opacity-20 animate-blob blur-xl"></div>
                  <div className="absolute inset-4 bg-white dark:bg-neko-dark-900 rounded-full shadow-neko dark:shadow-none flex items-center justify-center">
                    <div className="w-28 h-28 bg-gradient-neko-light dark:bg-gradient-neko rounded-full flex items-center justify-center">
                      <Bot className="h-14 w-14 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white dark:bg-neko-dark-950 border-t border-neko-pink-100 dark:border-neko-dark-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/" className="font-bold text-2xl inline-block mb-4">
                <span className="text-gradient-neko">Aira</span>
                <span className="text-neko-dark-900 dark:text-white">Bot</span>
              </Link>
              <p className="text-sm text-neko-dark-600 dark:text-neko-dark-300 mb-4">
                Un chatbot avanzado con inteligencia artificial para potenciar tus conversaciones.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-neko-dark-400 hover:text-neko-pink-600 dark:text-neko-dark-500 dark:hover:text-neko-pink-400">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="text-neko-dark-400 hover:text-neko-pink-600 dark:text-neko-dark-500 dark:hover:text-neko-pink-400">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="text-neko-dark-400 hover:text-neko-pink-600 dark:text-neko-dark-500 dark:hover:text-neko-pink-400">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="text-neko-dark-400 hover:text-neko-pink-600 dark:text-neko-dark-500 dark:hover:text-neko-pink-400">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-neko-dark-900 dark:text-white">Producto</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/caracteristicas" className="text-neko-dark-600 dark:text-neko-dark-300 hover:text-neko-pink-700 dark:hover:text-neko-pink-400">
                    Características
                  </Link>
                </li>
                <li>
                  <Link href="/planes" className="text-neko-dark-600 dark:text-neko-dark-300 hover:text-neko-pink-700 dark:hover:text-neko-pink-400">
                    Planes
                  </Link>
                </li>
                <li>
                  <Link href="/integracion" className="text-neko-dark-600 dark:text-neko-dark-300 hover:text-neko-pink-700 dark:hover:text-neko-pink-400">
                    Integración
                  </Link>
                </li>
                <li>
                  <Link href="/casos-uso" className="text-neko-dark-600 dark:text-neko-dark-300 hover:text-neko-pink-700 dark:hover:text-neko-pink-400">
                    Casos de uso
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-neko-dark-900 dark:text-white">Recursos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/documentacion" className="text-neko-dark-600 dark:text-neko-dark-300 hover:text-neko-pink-700 dark:hover:text-neko-pink-400">
                    Documentación
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-neko-dark-600 dark:text-neko-dark-300 hover:text-neko-pink-700 dark:hover:text-neko-pink-400">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/guias" className="text-neko-dark-600 dark:text-neko-dark-300 hover:text-neko-pink-700 dark:hover:text-neko-pink-400">
                    Guías
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-neko-dark-600 dark:text-neko-dark-300 hover:text-neko-pink-700 dark:hover:text-neko-pink-400">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-neko-dark-900 dark:text-white">Empresa</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/nosotros" className="text-neko-dark-600 dark:text-neko-dark-300 hover:text-neko-pink-700 dark:hover:text-neko-pink-400">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="text-neko-dark-600 dark:text-neko-dark-300 hover:text-neko-pink-700 dark:hover:text-neko-pink-400">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="/privacidad" className="text-neko-dark-600 dark:text-neko-dark-300 hover:text-neko-pink-700 dark:hover:text-neko-pink-400">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/terminos" className="text-neko-dark-600 dark:text-neko-dark-300 hover:text-neko-pink-700 dark:hover:text-neko-pink-400">
                    Términos
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-neko-pink-100 dark:border-neko-dark-800 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-neko-dark-600 dark:text-neko-dark-300 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Aira Chatbot. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6">
              <Link href="/privacidad" className="text-sm text-neko-dark-600 dark:text-neko-dark-300 hover:text-neko-pink-700 dark:hover:text-neko-pink-400">
                Política de Privacidad
              </Link>
              <Link href="/terminos" className="text-sm text-neko-dark-600 dark:text-neko-dark-300 hover:text-neko-pink-700 dark:hover:text-neko-pink-400">
                Términos de Servicio
              </Link>
              <Link href="/cookies" className="text-sm text-neko-dark-600 dark:text-neko-dark-300 hover:text-neko-pink-700 dark:hover:text-neko-pink-400">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
