"use client";

import { motion } from "framer-motion";
import { Zap, Brain, Rocket, Crosshair } from "lucide-react";
import Image from "next/image";

const About = () => {
    const pillars = [
        { icon: Crosshair, title: "Precision", desc: "Clean & optimized systems" },
        { icon: Brain, title: "Intelligence", desc: "AI-driven implementations" },
        { icon: Zap, title: "Velocity", desc: "Fast-track development" },
        { icon: Rocket, title: "Scale", desc: "Architecting for growth" },
    ];

    return (
        <section id="about" className="py-32 relative bg-black overflow-hidden font-sans">
            {/* Background text */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 p-20 opacity-[0.02] pointer-events-none select-none">
                <div className="text-[12rem] xl:text-[18rem] font-black text-white leading-none -rotate-90">ABOUT</div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Left Column Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                    >
                        <h2 className="text-sm font-mono tracking-[0.5em] text-neon-green mb-6 uppercase">The Architect</h2>
                        <h3 className="text-5xl md:text-7xl xl:text-8xl font-black text-white mb-10 leading-[0.9] tracking-tighter uppercase">
                            Engineering <br />
                            <span className="text-gradient-green text-neon-green">Digital Excellence</span>
                        </h3>
                        <div className="space-y-6 text-lg md:text-xl text-white/40 font-light leading-relaxed max-w-xl mb-16">
                            <p>
                                <motion.strong 
                                    whileHover={{ skewX: [0, -2, 2, 0], color: ["#fff", "#a3ff12", "#fff"] }}
                                    transition={{ duration: 0.2, repeat: Infinity, repeatType: "mirror" }}
                                    className="text-white font-black cursor-default inline-block"
                                >
                                    Muhammad Abdullah Tauqeer
                                </motion.strong> is a Full Stack Engineer dedicated to crafting high-performance digital ecosystems.
                            </p>
                            <p>
                                Specializing in scalable backend architectures and ultra-premium frontend experiences, blurring the line between code and art.
                            </p>
                        </div>

                        {/* 4 Pillars Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {pillars.map((pillar, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -5, borderColor: "rgba(163,255,18,0.4)" }}
                                    className="glass-card p-8 rounded-[2rem] border-white/5 transition-all group relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-neon-green/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                                    <div className="w-12 h-12 rounded-xl bg-neon-green/10 flex items-center justify-center mb-6 border border-neon-green/20 group-hover:scale-110 transition-transform">
                                        <pillar.icon className="w-5 h-5 text-neon-green" />
                                    </div>
                                    <h4 className="text-xl font-black text-white mb-2 uppercase tracking-wide">{pillar.title}</h4>
                                    <p className="text-sm text-white/40 font-medium">{pillar.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: Premium Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, type: "spring" }}
                        className="relative hidden lg:flex items-center justify-center"
                    >
                        <div className="relative w-full max-w-md aspect-[4/5] rounded-[3rem] overflow-hidden glass-card border border-white/10 group shadow-2xl">
                            <div className="absolute inset-0 bg-neon-green/5 group-hover:bg-neon-green/0 transition-colors z-10 pointer-events-none" />

                            {/* Ultra High Quality Generative Image */}
                            <Image
                                src="/about_workspace.png"
                                alt="Premium Developer Workspace"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                                priority
                            />

                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none" />

                            <div className="absolute bottom-8 left-8 right-8 z-30 flex items-center justify-between">
                                <div>
                                    <p className="text-[10px] font-mono text-neon-green uppercase tracking-[0.4em] mb-1">Archived_File</p>
                                    <p className="text-white font-black uppercase tracking-wider">MAT_Core.V3</p>
                                </div>
                                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center glass-card backdrop-blur-md">
                                    <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                                </div>
                            </div>
                        </div>

                        {/* Surrounding glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-neon-green/10 blur-[100px] rounded-full -z-10 animate-pulse pointer-events-none" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
