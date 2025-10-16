"use client";
import { Menu, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
      <header className="bg-[#181b2e] px-6 py-4 flex items-center justify-between relative">
        {/* Logo Left */}
        <div className="flex items-center">
          <div className="w-24 h-24 relative">
            <Image
              src="/red-and-black-circular-gym-logo-with-rm-letters.jpg"
              alt="RM Logo"
              width={96}
              height={96}
              className="object-contain"
            />
          </div>
        </div>

        {/* Center Logo */}
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

        {/* Right Icons */}
        <div className="flex items-center gap-6 relative">
          <button className="text-white hover:text-[#ff0066] transition-colors">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <User className="w-6 h-6 text-[#181b2e]" />
            </div>
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

      {/* Main Content con imagen de fondo */}
      <main className="flex-1 relative px-8 py-12">
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
        <h2 className="text-center text-5xl font-light tracking-[0.3em] mb-12 text-white relative z-10">
          RUTINAS
        </h2>

        {/* Image Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          <div className="bg-[#d9d9d9] p-6 shadow-lg">
            <div className="aspect-[4/3] relative">
              <Image
                src="/group-of-people-doing-push-up-exercises-in-gym.jpg"
                alt="Group workout"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-[#d9d9d9] p-6 shadow-lg">
            <div className="aspect-[4/3] relative">
              <Image
                src="/people-using-weight-training-machines-in-gym.jpg"
                alt="Weight training"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-[#d9d9d9] p-6 shadow-lg">
            <div className="aspect-[4/3] relative">
              <Image
                src="/group-of-people-doing-push-up-exercises-in-gym.jpg"
                alt="Group workout"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="bg-[#d9d9d9] p-6 shadow-lg">
            <div className="aspect-[4/3] relative">
              <Image
                src="/people-using-weight-training-machines-in-gym.jpg"
                alt="Weight training"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-[#d9d9d9] p-6 shadow-lg">
            <div className="aspect-[4/3] relative">
              <Image
                src="/group-of-people-doing-push-up-exercises-in-gym.jpg"
                alt="Group workout"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-[#d9d9d9] p-6 shadow-lg">
            <div className="aspect-[4/3] relative">
              <Image
                src="/people-using-weight-training-machines-in-gym.jpg"
                alt="Weight training"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
