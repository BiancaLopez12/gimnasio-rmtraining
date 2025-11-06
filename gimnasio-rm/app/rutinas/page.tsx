"use client";
import { Menu, User, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RMTrainingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const screens = [
    { name: "Inicio", route: "/inicio" },
    { name: "Contactos", route: "/contactos" },
    { name: "Sobre Nosotros", route: "/sobrenosotros" },
    { name: "Horarios Y Clases", route: "/horarios" },
    { name: "Rutinas", route: "/rutinas" },
    { name: "Merchandising", route: "/merchandising" },
  ];

  // PLANES FICTICIOS
  const plans = [
    {
      title: "Full Body en Casa",
      desc: "Entrenamiento completo de cuerpo en casa sin equipamiento. Ideal para principiantes o quienes buscan mantenerse activos.",
    },
    {
      title: "Funcional Avanzado",
      desc: "Rutina exigente con ejercicios funcionales, ideal para quienes buscan mejorar fuerza, agilidad y resistencia.",
    },
    {
      title: "HIIT Express",
      desc: "Sesiones de alta intensidad en solo 20 minutos. Perfecto para quienes tienen poco tiempo y quieren resultados rápidos.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#181b2e] ">
      {/* Header */}
      <header className="bg-[#181b2e] px-6 py- flex items-center justify-end relative border-b border-[#ff0066] ">
        <div className="flex items-center border-[#ff0066]">
          <div className="w-24 h-24 relative">
           
          </div>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 ">
          <div className="text-center ">
            <h1 className="text-[#ff0066] text-5xl font-bold tracking-tight leading-none">
              RM
            </h1>
            <p className="text-[#ff0066] text-xl font-medium tracking-wide">
              training
            </p>
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-6 relative">
          <button className="text-white hover:text-[#ff0066] transition-colors">
            
          </button>
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

      {/* Main Content */}
      <main className="flex-1 relative px-8 py-12 text-[#ff0066]">
        <h2 className="text-center text-5xl font-light tracking-[0.3em] mb-12 text-ff0066 font-semibold">
          RUTINAS
        </h2>

        {/* UNA FILA CON TRES COLUMNAS */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#d9d9d9] p-6 shadow-lg rounded-lg">
            <Image
              src="/group-of-people-doing-push-up-exercises-in-gym.jpg"
              alt="Group workout"
              width={600}
              height={400}
              className="object-cover rounded w-full h-auto"
            />
          </div>
          <div className="bg-[#d9d9d9] p-6 shadow-lg rounded-lg">
            <Image
              src="/people-using-weight-training-machines-in-gym.jpg"
              alt="Weight training"
              width={600}
              height={400}
              className="object-cover rounded w-full h-auto"
            />
          </div>
          <div className="bg-[#d9d9d9] p-6 shadow-lg rounded-lg">
            <Image
              src="/group-of-people-doing-push-up-exercises-in-gym.jpg"
              alt="Group workout"
              width={600}
              height={400}
              className="object-cover rounded w-full h-auto"
            />
          </div>
        </div>

        {/* PLANES DE ENTRENAMIENTO */}
        <section className="mt-24">
          <h2 className="text-center text-4xl font-semibold text-[#ff0066] mb-8 tracking-wide">
            Planes de Entrenamiento a Distancia
          </h2>

          <p className="text-center text-white text-lg mb-12 max-w-3xl mx-auto">
            Entrená desde cualquier lugar con nuestros planes personalizados.
            Cada programa está diseñado por nuestros profesionales para ayudarte
            a alcanzar tus objetivos, sin importar la distancia.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.title}
                className="bg-[#d9d9d9] rounded-lg shadow-lg overflow-hidden flex flex-col"
              >
                <div className="p-6 flex flex-col flex-1 text-[#181b2e]">
                  <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                  <p className="mb-4 flex-1">{plan.desc}</p>
                  <button
                    onClick={() => setSelectedPlan(plan.title)}
                    className="mt-auto bg-[#ff0066] text-white font-semibold py-2 px-4 rounded hover:bg-[#e0005c] transition"
                  >
                    Iniciar Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* MODAL: se muestra solo si hay plan seleccionado */}
      {selectedPlan && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#181b2e] text-white rounded-2xl p-8 w-[90%] max-w-2xl relative shadow-2xl">
            <button
              onClick={() => setSelectedPlan(null)}
              className="absolute top-4 right-4 text-[#ff0066] hover:text-white transition"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-3xl font-bold text-[#ff0066] mb-4">
              {selectedPlan}
            </h3>
            <p className="text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum lorem ac odio fermentum, non interdum ex fermentum.
              Vivamus laoreet lectus sed diam tincidunt, in facilisis metus
              venenatis. Curabitur non justo ac nisl convallis gravida. Aenean
              commodo, sapien nec luctus ultrices, enim urna suscipit lacus, ac
              egestas magna leo et libero.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
