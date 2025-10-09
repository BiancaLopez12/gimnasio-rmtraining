import { User, Menu } from "lucide-react"

export default function RMTrainingPage() {
  return (
    <div className="min-h-screen bg-[#837a88] flex">
      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-[#181b2e] px-8 py-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-24 h-24">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Outer circle */}
                <circle cx="50" cy="50" r="45" fill="none" stroke="#ef4444" strokeWidth="3" />

                {/* Inner design - stylized RM logo */}
                <path d="M 30 35 Q 35 30 45 35 L 50 45 L 45 50 Q 40 55 35 50 L 30 35 Z" fill="#ef4444" />
                <path d="M 50 45 L 65 30 Q 70 28 72 35 L 68 50 Q 65 55 60 52 L 50 45 Z" fill="#ef4444" />
                <circle cx="50" cy="60" r="15" fill="#181b2e" stroke="#ef4444" strokeWidth="2" />

                {/* RM text below */}
                <text x="50" y="92" textAnchor="middle" fill="#ef4444" fontSize="16" fontWeight="bold">
                  RM
                </text>
              </svg>
            </div>
          </div>

          {/* Center Logo */}
          <div className="text-center">
            <div className="text-[#ef4444] font-bold text-6xl tracking-wider">RM</div>
            <div className="text-[#ef4444] font-semibold text-2xl tracking-widest">training</div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-6">
            <button className="w-14 h-14 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors">
              <User className="w-7 h-7 text-[#181b2e]" />
            </button>
            <button className="text-white hover:text-gray-300 transition-colors">
              <Menu className="w-10 h-10" strokeWidth={3} />
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="px-12 py-12">
          {/* Title */}
          <h1 className="text-center text-5xl font-light tracking-[0.3em] mb-16 text-[#1e1e1e]">HORARIOS Y CLASES</h1>

          {/* Grid of Cards */}
          <div className="grid grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Card 1 - Maquinas */}
            <div className="bg-[#d9d9d9] p-6 shadow-lg">
              <div className="aspect-[4/3] mb-4 overflow-hidden">
                <img src="/people-doing-push-ups-in-gym.jpg" alt="Maquinas class" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-1 text-[#1e1e1e]">MAQUINAS</h3>
              <p className="text-sm text-[#1e1e1e]">Lunes, miercoles y viernes</p>
            </div>

            {/* Card 2 - Funcional */}
            <div className="bg-[#d9d9d9] p-6 shadow-lg">
              <div className="aspect-[4/3] mb-4 overflow-hidden">
                <img src="/people-training-on-gym-machines.jpg" alt="Funcional class" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-1 text-[#1e1e1e]">FUNCIONAL</h3>
              <p className="text-sm text-[#1e1e1e]">Martes y jueves</p>
            </div>

            {/* Card 3 - Maquinas (duplicate) */}
            <div className="bg-[#d9d9d9] p-6 shadow-lg">
              <div className="aspect-[4/3] mb-4 overflow-hidden">
                <img src="/people-doing-push-ups-in-gym.jpg" alt="Maquinas class" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-1 text-[#1e1e1e]">MAQUINAS</h3>
              <p className="text-sm text-[#1e1e1e]">Lunes, miercoles y viernes</p>
            </div>

            {/* Card 4 - Funcional (duplicate) */}
            <div className="bg-[#d9d9d9] p-6 shadow-lg">
              <div className="aspect-[4/3] mb-4 overflow-hidden">
                <img src="/people-training-on-gym-machines.jpg" alt="Funcional class" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-1 text-[#1e1e1e]">FUNCIONAL</h3>
              <p className="text-sm text-[#1e1e1e]">Martes y jueves</p>
            </div>

            {/* Card 5 - Maquinas (duplicate) */}
            <div className="bg-[#d9d9d9] p-6 shadow-lg">
              <div className="aspect-[4/3] mb-4 overflow-hidden">
                <img src="/people-doing-push-ups-in-gym.jpg" alt="Maquinas class" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-1 text-[#1e1e1e]">MAQUINAS</h3>
              <p className="text-sm text-[#1e1e1e]">Lunes, miercoles y viernes</p>
            </div>

            {/* Card 6 - Funcional (duplicate) */}
            <div className="bg-[#d9d9d9] p-6 shadow-lg">
              <div className="aspect-[4/3] mb-4 overflow-hidden">
                <img src="/people-training-on-gym-machines.jpg" alt="Funcional class" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-1 text-[#1e1e1e]">FUNCIONAL</h3>
              <p className="text-sm text-[#1e1e1e]">Martes y jueves</p>
            </div>
          </div>
        </main>
      </div>

      {/* Right Sidebar Navigation */}
      <aside className="w-80 bg-[#181b2e] flex flex-col items-center py-16 px-8 gap-6">
        <button className="w-full bg-[#d9d9d9] text-[#1e1e1e] py-4 px-6 text-lg font-medium tracking-wider hover:bg-white transition-colors">
          INICIO
        </button>
        <button className="w-full bg-[#d9d9d9] text-[#1e1e1e] py-4 px-6 text-lg font-medium tracking-wider hover:bg-white transition-colors">
          SOBRE NOSOTROS
        </button>
        <button className="w-full bg-[#d9d9d9] text-[#1e1e1e] py-4 px-6 text-lg font-medium tracking-wider hover:bg-white transition-colors">
          CLASES Y HORARIOS
        </button>
        <button className="w-full bg-[#d9d9d9] text-[#1e1e1e] py-4 px-6 text-lg font-medium tracking-wider hover:bg-white transition-colors">
          RUTINAS
        </button>
        <button className="w-full bg-[#d9d9d9] text-[#1e1e1e] py-4 px-6 text-lg font-medium tracking-wider hover:bg-white transition-colors">
          MERCHANDISING
        </button>
        <button className="w-full bg-[#d9d9d9] text-[#1e1e1e] py-4 px-6 text-lg font-medium tracking-wider hover:bg-white transition-colors">
          CONTACTOS
        </button>
      </aside>
    </div>
  )
}
