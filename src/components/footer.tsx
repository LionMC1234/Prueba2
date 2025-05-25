"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Bot,
  Twitter,
  Github,
  Linkedin,
  Facebook,
  Instagram,
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

const footerSections = [
  {
    title: "Producto",
    links: footerLinks.product,
  },
  {
    title: "Empresa",
    links: footerLinks.company,
  },
  {
    title: "Recursos",
    links: footerLinks.resources,
  },
];

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-accent/20 to-background border-t border-border/50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />
      </div>

      <div className="container-custom relative">
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="flex items-center space-x-2 mb-6 group">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 gradient-primary rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                  <div className="relative gradient-primary p-3 rounded-xl button-bounce">
                    <Bot className="h-7 w-7 text-white icon-hover" />
                  </div>
                </motion.div>
                <div className="flex flex-col">
                  <span className="gradient-text text-2xl font-bold hover:scale-105 transition-transform duration-200">Aira</span>
                  <span className="text-sm text-muted-foreground">AI Assistant</span>
                </div>
              </Link>
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                Revolucionando la conversación digital con inteligencia artificial avanzada.
                Construyendo el futuro de la interacción humano-IA, una conversación a la vez.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="glass p-3 rounded-full hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors icon-hover" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (sectionIndex + 1) * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold mb-6 text-foreground hover:text-primary transition-colors duration-200 cursor-pointer">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: linkIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm leading-relaxed hover-lift inline-block"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-border/30 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <motion.p
                className="text-sm text-muted-foreground"
                whileHover={{ scale: 1.05 }}
              >
                © 2024 Aira. Todos los derechos reservados.
              </motion.p>
              <div className="flex space-x-6">
                {[
                  { href: "/privacy", label: "Privacidad" },
                  { href: "/terms", label: "Términos" },
                  { href: "/cookies", label: "Cookies" }
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors hover-lift"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              className="flex items-center space-x-2 text-sm text-muted-foreground"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span>Hecho con</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>usando IA</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
