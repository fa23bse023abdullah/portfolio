"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, MessageCircle } from "lucide-react";

export default function SocialSidebar() {
    const socials = [
        { icon: <Github className="w-5 h-5" />, href: "https://github.com", label: "GitHub" },
        { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com", label: "LinkedIn" },
        { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com", label: "Facebook" },
        { icon: <MessageCircle className="w-5 h-5" />, href: "https://wa.me/yournumber", label: "WhatsApp" },
    ];

    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-6">
            <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-neon-green/20 mx-auto" />
            {socials.map((social, i) => (
                <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + i * 0.1, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.2, color: "#a3ff12" }}
                    className="p-3 glass-card rounded-full border border-white/5 hover:border-neon-green/30 text-white/50 transition-colors group relative"
                    aria-label={social.label}
                >
                    {social.icon}
                    <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-2 py-1 glass-card rounded text-[10px] text-neon opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {social.label}
                    </span>
                </motion.a>
            ))}
            <div className="w-[1px] h-20 bg-gradient-to-t from-transparent to-neon-green/20 mx-auto" />
        </div>
    );
}
