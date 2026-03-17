"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github, X } from "lucide-react";
import Image from "next/image";

interface Project {
    id: string;
    title: string;
    description: string;
    longDesc: string;
    tech: string[];
    image: string;
    github: string;
    demo: string;
}

const projects: Project[] = [
    {
        id: "aether-crm",
        title: "Aether CRM Hub",
        description: "Next-gen ecosystem for enterprise relationship management with predictive AI analytics and multi-tenant synchronization.",
        longDesc: "A complete distributed solution for corporate sales cycles. Features real-time pipeline visualization, automated lead scoring via machine learning, and high-performance PostgreSQL indexing for millions of records.",
        tech: ["Next.js", "PostgreSQL", "Redis", "TensorFlow"],
        image: "/project_crm.png",
        github: "#",
        demo: "#"
    },
    {
        id: "biosync-health",
        title: "BioSync Health",
        description: "Decentralized medical infrastructure for hospital networks. Streamlining HIPAA-compliant patient synchronization.",
        longDesc: "A robust health-tech platform designed for laboratory automation. Implements secure WebSocket communication for real-time diagnostic updates and mission-critical data integrity.",
        tech: ["React", "Node.js", "Socket.io", "Docker"],
        image: "/project_hospital.png",
        github: "#",
        demo: "#"
    },
    {
        id: "nexus-inventory",
        title: "Nexus Inventory Pro",
        description: "Industrial warehouse logistics engine with barcode neural mapping and predictive supply chain reporting.",
        longDesc: "Monitors global logistics in real-time. Features automated stock replenishment, warehouse heatmaps, and advanced MongoDB aggregation for supply chain optimization.",
        tech: ["TypeScript", "MongoDB", "Framer Motion", "GraphQL"],
        image: "/project_inventory.png",
        github: "#",
        demo: "#"
    },
    {
        id: "titan-pos",
        title: "Titan POS Systems",
        description: "Ultra-low latency billing infrastructure for high-volume hospitality. Integrated with global payment gateways.",
        longDesc: "A mission-critical POS solution for the dining industry. Integrated with Stripe for seamless transactions and Firebase for real-time kitchen display synchronization.",
        tech: ["React", "Firebase", "Stripe", "Cloud Functions"],
        image: "/project_restaurant.png",
        github: "#",
        demo: "#"
    },
    {
        id: "mentor-nexus",
        title: "Mentor Nexus MS",
        description: "Centralized pedagogical management focusing on educator performance metrics and automated grading logic.",
        longDesc: "Advanced academic staff platform. Tracks behavioral analytics, automates lesson planning, and generates high-fidelity performance reports for institutional oversight.",
        tech: ["Next.js", "Prisma", "AWS S3", "PDF.js"],
        image: "/project_teacher.png",
        github: "#",
        demo: "#"
    }
];

const Projects = () => {
    const [index, setIndex] = useState(0);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const next = () => setIndex((prev) => (prev + 1) % projects.length);
    const prev = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);

    return (
        <section id="projects" className="py-32 relative bg-black overflow-hidden font-sans">
            {/* Decorative background typography */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
                <div className="text-[20rem] font-black text-white leading-none uppercase">WORK</div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-24 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, type: "spring" }}
                        className="flex flex-col items-center lg:items-start"
                    >
                        <h2 className="text-sm font-mono tracking-[0.5em] text-neon-green mb-6 uppercase">Selected Portfolio</h2>
                        <div className="flex flex-wrap justify-center lg:justify-start text-5xl md:text-8xl font-black text-white leading-none gap-x-6 gap-y-2 uppercase">
                            <span>F E A T U R E D</span>
                            <span className="text-neon-green">P R O J E C T S</span>
                        </div>
                    </motion.div>
                </div>

                <div className="relative flex items-center justify-center min-h-[640px] md:min-h-[720px]">
                    <div className="relative w-full flex items-center justify-center">
                        <AnimatePresence mode="popLayout" initial={false}>
                            {projects.map((project, i) => {
                                const offset = i - index;
                                const wrappedOffset = ((offset + projects.length + Math.floor(projects.length / 2)) % projects.length) - Math.floor(projects.length / 2);

                                const isCenter = wrappedOffset === 0;
                                const isLeft = wrappedOffset === -1;
                                const isRight = wrappedOffset === 1;

                                if (!isCenter && !isLeft && !isRight) return null;

                                return (
                                    <motion.div
                                        key={project.id}
                                        initial={{ opacity: 0, x: -500 }}
                                        animate={{
                                            opacity: isCenter ? 1 : 0.35,
                                            scale: isCenter ? 1 : 0.78,
                                            x: isCenter ? 0 : isLeft ? -310 : 310,
                                            rotateY: isCenter ? 0 : isLeft ? 30 : -30,
                                            transition: { type: "spring", stiffness: 200, damping: 25 }
                                        }}
                                        style={{ zIndex: isCenter ? 20 : 10, perspective: "1200px" }}
                                        exit={{ opacity: 0, x: 500 }}
                                        className="absolute w-[280px] md:w-[500px]"
                                    >
                                        <motion.div
                                            whileHover={isCenter ? { scale: 1.04, rotateX: 3, rotateY: -3 } : {}}
                                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                            className="glass-card rounded-[3.5rem] overflow-hidden border-white/5 group cursor-pointer"
                                            onClick={() => isCenter && setSelectedProject(project)}
                                        >
                                            {/* Project image */}
                                            <div className="h-64 overflow-hidden relative">
                                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                                />
                                            </div>

                                            <div className="p-10 relative z-20">
                                                <div className="flex gap-2 mb-6 flex-wrap">
                                                    {project.tech.slice(0, 2).map((t) => (
                                                        <span key={t} className="text-[9px] px-4 py-2 rounded-full bg-neon-green/5 text-neon-green border border-neon-green/20 uppercase tracking-widest font-black">
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase tracking-tight group-hover:text-neon-green transition-colors">{project.title}</h3>
                                                <p className="text-white/40 text-[13px] font-medium leading-relaxed mb-8 line-clamp-2">
                                                    {project.description}
                                                </p>
                                                <div className="flex gap-4">
                                                    <button
                                                        onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                                                        className="flex-1 py-4 bg-white text-black text-[10px] font-black rounded-2xl hover:bg-neon-green transition-all uppercase tracking-[0.2em]"
                                                    >
                                                        View Details
                                                    </button>
                                                    <a href={project.github} className="p-4 glass-card rounded-2xl border border-white/10 hover:border-neon-green/50 hover:text-neon-green transition-all text-white" onClick={(e) => e.stopPropagation()}>
                                                        <Github className="w-5 h-5" />
                                                    </a>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>

                    <button onClick={prev} className="absolute left-0 md:left-16 z-30 p-4 md:p-5 rounded-full glass-card border border-white/10 hover:border-neon-green/50 transition-all group">
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white/40 group-hover:text-neon-green" />
                    </button>
                    <button onClick={next} className="absolute right-0 md:right-16 z-30 p-4 md:p-5 rounded-full glass-card border border-white/10 hover:border-neon-green/50 transition-all group">
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white/40 group-hover:text-neon-green" />
                    </button>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center gap-3 mt-12">
                    {projects.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`transition-all duration-300 rounded-full ${i === index ? "w-8 h-2 bg-neon-green" : "w-2 h-2 bg-white/20 hover:bg-white/40"}`}
                        />
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-12">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/95 backdrop-blur-3xl"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            className="relative w-full max-w-5xl glass-card rounded-[3rem] border border-white/10 overflow-hidden"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-6 right-6 z-[210] p-4 glass-card hover:bg-neon-green hover:text-black rounded-full transition-all text-white"
                            >
                                <X className="w-5 h-5" />
                            </button>
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                {/* Image side */}
                                <div className="relative h-64 md:h-full min-h-[300px] bg-neutral-900">
                                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-transparent to-transparent z-10" />
                                    <Image
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                {/* Content side */}
                                <div className="p-8 md:p-14 flex flex-col justify-center">
                                    <h3 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">{selectedProject.title}</h3>
                                    <p className="text-white/50 text-base font-light leading-relaxed mb-10">{selectedProject.longDesc}</p>
                                    <div className="flex flex-wrap gap-3 mb-12">
                                        {selectedProject.tech.map((t) => (
                                            <span key={t} className="px-5 py-2 rounded-2xl bg-white/[0.03] text-white font-black border border-white/10 text-[10px] uppercase tracking-wider">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-4 mt-auto">
                                        <a href={selectedProject.demo} className="flex-1 py-6 bg-neon-green text-black font-black text-center rounded-3xl uppercase tracking-[0.2em] text-xs hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                                            <ExternalLink className="w-4 h-4" /> Live Demo
                                        </a>
                                        <a href={selectedProject.github} className="p-6 glass-card border border-white/10 rounded-3xl hover:border-neon-green/50 transition-all flex items-center justify-center text-white">
                                            <Github className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
