import { User, Menu, Instagram, Mail } from "lucide-react";

export default function RutinasPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#181b2e] px-6 py-4 flex items-center justify-between">
        {/* Logo */}
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

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="text-center">
            <div className="text-red-500 font-bold text-3xl">RM</div>
            <div className="text-white text-sm tracking-wider">training</div>
          </div>
        </div>

        {/* Right Navigation */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-[#181b2e]" />
          </div>
          <Menu className="w-8 h-8 text-white" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center bg-[#837a88] p-4">
        <h2 className="text-[#1e1e1e] text-3xl font-bold mb-6">RUTINAS</h2>
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled-KjnS5Pr6C5TKDtagfzxByMhyjtttfl.png"
          alt="Rutinas"
          className="w-full max-w-4xl h-auto object-cover rounded-lg shadow-lg"
        />
      </main>

      {/* Footer */}
      <footer className="bg-[#837a88] px-6 py-4">
        <div className="flex items-center justify-center gap-6">
          <Instagram className="w-6 h-6 text-white" />
          <Mail className="w-6 h-6 text-white" />
        </div>
      </footer>
    </div>
  );
}
