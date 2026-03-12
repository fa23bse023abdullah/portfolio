"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Facebook, MessageCircle } from "lucide-react";

const contactMethods = [
    { icon: Mail, label: "Email", value: "abdullah@tauqeer.com", href: "mailto:abdullah@tauqeer.com" },
    { icon: MessageCircle, label: "WhatsApp", value: "+92 300 0000000", href: "https://wa.me/923000000000" },
    { icon: Github, label: "GitHub", value: "github.com/abdullah", href: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/abdullah", href: "https://linkedin.com" },
];

const Contact = () => {
    return (
        <section id="contact" className="py-40 relative bg-black overflow-hidden font-sans">
            <div className="absolute top-0 right-0 p-10 opacity-[0.02] pointer-events-none select-none">
                <div className="text-[15rem] font-black text-white leading-none">SIGNAL</div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-24 items-start">

                    {/* Left Side: Text & Grid of Contacts */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mb-20"
                        >
                            <h2 className="text-sm font-mono tracking-[0.5em] text-neon-green mb-8 uppercase">Let&apos;s Connect</h2>
                            <h3 className="text-6xl md:text-8xl font-black text-white mb-10 leading-[0.85] tracking-tighter uppercase">
                                INITIATE <br />
                                <span className="text-neon-green">TRANSMISSION</span>
                            </h3>
                            <p className="text-white/40 text-xl font-light leading-relaxed max-w-xl">
                                Ready to build the next generation of scalable enterprise systems? Reach out through any of these secure channels.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {contactMethods.map((method, i) => (
                                <motion.a
                                    key={i}
                                    href={method.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass-card p-10 rounded-[2.5rem] border border-white/5 hover:border-neon-green/30 transition-all group"
                                >
                                    <div className="w-14 h-14 glass-card rounded-2xl flex items-center justify-center text-neon-green border-white/5 mb-8 group-hover:shadow-[0_0_20px_rgba(163,255,18,0.2)] transition-all">
                                        <method.icon className="w-6 h-6" />
                                    </div>
                                    <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em] mb-2">{method.label}</p>
                                    <p className="text-white text-lg font-bold truncate group-hover:text-neon-green transition-colors">{method.value}</p>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Message Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="glass-card p-12 md:p-16 rounded-[4rem] border border-white/5 relative">
                            <div className="absolute inset-0 bg-neon-green/5 blur-3xl rounded-full opacity-20 -z-10" />

                            <form className="space-y-12">
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-neon-green uppercase tracking-[0.5em] ml-4">Identity</label>
                                    <input
                                        type="text"
                                        placeholder="EX: JOHN DOE"
                                        className="w-full p-8 glass-card border-transparent focus:border-neon-green/30 rounded-3xl text-white outline-none transition-all placeholder:text-white/5 text-sm uppercase font-black tracking-widest"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-neon-green uppercase tracking-[0.5em] ml-4">Channel</label>
                                    <input
                                        type="email"
                                        placeholder="EX: JOHN@WORK.COM"
                                        className="w-full p-8 glass-card border-transparent focus:border-neon-green/30 rounded-3xl text-white outline-none transition-all placeholder:text-white/5 text-sm uppercase font-black tracking-widest"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-neon-green uppercase tracking-[0.5em] ml-4">Requirement</label>
                                    <textarea
                                        rows={4}
                                        placeholder="YOUR VISION..."
                                        className="w-full p-8 glass-card border-transparent focus:border-neon-green/30 rounded-3xl text-white outline-none transition-all placeholder:text-white/5 text-sm uppercase font-black tracking-widest resize-none"
                                    />
                                </div>
                                <button className="w-full py-8 bg-neon-green text-black font-black uppercase tracking-[0.5em] rounded-[2.5rem] hover:shadow-[0_0_40px_rgba(163,255,18,0.5)] transition-all flex items-center justify-center gap-4">
                                    Transmit
                                    <Send className="w-5 h-5" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
