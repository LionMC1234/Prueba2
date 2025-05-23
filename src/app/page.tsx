"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Chat } from "@/components/chat";
import { ChatInput } from "@/components/chat-input";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const initialMessages: Message[] = [];

export default function Home() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessageId, setLoadingMessageId] = useState<string | null>(null);
  const [typedChars, setTypedChars] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [fullResponse, setFullResponse] = useState("");

  // Simulated AI typing effect
  useEffect(() => {
    if (loadingMessageId && !isTypingComplete) {
      if (typedChars < fullResponse.length) {
        const timer = setTimeout(() => {
          setTypedChars(prev => prev + 1);
        }, 25); // Adjust speed as needed
        return () => clearTimeout(timer);
      } else {
        setIsTypingComplete(true);
        setIsLoading(false);
      }
    }
  }, [loadingMessageId, typedChars, fullResponse, isTypingComplete]);

  const handleSendMessage = (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content,
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Define assistant responses based on patterns in user message
    let assistantResponse = "";

    if (content.toLowerCase().includes("resume")) {
      assistantResponse = "He resumido el texto solicitado:\n\nLa inteligencia artificial es una rama informática que desarrolla sistemas que emulan la inteligencia humana, abarcando aprendizaje, razonamiento, resolución de problemas y comprensión del lenguaje natural.";
    } else if (content.toLowerCase().includes("propón") || content.toLowerCase().includes("ideas")) {
      assistantResponse = "Aquí tienes 5 ideas para mejorar la productividad en el trabajo:\n\n1. Implementa la técnica Pomodoro: 25 minutos de trabajo seguidos de 5 minutos de descanso.\n2. Establece prioridades claras al inicio de cada día.\n3. Minimiza las distracciones digitales desactivando notificaciones.\n4. Utiliza herramientas de gestión de tareas como Trello o Asana.\n5. Dedica bloques específicos de tiempo para revisar correos electrónicos.";
    } else if (content.toLowerCase().includes("código") || content.toLowerCase().includes("javascript")) {
      assistantResponse = "Aquí tienes un código en JavaScript para calcular el factorial de un número:\n\n```javascript\nfunction factorial(n) {\n  if (n === 0 || n === 1) {\n    return 1;\n  } else {\n    return n * factorial(n - 1);\n  }\n}\n\n// Ejemplo de uso\nconst numero = 5;\nconsole.log(`El factorial de ${numero} es ${factorial(numero)}`);\n// Resultado: El factorial de 5 es 120\n```";
    } else if (content.toLowerCase().includes("sorpréndeme") || content.toLowerCase().includes("dato") || content.toLowerCase().includes("curioso")) {
      assistantResponse = "¡Aquí tienes un dato curioso sobre el universo!\n\nLa luz tarda aproximadamente 8 minutos y 20 segundos en viajar desde el Sol hasta la Tierra. Esto significa que cuando miras al Sol (aunque no deberías hacerlo directamente), en realidad lo estás viendo tal como era hace más de 8 minutos. Si el Sol desapareciera repentinamente, no lo sabríamos hasta 8 minutos después.";
    } else {
      assistantResponse = "¡Hola! Soy ChatGPT, un modelo de inteligencia artificial creado por OpenAI. Estoy aquí para ayudarte a responder preguntas, escribir textos, resolver problemas, aprender cosas nuevas o simplemente conversar. ¿En qué te gustaría que te ayudara hoy?";
    }

    // Store the full response for typing effect
    setFullResponse(assistantResponse);

    setTimeout(() => {
      const assistantMessageId = `assistant-${Date.now() + 1}`;
      const assistantMessage: Message = {
        id: assistantMessageId,
        role: "assistant",
        content: "", // Start with empty content for typing effect
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setLoadingMessageId(assistantMessageId);
      setTypedChars(0);
      setIsTypingComplete(false);
    }, 1000);
  };

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <div className="flex flex-1 flex-col pt-16">
        <Chat
          messages={messages.map((msg) => {
            if (msg.id === loadingMessageId && !isTypingComplete) {
              return {
                ...msg,
                content: fullResponse.substring(0, typedChars) + (isLoading ? "▋" : ""),
              };
            }
            return msg;
          })}
        />
        <ChatInput onSend={handleSendMessage} />
      </div>
    </main>
  );
}
