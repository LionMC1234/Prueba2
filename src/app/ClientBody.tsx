"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Mantener clases importantes durante la hidratación
  useEffect(() => {
    // Esto se ejecuta solo en el cliente después de la hidratación
    const htmlClasses = document.documentElement.className;
    // Preservar clases de tema (dark/light) y de fuentes
    const preservedClasses = htmlClasses
      .split(" ")
      .filter(
        (cls) =>
          cls.includes("--font-") || cls === "dark" || cls === "light"
      )
      .join(" ");

    document.body.className = `antialiased ${preservedClasses}`;
  }, []);

  return <>{children}</>;
}
