"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Star, Gift, TrendingUp } from "lucide-react";

export default function SobreNosotrosPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const screens = [
    { name: "Inicio", route: "/inicio" },
    { name: "Contactos", route: "/contactos" },
    { name: "Sobre Nosotros", route: "/sobrenosotros" },
    { name: "Horarios Y Clases", route: "/horarios" },
    { name: "Rutinas", route: "/rutinas" },
    { name: "Merchandising", route: "/merchandising" },
  ];

  const testimonios = [
    {
      nombre: "Martina G.",
      texto:
        "Excelente ambiente y profesionales. Me ayudaron a mejorar mi estado físico y sentirme motivada cada día.",
      estrellas: 5,
    },
    {
      nombre: "Lucas R.",
      texto:
        "Muy buenos entrenadores, se adaptan a cada persona. Las clases son variadas y entretenidas.",
      estrellas: 5,
    },
    {
      nombre: "Valentina P.",
      texto:
        "El mejor gimnasio, siempre atentos y con muy buena energía. Super recomendable.",
      estrellas: 5,
    },
  ];

  const novedades = [
    {
      icono: <Gift className="w-8 h-8 text-[#ff0066]" />,
      titulo: "Promo 2x1 en Clases Funcionales",
      descripcion:
        "Traé a un amigo y ambos obtienen un 50% de descuento en su primer mes.",
    },
    {
      icono: <TrendingUp className="w-8 h-8 text-[#ff0066]" />,
      titulo: "Nueva Rutina de Alta Intensidad",
      descripcion:
        "Sumate a nuestra nueva clase HIIT para quemar calorías y mejorar tu resistencia.",
    },
    {
      icono: <Gift className="w-8 h-8 text-[#ff0066]" />,
      titulo: "Descuento por Referidos",
      descripcion:
        "Por cada persona que recomiendes, obtenés un 20% de descuento en tu próxima cuota.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0f1121] text-white">
      {/* Header */}
      <header className="bg-[#181b2e] px-6 py-4 flex items-center justify-between relative">
        <div className="flex items-center">
          <div className="w-24 h-24 relative">
            
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <div className="text-center">
            <h1 className="text-[#ff0066] text-5xl font-bold tracking-tight leading-none">
              RM
            </h1>
            <p className="text-[#ff0066] text-xl font-medium tracking-wide">
              training
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 relative">
          <button
            className="text-white hover:text-[#ff0066] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu className="w-10 h-10" strokeWidth={3} />
          </button>

          {menuOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-[#181b2e] rounded-lg shadow-lg z-20 flex flex-col">
              {screens.map((screen, index) => (
                <Link key={index} href={screen.route}>
                  <button
                    className="w-full px-4 py-3 text-left text-white hover:bg-[#837a88]/30 border-b border-[#837a88]/20 last:border-b-0"
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

      {/* SOBRE NOSOTROS */}
      <main className="flex-1 bg-[#0f1121] text-white">
        <section className="py-20 px-6 text-center max-w-4xl mx-auto">
          {/* Título con línea decorativa */}
          <div className="inline-block mb-8 relative">
            <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-[#ff0066] relative z-10">
              SOBRE NOSOTROS
            </h2>
            <span className="absolute left-0 bottom-0 w-full h-[4px] bg-[#ff0066]/50 animate-pulse"></span>
          </div>

          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Somos un centro de entrenamiento formado por profesores de{" "}
              <span className="text-[#ff0066] font-semibold">
                Educación Física
              </span>, en el cual ofrecemos clases de entrenamiento funcional y
              musculación para todo tipo de personas.
            </p>

            <p className="italic text-gray-300">
              Nuestro principal objetivo es{" "}
              <span className="text-[#ff0066] font-semibold">
                mejorar tu salud y calidad de vida
              </span>{" "}
              a través del movimiento, la constancia y la motivación diaria.
            </p>

            <p>
              En RM Training nos enfocamos en la{" "}
              <span className="text-[#ff0066] font-semibold">
                seguridad y el bienestar
              </span>{" "}
              de nuestros alumnos. Nuestros entrenadores están capacitados para
              adaptar las clases a tus necesidades y objetivos individuales,
              asegurándonos de que te sientas cómodo y motivado en todo momento.
            </p>

            {/* Frase destacada */}
            <div className="mt-10 p-6 bg-[#181b2e] rounded-2xl shadow-lg border border-[#ff0066]/40 hover:scale-105 transition-transform duration-300">
              <p className="text-xl md:text-2xl font-semibold text-[#ff0066]">
                “Entrená con propósito, superate cada día.”
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* TESTIMONIOS */}
      <section className="bg-[#0f1121] py-16 px-6 text-center border-t border-[#ff0066]/30">
        <h2 className="text-4xl font-bold text-[#ff0066] mb-10">
          Testimonios de nuestros alumnos
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonios.map((t, i) => (
            <div
              key={i}
              className="bg-[#181b2e] text-white rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center mb-3">
                {[...Array(t.estrellas)].map((_, idx) => (
                  <Star key={idx} className="text-yellow-400 w-5 h-5" fill="gold" />
                ))}
              </div>
              <p className="italic mb-4">“{t.texto}”</p>
              <h4 className="font-semibold text-[#ff0066]">{t.nombre}</h4>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <a
            href="https://www.google.com/search?q=Rm+training+Opiniones"
            target="_blank"
            className="text-[#ff0066] hover:underline font-medium"
          >
            Ver más opiniones en Google →
          </a>
        </div>
      </section>

      {/* NOVEDADES Y PROMOCIONES */}
      <section className="bg-[#181b2e] py-16 px-6 text-center border-t border-[#ff0066]/40">
        <h2 className="text-4xl font-bold text-[#ff0066] mb-10">
          Novedades y Promociones Exclusivas
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {novedades.map((n, i) => (
            <div
              key={i}
              className="bg-[#0f1121] text-white rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center mb-4">{n.icono}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#ff0066]">
                {n.titulo}
              </h3>
              <p className="text-gray-300">{n.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#181b2e] text-center text-sm py-4 border-t border-[#ff0066]">
        <p className="text-gray-400">
          © {new Date().getFullYear()} RM Training. Todos los derechos
          reservados.
        </p>
      </footer>
    </div>
  );
}
