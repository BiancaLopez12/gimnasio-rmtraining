"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, User } from "lucide-react";

export default function RMTrainingPage() {
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
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#181b2e] px-6 py-2 flex items-center justify-between relative">
        {/* Center Logo */}
        <div className="text-center">
          <div className="text-[#ef4444] font-bold text-6xl tracking-wider">
            RM
          </div>
          <div className="text-[#ef4444] font-semibold text-2xl tracking-widest">
            training
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4 relative">
          <button
            className="text-white hover:text-[#ff0066] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu className="w-10 h-10" strokeWidth={3} />
          </button>

          {/* Menú desplegable */}
          {menuOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-[#181b2e] rounded-lg shadow-lg z-20 flex flex-col">
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

      {/* Main Content Area con imagen de fondo */}
      <main className="relative flex-1 px-12 py-12">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/imagenfondorm.svg"
            alt="Modern gym interior with treadmills and weight equipment"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Título */}
        <h1 className="text-center text-5xl font-light tracking-[0.3em] mb-16 text-white relative z-10">
          HORARIOS Y CLASES
        </h1>

        {/* Grid of Cards */}
        <div className="grid grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
          {/* Card 1 - Maquinas */}
          <div className="bg-[#d9d9d9] p-6 shadow-lg">
            <div className="aspect-[4/3] mb-4 overflow-hidden">
              <img
                src="/people-doing-push-ups-in-gym.jpg"
                alt="Maquinas class"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1 text-[#1e1e1e]">
              MAQUINAS
            </h3>
            <p className="text-sm text-[#1e1e1e]">Lunes, miercoles y viernes</p>
          </div>

          {/* Card 2 - Funcional */}
          <div className="bg-[#d9d9d9] p-6 shadow-lg">
            <div className="aspect-[4/3] mb-4 overflow-hidden">
              <img
                src="/people-training-on-gym-machines.jpg"
                alt="Funcional class"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1 text-[#1e1e1e]">
              FUNCIONAL
            </h3>
            <p className="text-sm text-[#1e1e1e]">Martes y jueves</p>
          </div>

          {/* Card 3 - Maquinas */}
          <div className="bg-[#d9d9d9] p-6 shadow-lg">
            <div className="aspect-[4/3] mb-4 overflow-hidden">
              <img
                src="/people-doing-push-ups-in-gym.jpg"
                alt="Maquinas class"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1 text-[#1e1e1e]">
              MAQUINAS
            </h3>
            <p className="text-sm text-[#1e1e1e]">Lunes, miercoles y viernes</p>
          </div>

          {/* Card 4 - Funcional */}
          <div className="bg-[#d9d9d9] p-6 shadow-lg">
            <div className="aspect-[4/3] mb-4 overflow-hidden">
              <img
                src="/people-training-on-gym-machines.jpg"
                alt="Funcional class"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1 text-[#1e1e1e]">
              FUNCIONAL
            </h3>
            <p className="text-sm text-[#1e1e1e]">Martes y jueves</p>
          </div>

          {/* Card 5 - Maquinas */}
          <div className="bg-[#d9d9d9] p-6 shadow-lg">
            <div className="aspect-[4/3] mb-4 overflow-hidden">
              <img
                src="/people-doing-push-ups-in-gym.jpg"
                alt="Maquinas class"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1 text-[#1e1e1e]">
              MAQUINAS
            </h3>
            <p className="text-sm text-[#1e1e1e]">Lunes, miercoles y viernes</p>
          </div>

          {/* Card 6 - Funcional */}
          <div className="bg-[#d9d9d9] p-6 shadow-lg">
            <div className="aspect-[4/3] mb-4 overflow-hidden">
              <img
                src="/people-training-on-gym-machines.jpg"
                alt="Funcional class"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1 text-[#1e1e1e]">
              FUNCIONAL
            </h3>
            <p className="text-sm text-[#1e1e1e]">Martes y jueves</p>
          </div>
        </div>
      </main>
    </div>
  );
}
