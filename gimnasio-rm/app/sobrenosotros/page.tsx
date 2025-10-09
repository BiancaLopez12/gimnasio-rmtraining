import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#000000]">
      <div className="relative h-[calc(100vh-64px)]">
        <img src="/modern-gym-interior-with-treadmills-and-equipment.jpg" alt="RM Training Gym" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
          <h1 className="text-[#ffffff] text-4xl md:text-6xl font-bold mb-4 tracking-wide">RM TRAINING</h1>
          <p className="text-[#d9d9d9] text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Tu destino para el entrenamiento profesional y resultados excepcionales
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/schedule">
              
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                className="border-[#ffffff] text-[#ffffff] hover:bg-[#ffffff]/10 px-8 py-6 text-lg bg-transparent"
              >
                Conocer Más
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
