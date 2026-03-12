"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const milestones = [
    {
        year: "2022",
        tag: "GENESIS",
        title: "Started Programming",
        desc: "Began my journey into software development — learning C++, algorithms, and the fundamentals of logic that became the foundation of everything.",
        accent: "from-neon-green/30 to-transparent",
        num: "01"
    },
    {
        year: "2023",
        tag: "FIRST DEPLOY",
        title: "First Web Applications",
        desc: "Shipped my first real web applications using HTML, CSS, and JavaScript. Learned React and started building full CRUD projects for real users.",
        accent: "from-white/10 to-transparent",
        num: "02"
    },
    {
        year: "2024",
        tag: "SYSTEMS ARCHITECT",
        title: "System Projects & Networking",
        desc: "Engineered CRM, Hospital, Inventory, and Restaurant management systems. Integrated networking protocols and production-grade databases.",
        accent: "from-neon-green/20 to-transparent",
        num: "03"
    },
    {
        year: "2025",
        tag: "ADVANCED SCALE",
        title: "Advanced Architectures",
        desc: "Building scalable full-stack systems with Next.js, AI integrations, and cloud infrastructure. Pushing the boundaries of what modern software can be.",
        accent: "from-white/10 to-transparent",
        num: "04"
    }
];

const Experience = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section ref={sectionRef} id="experience" className="py-40 relative bg-black overflow-hidden font-sans">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-green/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/3 blur-[120px] rounded-full pointer-events-none" />

            {/* Faded background label */}
            <div className="absolute top-20 right-8 opacity-[0.02] pointer-events-none select-none">
                <div className="text-[15vw] font-black text-white leading-none rotate-90 origin-top-right">JOURNEY</div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <p className="text-[10px] font-mono tracking-[0.6em] text-neon-green uppercase mb-6 flex items-center gap-4">
                        <span className="w-10 h-[1px] bg-neon-green/40" />
                        Chronological Archive
                    </p>
                    <h2 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none">
                        MY <span className="text-neon-green">JOURNEY</span>
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Animated Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/5 overflow-hidden -translate-x-1/2">
                        <motion.div
                            style={{ height: lineHeight }}
                            className="w-full bg-gradient-to-b from-neon-green via-neon-green/50 to-transparent origin-top"
                        />
                    </div>

                    <div className="space-y-20 md:space-y-32">
                        {milestones.map((m, i) => {
                            const isRight = i % 2 === 0;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: isRight ? -60 : 60 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.1 }}
                                    className={`relative flex flex-col ${isRight ? "md:flex-row" : "md:flex-row-reverse"} items-start md:items-center gap-8 pl-20 md:pl-0`}
                                >
                                    {/* The Dot */}
                                    <div className="absolute left-8 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-20">
                                        <motion.div
                                            whileInView={{ scale: [0, 1.3, 1] }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 0.2 }}
                                            className="relative"
                                        >
                                            <div className="w-5 h-5 rounded-full bg-neon-green shadow-[0_0_20px_rgba(163,255,18,0.8)] relative z-10" />
                                            <div className="absolute inset-0 w-5 h-5 rounded-full bg-neon-green/30 animate-ping" />
                                        </motion.div>
                                    </div>

                                    {/* Card */}
                                    <div className={`w-full md:w-[45%] ${isRight ? "md:pr-16" : "md:pl-16"}`}>
                                        <motion.div
                                            whileHover={{ y: -8, borderColor: "rgba(163,255,18,0.4)" }}
                                            className="glass-card p-10 md:p-12 rounded-[3rem] border border-white/5 group relative overflow-hidden transition-all duration-500"
                                        >
                                            {/* Gradient top edge */}
                                            <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${m.accent}`} />

                                            {/* Background number */}
                                            <div className="absolute -bottom-6 -right-4 text-[7rem] font-black text-white/[0.03] leading-none select-none pointer-events-none">
                                                {m.num}
                                            </div>

                                            {/* Hover glow */}
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-green/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                                            <div className="flex items-center gap-4 mb-6">
                                                <span className="text-5xl md:text-6xl font-black text-white/10 font-mono">{m.year}</span>
                                                <span className="text-[9px] font-black text-neon-green uppercase tracking-[0.4em] px-3 py-1 border border-neon-green/20 rounded-full bg-neon-green/5">
                                                    {m.tag}
                                                </span>
                                            </div>

                                            <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tight group-hover:text-neon-green transition-colors">
                                                {m.title}
                                            </h3>
                                            <p className="text-white/40 text-[15px] font-light leading-relaxed">
                                                {m.desc}
                                            </p>
                                        </motion.div>
                                    </div>

                                    {/* Spacer for other side */}
                                    <div className="hidden md:block md:w-[45%]" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
