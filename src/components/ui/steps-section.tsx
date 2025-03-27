"use client";

import { motion } from "framer-motion";
import { FileImage, Scan, Boxes, GitMerge, LayoutPanelTop } from "lucide-react";
import { GlowingEffect } from "./glowing-effect";

const steps = [
  {
    number: "01",
    title: "Preprocessing",
    description: "Loads image (.png) and LiDAR point cloud (.pcd) files. Reads calibration files and labels for object annotation.",
    icon: FileImage,
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    number: "02",
    title: "Object Detection (YOLOv8)",
    description: "Uses YOLOv8 for detecting objects in the image. Saves and displays the annotated image.",
    icon: Scan,
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    number: "03",
    title: "Point Cloud Processing (Open3D)",
    description: "Reads LiDAR .pcd file and extracts 3D points. Uses DBSCAN for point cloud clustering.",
    icon: Boxes,
    color: "from-pink-500/20 to-blue-500/20"
  },
  {
    number: "04",
    title: "Projection & Fusion",
    description: "Aligns LiDAR points with the image using calibration matrices. Retains only the LiDAR points inside detected bounding boxes.",
    icon: GitMerge,
    color: "from-blue-500/20 to-green-500/20"
  },
  {
    number: "05",
    title: "Visualization",
    description: "Displays the fused image with projected LiDAR data.",
    icon: LayoutPanelTop,
    color: "from-green-500/20 to-purple-500/20"
  }
];

export function StepsSection() {
  return (
    <section className="relative w-full bg-neutral-950 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-16"
        >
          Processing Pipeline
        </motion.h2>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100`}></div>
                <div className="relative bg-neutral-900/40 backdrop-blur-xl rounded-3xl p-6 border border-white/10">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={2}
                  />
                  <div className="flex items-center gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-neutral-800/50 flex items-center justify-center border border-white/5">
                      {<step.icon className="w-8 h-8 text-white/70" />}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-2xl font-bold text-white/30">STEP</span>
                        <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                          {step.number}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute left-[2.5rem] bottom-0 w-px h-8 bg-gradient-to-b from-white/10 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 