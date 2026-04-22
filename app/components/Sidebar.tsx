"use client";

import { useState, useLayoutEffect } from "react";

interface Props {
    activeSection: string;
    onNavigate: (section: string) => void;
}

export default function Sidebar({ activeSection, onNavigate }: Props) {
    const [time, setTime] = useState(() => new Date().toLocaleTimeString("en-US", { hour12: false }));

    useLayoutEffect(() => {
        // Update time every second
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const sections = [
        { id: "hero", label: "01", name: "Home" },
        { id: "about", label: "02", name: "About" },
        { id: "projects", label: "03", name: "Projects" },
        { id: "contact", label: "04", name: "Contact" },
    ];

    return (
        <aside className="fixed left-0 top-0 h-screen w-26 border-r border-slate-800 bg-slate-950/50 backdrop-blur-sm flex flex-col justify-between py-8 px-4 z-50">
            {/* Navigation */}
            <nav className="flex flex-col gap-8">
                {sections.map((section) => (
                    <button
                        key={section.id}
                        onClick={() => onNavigate(section.id)}
                        className="group relative text-left focus:outline-none"
                    >
                        {/* Vertical line indicator */}
                        <div
                            className={`absolute -left-4 top-0 w-1 h-8 transition-all duration-300 ${
                                activeSection === section.id
                                    ? "bg-blue-500"
                                    : "bg-transparent group-hover:bg-blue-500/50"
                            }`}
                        />
                        <div className="font-mono-tactical font-semibold text-sm text-slate-400 group-hover:text-blue-400 transition-colors duration-200">
                            {section.label}
                        </div>
                        <div className="text-xs text-slate-600 group-hover:text-slate-400 transition-colors duration-200">
                            {section.name}
                        </div>
                    </button>
                ))}
            </nav>

            {/* System footer */}
            <div className="text-sm space-y-1 border-t border-slate-800 pt-3 -ml-5 pl-2">
                <div className=" font-mono-tactical text-slate-600 whitespace-nowrap">SYSTEM·LOG</div>
                <div className=" font-mono-tactical text-slate-600 space-y-0.5">
                    <div className="whitespace-nowrap cursor-help" title="7°40'57.7S 111°40'40.5E">
                        7°S/111°E
                    </div>
                    <div className="text-green-500/70 whitespace-nowrap">● ONLINE</div>
                </div>
                <div className=" font-mono-tactical text-slate-700 pt-1 whitespace-nowrap">
                    {time && `v${time}`}
                </div>
            </div>
        </aside>
    );
}
