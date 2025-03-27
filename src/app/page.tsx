import { BackgroundPaths } from "@/components/ui/background-paths"
import { FeaturesSection } from "@/components/ui/features-section"

export default function Home() {
    return (
        <main className="min-h-screen">
            <BackgroundPaths title="Welcome to MSDF" />
            <FeaturesSection />
            <section id="sensors" className="relative w-full bg-neutral-950 py-20 min-h-screen mt-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white">Sensor Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-neutral-900/50 backdrop-blur-xl rounded-3xl p-6 border border-white/10">
                            <h3 className="text-2xl font-bold text-white mb-4">LIDAR Technology</h3>
                            <p className="text-gray-400">
                                Our LIDAR sensors provide high-precision 3D mapping capabilities with advanced features for environmental scanning and object detection. Perfect for autonomous systems and precise measurement applications.
                            </p>
                        </div>
                        <div className="bg-neutral-900/50 backdrop-blur-xl rounded-3xl p-6 border border-white/10">
                            <h3 className="text-2xl font-bold text-white mb-4">Thermal Imaging System</h3>
                            <p className="text-gray-400">
                                State-of-the-art thermal imaging technology for accurate temperature detection and heat mapping. Ideal for surveillance, monitoring, and safety applications.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
