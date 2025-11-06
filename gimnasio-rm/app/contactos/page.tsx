"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Instagram, MapPin, Phone, Menu, X, Dumbbell } from "lucide-react";

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

  // --- Datos para los servicios ---
  const servicios = [
    {
      id: 1,
      nombre: "Entrenamiento Personalizado",
      descripcion:
        "Rutinas diseñadas para alcanzar tus objetivos con seguimiento individual.",
    },
    {
      id: 2,
      nombre: "Clases Grupales",
      descripcion:
        "Zumba, CrossFit, Funcional y más. ¡Entrená en grupo y mantenete motivado!",
    },
    {
      id: 3,
      nombre: "Asesoramiento Nutricional",
      descripcion:
        "Planes de alimentación saludables para acompañar tu entrenamiento.",
    },
  ];

  const telefonoGym = "5491158800461"; // WhatsApp RM

  const generarMensaje = (servicio) => {
    const mensaje = `¡Hola! Quiero asociarme al gimnasio y estoy interesado en el servicio: ${servicio.nombre}.

Mis datos son:
Nombre: 
Apellido: 
Número telefónico: 
Servicio que deseo: ${servicio.nombre}
Disponibilidad: 

¡Gracias! 💪`;
    return encodeURIComponent(mensaje);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#181b2e] text-white border-[#ff0066]">
      {/* Header */}
      <header className="bg-[#181b2e] px-6 py-6 flex items-center justify-end relative border-b border-[#ff0066]">
        <div className="absolute left-1/2 -translate-x-1/2 text-center">
          <h1 className="text-[#ff0066] text-5xl font-bold leading-none">RM</h1>
          <p className="text-[#ff0066] text-xl font-medium tracking-wide">
            training
          </p>
        </div>

        <div className="flex items-center gap-4 relative">
          <button
            className="text-white hover:text-[#ff0066] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>

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

      {/* Contenido principal */}
      <main className="flex-1 relative flex flex-col items-center justify-center px-4 py-12 text-center">
        <div className="absolute inset-0">
          
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center space-y-10 max-w-md w-full">
          <div className="text-center space-y-2 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#ff0066] drop-shadow-lg tracking-wide">
              CONTACTOS
            </h2>
            <p className="text-gray-200 text-lg md:text-xl">
              Conectate con nosotros y entrená con energía 💪
            </p>
          </div>

          <a
            href="https://www.instagram.com/rm.training_/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white text-[#181b2e] hover:bg-[#ff0066] hover:text-white transition-colors p-4 rounded-2xl w-full justify-center shadow-lg"
          >
            <Instagram className="w-8 h-8" />
            <span className="text-lg font-medium">@rm.training_</span>
          </a>

          <a
            href="https://wa.me/5491158800461"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white text-[#181b2e] hover:bg-[#ff0066] hover:text-white transition-colors p-4 rounded-2xl w-full justify-center shadow-lg"
          >
            <Phone className="w-8 h-8" />
            <span className="text-lg font-medium">+54 9 11 5880-0461</span>
          </a>

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

      {/* 🧩 Sección de Servicios y Asociación */}
      <section className="bg-[#1f2238] py-16 px-6 text-center border-t border-[#ff0066]/30">
        <h2 className="text-4xl font-bold mb-10 text-[#ff0066] flex items-center justify-center gap-2">
          <Dumbbell /> Servicios y Asociación
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {servicios.map((servicio) => (
            <div
              key={servicio.id}
              className="bg-white text-[#181b2e] shadow-md rounded-2xl p-6 hover:shadow-[#ff0066]/40 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-[#ff0066]">
                {servicio.nombre}
              </h3>
              <p className="text-gray-700 mb-6">{servicio.descripcion}</p>

              <Link
                href={`https://wa.me/${telefonoGym}?text=${generarMensaje(servicio)}`}
                target="_blank"
                className="bg-[#25D366] hover:bg-[#1ebe5d] text-white font-medium py-2 rounded-lg flex items-center justify-center gap-2"
              >
                <Phone size={18} /> Asociarme por WhatsApp
              </Link>
            </div>
          ))}
        </div>
      </section>

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
