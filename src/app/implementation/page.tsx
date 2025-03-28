"use client"

import { GoogleGeminiEffectDemo } from "@/components/ui/google-gemini-effect-demo"
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { motion } from "framer-motion"
import { ArrowRight, Code2, Database, GitBranch, LineChart, Settings, Upload, FileType, Image, Database as DatasetIcon } from "lucide-react"
import { useState } from "react"

interface FileState {
  pcd: File | null;
  image: File | null;
  calibration: File | null;
}

export default function ImplementationPage() {
  const [files, setFiles] = useState<FileState>({
    pcd: null,
    image: null,
    calibration: null
  });

  const handleFileChange = (type: 'pcd' | 'image' | 'calibration', e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFiles(prev => ({
        ...prev,
        [type]: e.target.files![0]
      }));
    }
  };

  return (
    <main className="min-h-screen bg-neutral-950">
      {/* Hero Section with Gemini Effect */}
      <section className="relative w-full overflow-hidden">
        <div className="relative min-h-[80vh] flex items-center">
          <GoogleGeminiEffectDemo />
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-6">
                Implementation Details
              </h1>
              <p className="text-lg sm:text-xl text-center text-white/60 max-w-3xl mx-auto">
                Dive deep into our advanced processing pipeline and technical implementation
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Implementation Sections */}
      <section className="relative w-full py-20">
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
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Architecture Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative bg-neutral-900/40 backdrop-blur-xl rounded-3xl p-6 border border-white/10"
            >
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} />
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-blue-500/10">
                  <GitBranch className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">System Architecture</h3>
                  <p className="text-white/60">
                    Modular design with microservices architecture for scalability and maintainability
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Data Processing Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative bg-neutral-900/40 backdrop-blur-xl rounded-3xl p-6 border border-white/10"
            >
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} />
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-purple-500/10">
                  <Database className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Data Processing</h3>
                  <p className="text-white/60">
                    Advanced algorithms for real-time data processing and analysis
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Code Integration Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative bg-neutral-900/40 backdrop-blur-xl rounded-3xl p-6 border border-white/10"
            >
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} />
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-green-500/10">
                  <Code2 className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Code Integration</h3>
                  <p className="text-white/60">
                    Seamless integration with existing systems and third-party services
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Performance Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative bg-neutral-900/40 backdrop-blur-xl rounded-3xl p-6 border border-white/10"
            >
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} />
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-rose-500/10">
                  <LineChart className="w-6 h-6 text-rose-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Performance Metrics</h3>
                  <p className="text-white/60">
                    Comprehensive monitoring and optimization of system performance
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Technical Details Section */}
          <div className="mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative bg-neutral-900/40 backdrop-blur-xl rounded-3xl p-8 border border-white/10"
            >
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} />
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-indigo-500/10">
                  <Settings className="w-6 h-6 text-indigo-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Technical Specifications</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Core Features</h3>
                  <ul className="space-y-3 text-white/60">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      Real-time data processing
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      Advanced error handling
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      Automated testing suite
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      Continuous integration
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Technologies</h3>
                  <ul className="space-y-3 text-white/60">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      Next.js & React
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      TypeScript
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      TailwindCSS
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      Framer Motion
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* File Upload Section */}
          <section className="relative w-full py-20">
            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative bg-neutral-900/40 backdrop-blur-xl rounded-3xl p-8 border border-white/10"
              >
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} />
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-2xl bg-blue-500/10">
                    <Upload className="w-6 h-6 text-blue-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Upload Files</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* PCD File Upload */}
                  <div className="relative group">
                    <input
                      type="file"
                      accept=".pcd"
                      onChange={(e) => handleFileChange('pcd', e)}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                    />
                    <div className="relative bg-neutral-800/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10 transition-all duration-300 group-hover:border-blue-500/50">
                      <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} />
                      <div className="flex flex-col items-center text-center gap-4">
                        <div className="p-4 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                          <FileType className="w-8 h-8 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">LIDAR Data (.pcd)</h3>
                          <p className="text-sm text-white/60">Upload your point cloud data file</p>
                        </div>
                        {files.pcd && (
                          <p className="text-sm text-emerald-400 mt-2">
                            Selected: {files.pcd.name}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Image File Upload */}
                  <div className="relative group">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileChange('image', e)}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                    />
                    <div className="relative bg-neutral-800/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10 transition-all duration-300 group-hover:border-purple-500/50">
                      <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} />
                      <div className="flex flex-col items-center text-center gap-4">
                        <div className="p-4 rounded-xl bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                          <Image className="w-8 h-8 text-purple-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">Image File</h3>
                          <p className="text-sm text-white/60">Upload your image file</p>
                        </div>
                        {files.image && (
                          <p className="text-sm text-emerald-400 mt-2">
                            Selected: {files.image.name}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Calibration File Upload */}
                  <div className="relative group">
                    <input
                      type="file"
                      accept=".txt,.json,.yaml,.yml"
                      onChange={(e) => handleFileChange('calibration', e)}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                    />
                    <div className="relative bg-neutral-800/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10 transition-all duration-300 group-hover:border-emerald-500/50">
                      <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} />
                      <div className="flex flex-col items-center text-center gap-4">
                        <div className="p-4 rounded-xl bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                          <DatasetIcon className="w-8 h-8 text-emerald-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">Calibration Data</h3>
                          <p className="text-sm text-white/60">Upload calibration matrices file</p>
                        </div>
                        {files.calibration && (
                          <p className="text-sm text-emerald-400 mt-2">
                            Selected: {files.calibration.name}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Upload Button */}
                <div className="mt-8 flex justify-center">
                  <button
                    className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!files.pcd || !files.image || !files.calibration}
                  >
                    Process Files
                  </button>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
} 