"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const StatItem = ({ label, value, suffix = "" }: { label: string; value: number; suffix?: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <div ref={ref} className="text-center p-8 glass-card rounded-[2rem] border-neon-green/10 hover:border-neon-green/30 transition-colors">
            <h3 className="text-5xl md:text-6xl font-black text-white mb-2 font-mono">
                {count}{suffix}
            </h3>
            <p className="text-neon uppercase tracking-widest text-xs font-bold">{label}</p>
        </div>
    );
};

export default function Stats() {
    return (
        <section className="py-24 relative overflow-hidden bg-black">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    <StatItem label="Projects" value={50} suffix="+" />
                    <StatItem label="Satisfaction" value={99} suffix="%" />
                    <StatItem label="Users Impacted" value={100} suffix="K" />
                    <StatItem label="Technologies" value={15} suffix="+" />
                </div>
            </div>
        </section>
    );
}
