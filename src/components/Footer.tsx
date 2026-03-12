"use client";

import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-20 relative bg-black border-t border-white/5 overflow-hidden font-sans">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-neon-green/30 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="text-center md:text-left">
                        <h3 className="text-3xl font-black text-white tracking-[0.2em] mb-4">MAT<span className="text-neon-green">.</span></h3>
                        <p className="text-white/30 text-xs font-mono tracking-widest uppercase">
                            © 2026 MUHAMMAD ABDULLAH TAUQEER • SYSTEM_V3.0
                        </p>
                    </div>

                    <div className="flex items-center gap-8">
                        <a href="#" className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center border-white/5 text-white/30 hover:text-neon-green hover:border-neon-green/30 transition-all group">
                            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </a>
                        <a href="#" className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center border-white/5 text-white/30 hover:text-neon-green hover:border-neon-green/30 transition-all group">
                            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </a>
                        <a href="#" className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center border-white/5 text-white/30 hover:text-neon-green hover:border-neon-green/30 transition-all group">
                            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </a>
                    </div>

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="p-4 glass-card rounded-2xl border-white/10 hover:border-neon-green/50 hover:text-neon-green transition-all flex flex-col items-center gap-1"
                    >
                        <ArrowUp className="w-4 h-4 animate-bounce" />
                        <span className="text-[10px] font-black uppercase tracking-tighter">System Restore</span>
                    </button>
                </div>

                <div className="mt-16 pt-8 border-t border-white/[0.02] flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-white/10">
                    <div className="flex items-center gap-2">
                        STABLE VERSION <span className="text-neon-green/40">2026.03.12</span>
                    </div>
                    <div className="flex items-center gap-2">
                        LOCATED IN <span className="text-white/30">ISLAMABAD, PK</span>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
