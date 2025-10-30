"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, User, Star } from "lucide-react";

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

  // Testimonios tomados manualmente de Google
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

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#181b2e] px-6 py-4 flex items-center justify-between relative">
        <div className="flex items-center">
          <div className="w-24 h-24 relative">
            <Image
              src="/red-and-black-circular-gym-logo-with-rm-letters.jpg"
              alt=""
              width={96}
              height={96}
              className="object-contain"
            />
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
                    className="w-full px-4 py-3 text-left text-black hover:bg-[#837a88]/50 border-b border-[#837a88]/20 last:border-b-0"
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
      <main className="flex-1 relative">
        <div className="w-full h-[calc(100vh-80px)] relative">
          <Image
            src="/"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Sobre Nosotros */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 space-y-6 z-10 max-w-3xl mx-auto">
          <h2 className="text-black text-4xl md:text-5xl font-bold tracking-wide">
            SOBRE NOSOTROS
          </h2>
          <p className="text-black text-lg md:text-xl">
            Somos un centro de entrenamiento formado por profesores de Educación
            física en el cual ofrecemos clases de entrenamiento funcional y
            musculación para todo tipo de personas.
          </p>
          <p className="text-black text-base md:text-lg">
            CON UN OBJETIVO PRIMORDIAL: MEJORAR LA SALUD Y CALIDAD DE VIDA
          </p>
          <p className="text-black text-base md:text-lg">
            En nuestro centro de entrenamiento, nos enfocamos en la seguridad y
            el bienestar de nuestros alumnos. 
            Los entrenadores están capacitados
            para adaptar las clases a tus necesidades y objetivos individuales,
            asegurándonos de que te sientas cómodo y motivado en todo momento.
          </p>
        </div>
      </main>

      {/* Sección Testimonios */}
      <section className="bg-[#0f1121] py-16 px-6 text-center">
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
