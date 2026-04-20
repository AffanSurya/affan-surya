"use client";

import { useEffect, useState, useRef } from "react";

const TERMINAL_COMMANDS = [
    "$ whoami",
    "$ Affan Surya Wardana",
    "$ ",
    "$ skills --list",
    "✓ React • Next.js • TypeScript • Tailwind CSS",
    "✓ Laravel • Rest API • SQL",
    "✓ Git • Postman",
    "✓ Building full apps from scratch",
    "$",
    "$ status",
    "AVAILABLE FOR: Junior Roles & Opportunities",
    "TIMEZONE: WIB (UTC+7)",
    "RESPONSE_TIME: 24 hours",
];

export default function TerminalInterface() {
    const [displayedLines, setDisplayedLines] = useState<string[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const hasAnimatedRef = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Jalankan animasi hanya sekali saat pertama kali terlihat
                if (entry.isIntersecting && !hasAnimatedRef.current) {
                    hasAnimatedRef.current = true;
                    let count = 0;

                    // Tampilkan baris pertama langsung
                    setDisplayedLines([TERMINAL_COMMANDS[count]]);
                    count++;

                    // Tampilkan baris berikutnya dengan interval
                    timerRef.current = setInterval(() => {
                        if (count < TERMINAL_COMMANDS.length) {
                            setDisplayedLines((prev) => [...prev, TERMINAL_COMMANDS[count]]);
                            count++;
                        } else {
                            if (timerRef.current) {
                                clearInterval(timerRef.current);
                                timerRef.current = null;
                            }
                        }
                    }, 200);
                }
            },
            { threshold: 0.1 },
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            observer.disconnect();
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
        };
    }, []);

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
