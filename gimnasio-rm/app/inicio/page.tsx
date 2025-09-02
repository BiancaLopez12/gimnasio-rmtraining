"use client"

import { useState } from "react"
import { Menu, User, Instagram, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const screens = ["home", "contactos", "horarios", "rutinas", "merchandising", "gym"]

const screenTitles = {
  home: "INICIO",
  contactos: "CONTACTOS",
  horarios: "HORARIOS Y CLASES",
  rutinas: "RUTINAS",
  merchandising: "MERCHANDISING",
  gym: "GYM",
}

export default function RMTrainingApp() {
  const [currentScreen, setCurrentScreen] = useState("home")
  const [showMenu, setShowMenu] = useState(false)

  const workoutImages = [
    "/group-fitness.png",
    "/functional-training-with-equipment.png",
    "/machine-workout-in-gym.png",
    "/cardio-training-session.png",
    "/strength-training-class.png",
    "/crossfit-workout-group.png",
  ]

  const merchandiseImages = ["/purple-and-pink-athletic-shirt-front-and-back.png", "/purple-and-pink-sports-jersey-design.png", "/athletic-wear-purple-pink-pattern.png"]

  const gymImages = ["/imagenfondorm.svg", "/fitness-center-with-cardio-machines-and-natural-li.png"]

  const menuItems = [
    { label: "INICIO", screen: "home" },
    { label: "MERCHANDISING", screen: "merchandising" },
    { label: "CLASES Y HORARIOS", screen: "horarios" },
    { label: "RUTINAS", screen: "rutinas" },
    { label: "CONTACTOS", screen: "contactos" },
  ]

  const renderContent = () => {
    switch (currentScreen) {
      case "home":
        return (
          // Contenido de la página de inicio
          <div className="flex-1">
            <main className="relative">
              <div className="w-full h-[calc(100vh-80px)] relative">
                <Image
                  src="/logoRM.pdf"
                  alt="Modern gym interior with treadmills and weight equipment"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </main>
            {/* Footer de la página de inicio, ahora está integrado aquí */}
            <footer className="bg-[#837a88] px-6 py-4 md:hidden">
              <div className="flex items-center justify-center gap-6">
                <Instagram className="w-6 h-6 text-white" />
                <Mail className="w-6 h-6 text-white" />
              </div>
            </footer>
          </div>
        )
      
      case "contactos":
        return (
          <div className="flex-1 bg-[#837a88] flex items-center justify-center">
            <h2 className="text-[#1e1e1e] text-xl font-semibold">CONTACTOS</h2>
          </div>
        )

      case "horarios":
        return (
          <div className="flex-1 bg-[#837a88] p-4">
            <h2 className="text-[#1e1e1e] text-lg font-semibold mb-4 text-center">HORARIOS Y CLASES</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {workoutImages.map((image, index) => (
                <div key={index} className="bg-[#ffffff] rounded-lg overflow-hidden">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Workout class ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                  <div className="p-2">
                    <p className="text-[#1e1e1e] text-xs font-medium">
                      {index === 0
                        ? "MÁQUINAS"
                        : index === 1
                          ? "FUNCIONAL"
                          : index === 2
                            ? "MÁQUINAS"
                            : index === 3
                              ? "FUNCIONAL"
                              : index === 4
                                ? "MÁQUINAS"
                                : "FUNCIONAL"}
                    </p>
                    <p className="text-[#837a88] text-xs">
                      {index % 2 === 0 ? "LUNES, MIÉRCOLES Y VIERNES" : "MARTES Y JUEVES"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case "rutinas":
        return (
          <div className="flex-1 bg-[#837a88] p-4">
            <h2 className="text-[#1e1e1e] text-lg font-semibold mb-4 text-center">RUTINAS</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {workoutImages.map((image, index) => (
                <div key={index} className="bg-[#ffffff] rounded-lg overflow-hidden">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Routine ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )

      case "merchandising":
        return (
          <div className="flex-1 bg-[#837a88] p-4">
            <h2 className="text-[#1e1e1e] text-lg font-semibold mb-4 text-center">MERCHANDISING</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {[...merchandiseImages, ...merchandiseImages].map((image, index) => (
                <div key={index} className="bg-[#ffffff] rounded-lg overflow-hidden">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Merchandise ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )

      case "gym":
        return (
          <div className="flex-1 bg-[#1e1e1e] p-4">
            <div className="space-y-4">
              {gymImages.map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Gym interior ${index + 1}`}
                    className="w-full h-48 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )
        
      default:
        return null
    }
  }

  return (
    <div className="mx-auto bg-[#1e1e1e] min-h-screen relative md:max-w-4xl lg:max-w-6xl">
      {/* Header unificado */}
      <header className="bg-[#181b2e] px-6 py-4 flex items-center justify-between relative">
        {/* Logo de la esquina izquierda */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center relative">
            <div className="w-8 h-8 border-2 border-white rounded-full"></div>
            <div className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full border border-white"></div>
          </div>
          <div className="text-white">
            <div className="text-red-500 font-bold text-xl">RM</div>
            <div className="text-white text-sm">training</div>
          </div>
        </div>

        {/* Logo central para móviles, oculto en PC */}
        <div className="absolute left-1/2 transform -translate-x-1/2 md:hidden">
          <div className="text-center">
            <div className="text-red-500 font-bold text-3xl">RM</div>
            <div className="text-white text-sm tracking-wider">training</div>
          </div>
        </div>

        {/* Botones de INICIAR SESIÓN y REGISTRARSE para PC */}
        <nav className="hidden md:flex items-center gap-8">
            <button className="text-red-500 font-medium hover:opacity-80 transition-opacity">INICIAR SESION</button>
            <button className="text-red-500 font-medium hover:opacity-80 transition-opacity">REGISTRARSE</button>
        </nav>

        {/* Iconos de usuario y menú para móviles */}
        <div className="flex items-center gap-4 md:hidden">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-[#181b2e]" />
            </div>
            <Menu className="w-8 h-8 text-white" onClick={() => setShowMenu(!showMenu)}/>
        </div>
      </header>

      {/* Navigation Menu Overlay (solo en móvil) */}
      {showMenu && (
        <div className="absolute top-20 right-4 bg-[#181b2e] rounded-lg shadow-lg z-10 min-w-48 md:hidden">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="w-full px-4 py-3 text-left text-[#ffffff] hover:bg-[#837a88]/20 first:rounded-t-lg last:rounded-b-lg border-b border-[#837a88]/20 last:border-b-0"
              onClick={() => {
                setCurrentScreen(item.screen)
                setShowMenu(false)
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      {/* Contenido principal */}
      <div className="flex flex-col md:flex-row min-h-[calc(100vh-80px)]">
        {/* Barra lateral de navegación (solo en PC) */}
        <div className="hidden md:flex flex-col w-64 bg-[#181b2e] p-4 gap-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`w-full px-4 py-3 text-left rounded-lg transition-colors duration-200 ${
                currentScreen === item.screen ? "bg-red-500 text-[#ffffff]" : "text-[#ffffff] hover:bg-[#837a88]/20"
              }`}
              onClick={() => setCurrentScreen(item.screen)}
            >
              {item.label}
            </button>
          ))}
        </div>
        
        {/* Contenido dinámico del screen */}
        <div className="flex-1 overflow-auto">
          {renderContent()}
        </div>
      </div>

      {/* Bottom Navigation Tabs (solo en móvil) */}
      <div className="bg-[#181b2e] px-4 py-2 flex justify-center gap-8 md:hidden">
        <button
          className={`px-4 py-2 rounded text-sm ${
            currentScreen === "home" ? "bg-red-500 text-[#ffffff]" : "text-[#837a88]"
          }`}
          onClick={() => setCurrentScreen("home")}
        >
          
        </button>
        <button
          className={`px-4 py-2 rounded text-sm ${
            currentScreen === "merchandising" ? "bg-red-500 text-[#ffffff]" : "text-[#837a88]"
          }`}
          onClick={() => setCurrentScreen("merchandising")}
        >
          
        </button>
      </div>

      {/* Screen Navigation Buttons (los puntos) - solo para móvil */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 bg-[#000000]/50 rounded-full px-3 py-2 md:hidden">
        {screens.map((screen, index) => (
          <button
            key={screen}
            className={`w-3 h-3 rounded-full ${currentScreen === screen ? "bg-red-500" : "bg-[#837a88]"}`}
            onClick={() => setCurrentScreen(screen)}
          />
        ))}
      </div>
    </div>
  )
}