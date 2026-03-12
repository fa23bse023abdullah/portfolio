"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X, FileText, Facebook, MessageCircle, MapPin, Globe } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);

        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isOpen]);

    const menuItems = [
        { name: "ABOUT", href: "#about" },
        { name: "SKILLS", href: "#skills" },
        { name: "PROJECTS", href: "#projects" },
        { name: "CONTACT", href: "#contact" },
    ];

    const socialIcons = [
        { icon: Github, href: "https://github.com" },
        { icon: Linkedin, href: "https://linkedin.com" },
        { icon: Facebook, href: "https://facebook.com" },
        { icon: MessageCircle, href: "https://wa.me/923000000000" },
        { icon: Mail, href: "mailto:abdullah@tauqeer.com" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${scrolled ? "bg-black/80 backdrop-blur-2xl py-5 border-b border-white/5" : "bg-transparent py-8"
                    }`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <Link href="/" className="flex flex-col group relative">
                        <span className="text-xl md:text-2xl font-black text-white leading-none uppercase tracking-widest transition-colors font-sans py-1">
                            ABDULLAH <span className="text-neon-green">.</span>
                        </span>
                        <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-neon-green group-hover:w-full transition-all duration-500" />
                    </Link>

                    <div className="flex items-center gap-10">
                        {/* Desktop Links */}
                        <div className="hidden lg:flex items-center gap-10 bg-white/5 px-8 py-4 rounded-full border border-white/5 backdrop-blur-md">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="relative text-[10px] sm:text-xs font-black text-white/50 hover:text-white tracking-[0.3em] transition-all uppercase group"
                                >
                                    {item.name}
                                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-neon-green opacity-0 group-hover:opacity-100 transition-all" />
                                </Link>
                            ))}
                        </div>

                        {/* Menu & CV CTA */}
                        <div className="flex items-center gap-4">
                            <motion.a
                                href="/resume.pdf"
                                target="_blank"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="hidden md:flex items-center gap-2 px-6 py-3 bg-neon-green text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:shadow-[0_0_20px_rgba(163,255,18,0.4)] transition-all"
                            >
                                Resume
                            </motion.a>

                            {/* Magnetic menu trigger toggle */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsOpen(true)}
                                className="relative w-14 h-14 md:w-16 md:h-16 rounded-full glass-card border-white/10 flex items-center justify-center hover:border-neon-green transition-all group overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-neon-green translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-20" />
                                <Menu className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-neon-green transition-colors" />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Premium Full-Screen Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ clipPath: "circle(0% at 90% 10%)" }}
                        animate={{ clipPath: "circle(150% at 50% 50%)" }}
                        exit={{ clipPath: "circle(0% at 90% 10%)" }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 z-[110] bg-black/95 backdrop-blur-3xl overflow-y-auto overflow-x-hidden flex flex-col"
                    >
                        {/* Background typography reveal */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center opacity-[0.02] pointer-events-none select-none">
                            <span className="text-[40vw] font-black text-white uppercase leading-none truncate">MAT</span>
                        </div>

                        {/* Top Bar inside overlay */}
                        <div className="absolute top-8 left-6 md:left-12">
                            <span className="text-xl md:text-2xl font-black text-white leading-none uppercase tracking-widest">
                                ABDULLAH <span className="text-neon-green">.</span>
                            </span>
                        </div>

                        <div className="absolute top-8 right-6 md:right-12 flex items-center gap-6">
                            <motion.button
                                onClick={() => setIsOpen(false)}
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-neon-green transition-all group"
                            >
                                <X className="w-6 h-6 text-white group-hover:text-neon-green transition-colors" />
                            </motion.button>
                        </div>

                        {/* Main Interaction Area */}
                        <div className="container px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mt-auto mb-auto w-full max-w-6xl z-10 pt-32 pb-12 mx-auto">

                            {/* Left Side: Profile Info */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, type: "spring" }}
                                className="hidden md:flex flex-col justify-center border-r border-white/10 pr-12"
                            >
                                <div className="w-24 h-24 rounded-full border border-neon-green/30 p-2 mb-8 relative group cursor-crosshair">
                                    <div className="absolute inset-0 bg-neon-green opacity-0 group-hover:opacity-20 blur-2xl transition-all" />
                                    <div className="w-full h-full bg-neutral-900 rounded-full flex items-center justify-center text-neon-green font-black text-2xl">MAT</div>
                                </div>

                                <h3 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-4 leading-tight">
                                    ENGINEERING THE <br /><span className="text-neon-green">FUTURE</span>
                                </h3>

                                <p className="text-white/40 text-lg font-light leading-relaxed mb-10 max-w-md">
                                    Crafting scalable backends and immersive frontend experiences. Available for ambitious tech ventures.
                                </p>

                                <div className="flex gap-4 items-center">
                                    <a href="/resume.pdf" className="px-8 py-4 bg-neon-green text-black font-black uppercase text-xs tracking-widest rounded-full hover:scale-105 active:scale-95 transition-all">
                                        Download CV
                                    </a>
                                </div>
                            </motion.div>

                            {/* Right Side: Scaled down Links */}
                            <div className="flex flex-col items-start md:items-end justify-center space-y-2 md:space-y-4 pt-10 md:pt-0">
                                <p className="text-[10px] font-mono text-neon-green uppercase tracking-[0.4em] mb-4 pl-2 md:pl-0">Navigation</p>
                                {menuItems.map((item, i) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 + (i * 0.1), type: "spring" }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className="group relative inline-block py-2"
                                        >
                                            <span className="text-4xl md:text-5xl lg:text-7xl font-black text-white/30 group-hover:text-white transition-all duration-300 uppercase tracking-tight flex items-center gap-6">
                                                <span className="w-6 h-[2px] bg-neon-green opacity-0 group-hover:opacity-100 transition-opacity hidden md:block" />
                                                {item.name}
                                            </span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Mobile only Profile display */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="md:hidden flex flex-col items-center text-center mt-12 w-full max-w-[280px] mx-auto"
                            >
                                <a href="/resume.pdf" className="w-full py-5 bg-neon-green text-black font-black uppercase text-xs tracking-widest rounded-full active:scale-95 transition-all">
                                    Download CV
                                </a>
                            </motion.div>

                        </div>

                        {/* Footer Socials */}
                        <div className="w-full px-6 flex flex-col sm:flex-row justify-center sm:justify-between items-center z-20 pb-8 mt-auto">
                            <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em] hidden sm:block">
                                Based in Pakistan
                            </p>

                            <div className="flex gap-6 justify-center w-full sm:w-auto">
                                {socialIcons.map((social, i) => (
                                    <motion.a
                                        key={i}
                                        href={social.href}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.7 + (i * 0.05) }}
                                        whileHover={{ scale: 1.15, rotate: 5, backgroundColor: "#a3ff12", color: "#000", borderColor: "#a3ff12" }}
                                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 glass-card transition-all"
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
