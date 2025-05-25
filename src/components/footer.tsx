"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Bot,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  ArrowRight,
  Heart,
} from "lucide-react";

const footerLinks = {
  product: [
    { name: "Características", href: "/features" },
    { name: "Precios", href: "/pricing" },
    { name: "API", href: "/api-docs" },
    { name: "Integraciones", href: "/integrations" },
  ],
  company: [
    { name: "Sobre Nosotros", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contacto", href: "/contact" },
    { name: "Carreras", href: "/careers" },
  ],
  resources: [
    { name: "Documentación", href: "/docs" },
    { name: "Soporte", href: "/support" },
    { name: "FAQ", href: "/faq" },
    { name: "Centro de Ayuda", href: "/help" },
  ],
  legal: [
    { name: "Privacidad", href: "/privacy" },
    { name: "Términos", href: "/terms" },
    { name: "Cookies", href: "/cookies" },
    { name: "GDPR", href: "/gdpr" },
  ],
};

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/aira" },
  { name: "Github", icon: Github, href: "https://github.com/aira" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/aira" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/aira" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/aira" },
];

export function Footer() {
  const [email, setEmail] = React.useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-gradient-to-br from-background via-accent/5 to-background border-t border-border/50">
      <div className="container-custom">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-border/50">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4">
              Mantente al día con <span className="gradient-text">Aira</span>
            </h3>
            <p className="text-muted-foreground mb-8">
              Recibe las últimas noticias, actualizaciones y consejos directamente en tu bandeja de entrada.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="tu@empresa.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-full flex-1"
                required
              />
              <Button
                type="submit"
                className="gradient-primary text-white rounded-full px-6 button-modern hover-glow group"
              >
                Suscribirse
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Link href="/" className="flex items-center space-x-2 mb-4">
                  <div className="gradient-primary p-2 rounded-xl">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <span className="gradient-text text-xl font-bold">Aira</span>
                    <p className="text-xs text-muted-foreground">AI Assistant</p>
                  </div>
                </Link>
                <p className="text-muted-foreground mb-6 max-w-sm">
                  Transformamos la manera en que las empresas interactúan con sus clientes a través de
                  inteligencia artificial conversacional avanzada.
                </p>

                {/* Contact Info */}
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>hello@aira.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Product Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4">Producto</h4>
              <ul className="space-y-2">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              className="flex items-center space-x-2 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span>© 2024 Aira. Hecho con</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>en San Francisco.</span>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-accent/50 hover:bg-primary/20 flex items-center justify-center transition-colors group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
