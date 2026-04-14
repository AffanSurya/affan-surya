"use client";

import { useEffect, useState, useRef } from "react";

const TERMINAL_COMMANDS = [
    "",
    "$ whoami",
    "Affan Surya Wardana",
    "$",
    "$ skills --list",
    "✓ React • Next.js • TypeScript • Node.js",
    "✓ Tailwind CSS • PostgreSQL • MongoDB",
    "✓ System Design • Problem Solving",
    "$",
    "$ status",
    "AVAILABLE FOR: Freelance Projects & Full-time Roles",
    "TIMEZONE: WIB (UTC+7)",
    "RESPONSE_TIME: 24 hours",
];

export default function TerminalInterface() {
    const [displayedLines, setDisplayedLines] = useState<string[]>([]);
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Intersection Observer untuk detect visibility
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
                // Reset animation saat tidak terlihat
                if (!entry.isIntersecting) {
                    setDisplayedLines([]);
                }
            },
            { threshold: 0.1 },
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Animasi hanya berjalan ketika visible
    useEffect(() => {
        if (!isVisible) return;

        setDisplayedLines([]);
        let count = 0;

        // Tampilkan baris pertama langsung
        setDisplayedLines((prev) => [...prev, TERMINAL_COMMANDS[count]]);
        count++;

        // Tampilkan baris berikutnya dengan interval
        const timer = setInterval(() => {
            if (count < TERMINAL_COMMANDS.length) {
                setDisplayedLines((prev) => [...prev, TERMINAL_COMMANDS[count]]);
                count++;
            } else {
                clearInterval(timer);
            }
        }, 200);

        return () => clearInterval(timer);
    }, [isVisible]);

    return (
        <div
            ref={containerRef}
            className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 font-mono-tactical text-sm overflow-hidden hover-glow"
        >
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-800">
                <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500/50 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500/50 rounded-full" />
                    <div className="w-3 h-3 bg-green-500/50 rounded-full" />
                </div>
                <span className="text-slate-500 text-xs ml-auto">terminal.sh</span>
            </div>

            {/* Terminal content */}
            <div className="space-y-2">
                {displayedLines.map((line, index) => (
                    <div key={index} className="text-slate-300">
                        {line || " "}
                    </div>
                ))}
                {displayedLines.length < TERMINAL_COMMANDS.length && (
                    <div className="text-slate-400 animate-pulse">▊</div>
                )}
                {displayedLines.length === TERMINAL_COMMANDS.length && (
                    <div className="text-slate-500 animate-pulse">$_</div>
                )}
            </div>
        </div>
    );
}
