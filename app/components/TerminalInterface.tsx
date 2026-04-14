"use client";

import { useEffect, useState } from "react";

const TERMINAL_COMMANDS = [
    "$ whoami",
    "Affan Surya Wardana",
    "",
    "$ skills --list",
    "✓ React • Next.js • TypeScript • Node.js",
    "✓ Tailwind CSS • PostgreSQL • MongoDB",
    "✓ System Design • Problem Solving",
    "",
    "$ status",
    "AVAILABLE FOR: Freelance Projects & Full-time Roles",
    "TIMEZONE: WIB (UTC+7)",
    "RESPONSE_TIME: 24 hours",
];

export default function TerminalInterface() {
    const [displayedLines, setDisplayedLines] = useState<string[]>([]);

    useEffect(() => {
        let currentLine = 0;
        const timer = setInterval(() => {
            if (currentLine < TERMINAL_COMMANDS.length) {
                setDisplayedLines((prev) => [...prev, TERMINAL_COMMANDS[currentLine]]);
                currentLine++;
            } else {
                clearInterval(timer);
            }
        }, 200);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 font-mono-tactical text-sm overflow-hidden hover-glow">
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
