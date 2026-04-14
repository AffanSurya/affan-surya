"use client";

import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
    const [activeSection, setActiveSection] = useState("hero");

    const handleNavigate = (sectionId: string) => {
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["hero", "about", "projects", "contact"];
            const scrollPosition = window.scrollY + 100;

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <main className="relative flex">
            <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />

            {/* Grid background overlay */}
            <div className="fixed inset-0 pointer-events-none z-0" />

            {/* Content sections */}
            <div className="relative z-10 flex-1 ml-20">
                <Hero />
                <About />
                <Projects />
                <Contact />

                {/* Footer */}
                <footer className="relative w-full px-8 py-8 border-t border-slate-800 bg-slate-950/50">
                    <div className="max-w-6xl mx-auto flex justify-between items-center text-slate-500 text-sm font-mono-tactical">
                        <div>© 2026 Affan Surya Wardana. All rights reserved.</div>
                        <div className="flex gap-4">
                            <span>SYSTEM_VERSION: 1.0.0</span>
                            <span className="text-green-500/70">● DEPLOYED</span>
                        </div>
                    </div>
                </footer>
            </div>
        </main>
    );
}
