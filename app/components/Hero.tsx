"use client";

import { useEffect, useState } from "react";

export default function Hero() {
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const fullText = "PROBLEM SOLVER";

    useEffect(() => {
        const interval = setInterval(() => {
            setDisplayText((prev) => {
                if (!isDeleting) {
                    // Typing phase
                    if (prev.length < fullText.length) {
                        return fullText.slice(0, prev.length + 1);
                    } else {
                        // Done typing, start deleting after a delay
                        setTimeout(() => setIsDeleting(true), 1000);
                        return prev;
                    }
                } else {
                    // Deleting phase
                    if (prev.length > 0) {
                        return prev.slice(0, prev.length - 1);
                    } else {
                        // Done deleting, start typing again
                        setIsDeleting(false);
                        return "";
                    }
                }
            });
        }, 150);
        return () => clearInterval(interval);
    }, [isDeleting]);

    return (
        <section
            id="hero"
            className="relative min-h-screen w-full flex items-center justify-center px-8 py-20"
        >
            {/* Subtle accent glow top right */}
            <div className="absolute top-20 right-20 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-3xl text-center">
                {/* System status indicator */}
                <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 border border-slate-800 rounded-full bg-slate-900/50 backdrop-blur-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs font-mono-tactical text-slate-400">STATUS: ACTIVE</span>
                </div>

                {/* Main headline with typing animation */}
                <div className="mb-6">
                    <h1 className="text-6xl font-bold tracking-tighter mb-4 text-slate-50">
                        I&apos;m Affan Surya Wardana
                    </h1>
                    <div className="h-18 flex items-center justify-center">
                        <div className="text-4xl font-mono-tactical font-semibold text-blue-400 ">
                            {displayText}
                            {displayText.length < fullText.length && <span className="animate-pulse">▊</span>}
                        </div>
                    </div>
                </div>

                {/* Subheading */}
                <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                    Full-stack developer building scalable, efficient systems. I specialize in modern web
                    technologies and turning complex problems into elegant solutions.
                </p>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href="#projects"
                        className="group px-8 py-3 border border-blue-500/50 rounded-md text-slate-100 hover-glow transition-all duration-300 hover:bg-blue-500/10 hover:border-blue-400"
                    >
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        className="group px-8 py-3 bg-blue-500/10 border border-blue-500/50 rounded-md text-blue-400 hover-glow transition-all duration-300 hover:bg-blue-500/20 hover:border-blue-400"
                    >
                        Get In Touch
                    </a>
                </div>

                {/* Scroll indicator */}
                <div className="mt-20 flex justify-center">
                    <div className="animate-bounce">
                        <svg
                            className="w-6 h-6 text-slate-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
