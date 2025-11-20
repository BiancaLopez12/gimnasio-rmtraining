"use client";

import { Menu, User, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/* ------------------ SLIDER DE RUTINAS ------------------ */
import { motion, AnimatePresence } from "framer-motion";

const rutinas = [
  {
    title: "Rutina Full Body",
    image: "/group-of-people-doing-push-up-exercises-in-gym.jpg",
    ejercicios: [
      "Sentadilla 3x15",
      "Flexiones 3x12",
      "Plancha 3x30s",
      "Zancadas 3x12 por pierna",
    ],
  },
  {
    title: "Rutina de Fuerza",
    image: "/people-using-weight-training-machines-in-gym.jpg",
    ejercicios: [
      "Peso muerto 4x10",
      "Press de pecho 4x8",
      "Remo con mancuerna 3x12",
      "Press militar 3x10",
    ],
  },
  {
    title: "Rutina HIIT",
    image: "/group-of-people-doing-push-up-exercises-in-gym.jpg",
    ejercicios: [
      "Burpees 30s",
      "Mountain climbers 30s",
      "Saltos en tijera 30s",
      "Descanso 30s x 4 rondas",
    ],
  },
];

export default function RMTrainingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [indexRutina, setIndexRutina] = useState(0);

  const screens = [
    { name: "Inicio", route: "/inicio" },
    { name: "Contactos", route: "/contactos" },
    { name: "Sobre Nosotros", route: "/sobrenosotros" },
    { name: "Horarios Y Clases", route: "/horarios" },
    { name: "Rutinas", route: "/rutinas" },
    { name: "Merchandising", route: "/merchandising" },
  ];

  const nextRutina = () => {
    setIndexRutina((prev) => (prev + 1) % rutinas.length);
  };

  const prevRutina = () => {
    setIndexRutina((prev) => (prev - 1 + rutinas.length) % rutinas.length);
  };

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

  // PLANES DE ALIMENTACIÓN
  const foodPlans = [
    {
      title: "Pérdida de Peso Saludable",
      desc: "Plan equilibrado diseñado para promover una reducción de peso sostenible sin perder masa muscular.",
    },
    {
      title: "Ganancia de Masa Muscular",
      desc: "Alimentación enfocada en aumentar masa muscular, combinando proteína de alta calidad y carbohidratos complejos.",
    },
    {
      title: "Plan Energético Deportivo",
      desc: "Ideal para personas activas o deportistas que necesitan mejorar rendimiento y recuperación.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#181b2e] ">
      {/* Header */}
      <header className="bg-[#181b2e] px-6 py- flex items-center justify-end relative border-b border-[#ff0066] ">
        <div className="flex items-center border-[#ff0066]">
          <div className="w-24 h-24 relative"></div>
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
          <button className="text-white hover:text-[#ff0066] transition-colors"></button>
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
        <h3 className="text-center text-5xl font-light tracking-[0.3em] mb-12 text-ff0066 font-semibold">
PLANES DE ENTRENAMIENTO
        </h3>

        {/* ---------- 🔥 SLIDER DE RUTINAS (NUEVO) ---------- */}
        <div className="max-w-4xl mx-auto flex flex-col items-center mb-16">
          <div className="flex justify-between w-full mb-4">
            <button
              onClick={prevRutina}
              className="text-[#ff0066] hover:text-white transition font-bold text-2xl"
            >
              ⬅
            </button>

            <button
              onClick={nextRutina}
              className="text-[#ff0066] hover:text-white transition font-bold text-2xl"
            >
              ➡
            </button>
          </div>

          <AnimatePresence>
            <motion.div
              key={indexRutina}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.5 }}
              className="bg-[#d9d9d9] rounded-xl p-8 shadow-xl w-full"
            >
              <h3 className="text-center text-3xl text-[#181b2e] font-bold mb-6">
                {rutinas[indexRutina].title}
              </h3>

             

              <ul className="text-[#181b2e] text-xl space-y-2 font-medium">
                {rutinas[indexRutina].ejercicios.map((ejer, i) => (
                  <li
                    key={i}
                    className="bg-white/60 p-3 rounded-lg shadow"
                  >
                    {ejer}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ---------------- PLANES DE ENTRENAMIENTO ---------------- */}
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

        {/* ---------------- PLANES DE ALIMENTACIÓN ---------------- */}
        <section className="mt-24">
          <h2 className="text-center text-4xl font-semibold text-[#ff0066] mb-8 tracking-wide">
            Planes de Alimentación Personalizados
          </h2>

          <p className="text-center text-white text-lg mb-12 max-w-3xl mx-auto">
            Complementá tu entrenamiento con un plan de alimentación diseñado
            especialmente para tus objetivos: bajar de peso, ganar músculo o
            mejorar tu rendimiento.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {foodPlans.map((plan) => (
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
                    Ver Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* MODAL */}
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
              venenatis.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
