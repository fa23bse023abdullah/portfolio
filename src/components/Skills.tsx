"use client";

import { motion } from "framer-motion";
import { Code2, Server, Smartphone, Database, Cloud, BrainCircuit } from "lucide-react";

const categories = [
    {
        title: "Frontend Engineering",
        icon: <Code2 className="w-6 h-6" />,
        skills: ["React / Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js", "GSAP"]
    },
    {
        title: "Backend Development",
        icon: <Server className="w-6 h-6" />,
        skills: ["Node.js / Express", "Typescript", "Python / FastAPI", "RESTful APIs", "Socket.io", "GraphQL"]
    },
    {
        title: "Mobile Solutions",
        icon: <Smartphone className="w-6 h-6" />,
        skills: ["React Native", "Expo", "Flutter", "iOS / Android Build", "App Store Deployment"]
    },
    {
        title: "Database Architecture",
        icon: <Database className="w-6 h-6" />,
        skills: ["PostgreSQL", "MongoDB", "MySQL", "Prisma ORM", "Redis Caching", "Firebase"]
    },
    {
        title: "Cloud & DevOps",
        icon: <Cloud className="w-6 h-6" />,
        skills: ["AWS / Vercel", "Docker", "CI/CD Pipelines", "Nginx", "Linux Server", "Git / GitHub"]
    },
    {
        title: "AI & ML",
        icon: <BrainCircuit className="w-6 h-6" />,
        skills: ["OpenAI API", "LangChain", "Vector Databases", "Prompt Engineering", "NLP Integration"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-40 relative bg-black overflow-hidden font-sans">
            {/* Dynamic background lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-neon-green/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <div className="w-10 h-[1px] bg-neon-green/30" />
                        <span className="text-[10px] font-black text-neon-green uppercase tracking-[0.6em]">Tech Matrix</span>
                        <div className="w-10 h-[1px] bg-neon-green/30" />
                    </motion.div>

                    <div className="flex flex-col items-center">
                        <motion.h3
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-7xl md:text-9xl font-black text-white leading-none uppercase tracking-tighter text-center"
                        >
                            TECH <br />
                            <span className="text-neon-green overflow-hidden block">
                                <motion.span
                                    initial={{ y: "100%" }}
                                    whileInView={{ y: 0 }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="block"
                                >
                                    ARSENAL
                                </motion.span>
                            </span>
                        </motion.h3>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 20,
                                delay: idx * 0.1
                            }}
                            className="glass-card p-10 rounded-[3rem] border border-white/5 hover:border-neon-green/30 transition-all group relative overflow-hidden h-full"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-green/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center text-neon-green border-white/5">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-black text-white uppercase tracking-tight">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="px-4 py-2 glass-card rounded-xl border-white/5 text-[10px] font-bold text-white/40 uppercase tracking-widest hover:border-neon-green/20 hover:text-neon-green transition-all"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
