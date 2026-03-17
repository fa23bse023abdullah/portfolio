"use client";

import { motion, useScroll, useTransform, Variants, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { Github, Linkedin, Facebook, MessageCircle, ArrowRight } from "lucide-react";

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const yText = useTransform(scrollY, [0, 500], [0, 200]);
    const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

    // 3D Tilt Logic
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 20 });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent | MouseEvent) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 40;
        const yPos = (clientY / window.innerHeight - 0.5) * 40;

        gsap.to(".hero-parallax", {
            x: xPos,
            y: yPos,
            duration: 2,
            ease: "power2.out"
        });

        // Update 3D Tilt
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            mouseX.set((clientX - rect.left) / rect.width - 0.5);
            mouseY.set((clientY - rect.top) / rect.height - 0.5);
        }
    };

    useEffect(() => {
        window.addEventListener("mousemove", (e) => handleMouseMove(e));
        return () => window.removeEventListener("mousemove", (e) => handleMouseMove(e));
    }, []);

    const name = "ABDULLAH";
    const surname = "TAUQEER";

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.3 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring" as const, stiffness: 100, damping: 20 }
        }
    };

    const socialIcons = [
        { icon: Github, href: "#" },
        { icon: Linkedin, href: "#" },
        { icon: Facebook, href: "#" },
        { icon: MessageCircle, href: "#" },
    ];

    return (
        <section ref={containerRef} id="hero" className="relative min-h-[110vh] flex items-center justify-center pt-20 pb-20 overflow-hidden bg-black font-sans">
            {/* Background Faded Typography */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-[0.03]">
                <motion.div style={{ y: yText }} className="text-[30vw] font-black text-white leading-none uppercase hero-parallax select-none">
                    ENGINEER
                </motion.div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Left Column: Text Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="order-2 lg:order-1"
                    >
                        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-[1px] bg-neon-green" />
                            <h2 className="text-neon-green font-mono tracking-[0.4em] text-[10px] md:text-xs uppercase font-black">
                                SYSTEM ARCHITECT & FULL-STACK
                            </h2>
                        </motion.div>

                        <motion.div variants={itemVariants} className="relative mb-12">
                            <h1 className="text-sm md:text-base font-mono tracking-[0.5em] text-white/30 mb-4 uppercase">MUHAMMAD</h1>
                            <div className="flex flex-col text-7xl md:text-9xl font-black leading-[0.85] tracking-tighter uppercase overflow-hidden">
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                                    className="text-white block"
                                >
                                    {name}
                                </motion.span>
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                                    className="text-neon-green block"
                                >
                                    {surname}
                                </motion.span>
                            </div>
                        </motion.div>

                        <motion.p variants={itemVariants} className="text-xl md:text-3xl text-white/50 font-light leading-relaxed max-w-xl mb-16 px-1">
                            Building <span className="text-white font-bold border-b-2 border-neon-green/30 italic">Intelligent Scalable Systems</span> that push the boundaries of digital experiences.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-wrap gap-10 items-center">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(163,255,18,0.4)" }}
                                whileTap={{ scale: 0.98 }}
                                className="px-12 py-6 bg-neon-green text-black text-[10px] font-black rounded-2xl flex items-center gap-4 transition-all uppercase tracking-widest"
                            >
                                Initiate Protocol
                                <ArrowRight className="w-4 h-4" />
                            </motion.button>
                            <a href="#projects" className="group text-[10px] font-black text-white/40 hover:text-neon-green uppercase tracking-[0.4em] transition-all flex items-center gap-3">
                                <span className="border-b border-transparent group-hover:border-neon-green pb-1">View Archives</span>
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Portrait & Floating Elements */}
                    <div className="order-1 lg:order-2 relative flex items-center justify-center perspective-1000">
                        <motion.div
                            initial={{ opacity: 0, x: 100, rotate: 5 }}
                            animate={{ opacity: 1, x: 0, rotate: 0 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                            style={{ rotateX, rotateY }}
                            className="relative"
                        >
                            {/* Glowing Aura Background */}
                            <div className="absolute -inset-10 bg-neon-green/20 blur-[80px] rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
                            
                            {/* Main Frame */}
                            <div className="relative w-[300px] h-[450px] md:w-[450px] md:h-[600px] rounded-[4rem] border border-white/10 p-4 group bg-black/40 backdrop-blur-sm overflow-hidden">
                                
                                {/* Scanning Line Effect */}
                                <div className="absolute inset-x-0 h-[2px] bg-neon-green/50 z-20 top-0 animate-[scan_4s_linear_infinite] pointer-events-none" />
                                
                                <div className="absolute inset-0 bg-neutral-900 rounded-[3.8rem] overflow-hidden transition-all duration-700">
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                                    
                                    {/* Scanline Texture Overlay */}
                                    <div className="absolute inset-0 opacity-10 pointer-events-none z-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

                                    <Image
                                        src="/abdullah_portrait.jpg"
                                        alt="Muhammad Abdullah Tauqeer"
                                        fill
                                        className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                                        priority
                                    />

                                    {/* Bottom Label Reveal */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        className="absolute bottom-12 left-12 z-20"
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-2 h-2 rounded-full bg-neon-green animate-ping" />
                                            <p className="text-[10px] font-mono tracking-[0.4em] text-neon-green uppercase">ACTIVE_CORE</p>
                                        </div>
                                        <p className="text-xl font-black text-white uppercase tracking-wider">MAT.V3 // STABLE</p>
                                    </motion.div>
                                    
                                    {/* HUD Elements */}
                                    <div className="absolute top-10 right-10 z-20 hidden md:block">
                                        <div className="flex flex-col items-end gap-1 opacity-40">
                                            <div className="w-16 h-1 bg-white/20" />
                                            <div className="w-10 h-1 bg-neon-green" />
                                            <p className="text-[8px] font-mono text-white mt-1 uppercase tracking-tighter">Lat: 33.6844</p>
                                            <p className="text-[8px] font-mono text-white uppercase tracking-tighter">Long: 73.0479</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Corners UI - Enhanced */}
                                <div className="absolute -top-1 -left-1 w-24 h-24 border-t-2 border-l-2 border-neon-green rounded-tl-[4rem] pointer-events-none z-30 opacity-60" />
                                <div className="absolute -bottom-1 -right-1 w-24 h-24 border-b-2 border-r-2 border-neon-green rounded-br-[4rem] pointer-events-none z-30 opacity-60" />
                                
                                {/* Floating Tech Tags */}
                                <motion.div
                                    animate={{ y: [0, -20, 0], x: [0, 5, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -right-8 top-20 px-6 py-3 glass-card rounded-2xl border-white/10 text-[10px] font-black text-neon-green shadow-lg shadow-neon-green/10 uppercase tracking-widest z-30 hidden md:block"
                                >
                                    Next.js 16
                                </motion.div>
                                <motion.div
                                    animate={{ y: [0, 20, 0], x: [0, -5, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute -left-12 bottom-40 px-6 py-3 glass-card rounded-2xl border-white/10 text-[10px] font-black text-white shadow-lg shadow-white/5 uppercase tracking-widest z-30 hidden md:block"
                                >
                                    AI / ML
                                </motion.div>
                            </div>

                            {/* Spaced Out Socials */}
                            <div className="absolute -right-20 top-1/2 -translate-y-1/2 flex-col gap-10 hidden lg:flex">
                                {socialIcons.map((social, i) => (
                                    <motion.a
                                        key={i}
                                        href={social.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1 + (i * 0.1) }}
                                        whileHover={{ scale: 1.2, x: -10, borderColor: "#a3ff12", color: "#a3ff12" }}
                                        className="w-14 h-14 rounded-full border border-white/5 flex items-center justify-center text-white/20 glass-card transition-all"
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
