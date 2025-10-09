import { Menu, User } from "lucide-react"
import Image from "next/image"

export default function RMTrainingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#181b2e] px-6 py-4 flex items-center justify-between">
        {/* Logo Left */}
        <div className="flex items-center">
          <div className="w-24 h-24 relative">
            <Image src="/red-and-black-circular-gym-logo-with-rm-letters.jpg" alt="RM Logo" width={96} height={96} className="object-contain" />
          </div>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <div className="text-center">
            <h1 className="text-[#ff0066] text-5xl font-bold tracking-tight leading-none">RM</h1>
            <p className="text-[#ff0066] text-xl font-medium tracking-wide">training</p>
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-6">
          <button className="text-white hover:text-[#ff0066] transition-colors">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <User className="w-6 h-6 text-[#181b2e]" />
            </div>
          </button>
          <button className="text-white hover:text-[#ff0066] transition-colors">
            <Menu className="w-10 h-10" strokeWidth={3} />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-[#837a88] px-8 py-12">
        {/* Title */}
        <h2 className="text-center text-5xl font-light tracking-[0.3em] mb-12 text-[#1e1e1e]">RUTINAS</h2>

        {/* Image Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Row 1 */}
          <div className="bg-[#d9d9d9] p-6 shadow-lg">
            <div className="aspect-[4/3] relative">
              <Image src="/group-of-people-doing-push-up-exercises-in-gym.jpg" alt="Group workout" fill className="object-cover" />
            </div>
          </div>

          <div className="bg-[#d9d9d9] p-6 shadow-lg">
            <div className="aspect-[4/3] relative">
              <Image src="/people-using-weight-training-machines-in-gym.jpg" alt="Weight training" fill className="object-cover" />
            </div>
          </div>

          <div className="bg-[#d9d9d9] p-6 shadow-lg">
            <div className="aspect-[4/3] relative">
              <Image src="/group-of-people-doing-push-up-exercises-in-gym.jpg" alt="Group workout" fill className="object-cover" />
            </div>
          </div>

          {/* Row 2 */}
          <div className="bg-[#d9d9d9] p-6 shadow-lg">
            <div className="aspect-[4/3] relative">
              <Image src="/people-using-weight-training-machines-in-gym.jpg" alt="Weight training" fill className="object-cover" />
            </div>
          </div>

          <div className="bg-[#d9d9d9] p-6 shadow-lg">
            <div className="aspect-[4/3] relative">
              <Image src="/group-of-people-doing-push-up-exercises-in-gym.jpg" alt="Group workout" fill className="object-cover" />
            </div>
          </div>

          <div className="bg-[#d9d9d9] p-6 shadow-lg">
            <div className="aspect-[4/3] relative">
              <Image src="/people-using-weight-training-machines-in-gym.jpg" alt="Weight training" fill className="object-cover" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}