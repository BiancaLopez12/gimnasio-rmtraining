"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Instagram, MapPin, Phone, Menu, X } from "lucide-react";

export default function ContactosPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const screens = [
    { name: "Inicio", route: "/inicio" },
    { name: "Contactos", route: "/contactos" },
    { name: "Sobre Nosotros", route: "/sobrenosotros" },
    { name: "Horarios Y Clases", route: "/horarios" },
    { name: "Rutinas", route: "/rutinas" },
    { name: "Merchandising", route: "/merchandising" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#181b2e] text-white">
      {/* Header */}
      <header className="bg-[#181b2e] px-6 py-4 flex items-center justify-between relative border-b border-[#ff0066]">
        {/* Center Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 text-center">
          <h1 className="text-[#ff0066] text-5xl font-bold leading-none">RM</h1>
          <p className="text-[#ff0066] text-xl font-medium tracking-wide">
            training
          </p>
        </div>

        {/* Left Menu Icon */}
        <div className="flex items-center gap-4 relative">
          <button
            className="text-white hover:text-[#ff0066] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>

          {/* Menú desplegable desde la izquierda */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-[#181b2e] rounded-lg shadow-lg z-20 flex flex-col">
              {screens.map((screen, index) => (
                <Link key={index} href={screen.route}>
                  <button
                    className="w-full px-4 py-3 text-left text-white hover:bg-[#837a88]/50 border-b border-[#837a88]/20 last:border-b-0"
                    onClick={() => setMenuOpen(false)}
                  >
                    {screen.name}
                  </button>
                </Link>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Contenido principal con imagen de fondo */}
      <main className="flex-1 relative flex flex-col items-center justify-center px-4 py-12 text-center">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <Image
            src="/imagenfondorm.svg"
            alt="Modern gym interior with treadmills and weight equipment"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Contenido encima de la imagen */}
        <div className="relative z-10 flex flex-col items-center space-y-8 max-w-md w-full">
          <div className="w-24 h-24 relative">
            <Image
              src="/red-and-black-circular-gym-logo-with-rm-letters.jpg"
              alt=""
              width={96}
              height={96}
              className="object-contain"
            />
          </div>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/rm.training_/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white text-[#181b2e] hover:bg-[#ff0066] hover:text-white transition-colors p-4 rounded-2xl w-full justify-center shadow-lg"
          >
            <Instagram className="w-8 h-8" />
            <span className="text-lg font-medium">@rm.training_</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/5491158800461"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white text-[#181b2e] hover:bg-[#ff0066] hover:text-white transition-colors p-4 rounded-2xl w-full justify-center shadow-lg"
          >
            <Phone className="w-8 h-8" />
            <span className="text-lg font-medium">+54 9 11 5880-0461</span>
          </a>

          {/* Ubicación */}
          <a
            href="https://maps.app.goo.gl/VA2cKcfZBMUsLiP89"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white text-[#181b2e] hover:bg-[#ff0066] hover:text-white transition-colors p-4 rounded-2xl w-full justify-center shadow-lg"
          >
            <MapPin className="w-8 h-8" />
            <span className="text-lg font-medium">
              Ver ubicación en Google Maps
            </span>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#181b2e] text-center text-sm py-4 border-t border-[#ff0066]">
        <p className="text-gray-400">
          © {new Date().getFullYear()} RM Training. Todos los derechos
          reservados.
        </p>
      </footer>
    </div>
  );
}
