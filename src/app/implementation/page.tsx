"use client"

import { BackgroundPaths } from "@/components/ui/background-paths"
import { NavBarDemo } from "@/components/ui/nav-bar-demo"
import { GoogleGeminiEffectDemo } from "@/components/ui/google-gemini-effect-demo"
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background"

export default function ImplementationPage() {
  return (
    <main className="min-h-screen">
      <NavBarDemo />
      
      {/* Hero Section with Gemini Effect */}
      <section className="relative w-full bg-neutral-950 overflow-hidden">
        <div className="relative min-h-[80vh] flex items-center">
          <GoogleGeminiEffectDemo />
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-6">
              Welcome to Implementation
            </h1>
            <p className="text-lg sm:text-xl text-center text-white/60 max-w-3xl mx-auto">
              Explore our advanced processing pipeline and implementation details
            </p>
          </div>
        </div>
      </section>

      {/* Background Animation */}
      <div className="relative w-full min-h-screen bg-neutral-950 py-20">
        <AnimatedGradientBackground
          Breathing={true}
          startingGap={150}
          gradientColors={[
            "rgba(0, 0, 0, 0.95)",
            "rgba(41, 121, 255, 0.05)",
            "rgba(61, 90, 254, 0.08)",
            "rgba(255, 128, 171, 0.05)",
            "rgba(0, 230, 118, 0.08)"
          ]}
          gradientStops={[0, 45, 65, 85, 100]}
          animationSpeed={0.01}
          breathingRange={8}
          topOffset={0}
          containerClassName="opacity-100"
        />
      </div>
    </main>
  )
} 