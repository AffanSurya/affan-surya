"use client";

import TerminalInterface from "./TerminalInterface";

export default function About() {
    const expertise = [
        {
            category: "Frontend",
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
        },
        {
            category: "Backend",
            skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
        },
        {
            category: "Tools & Methods",
            skills: ["Git", "Docker", "Linux", "System Design", "Problem Solving"],
        },
    ];

    return (
        <section
            id="about"
            className="relative min-h-screen w-full flex items-center justify-center px-8 py-20 bg-slate-900/30"
        >
            {/* Accent glow */}
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-5xl w-full">
                {/* Section header */}
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-50 mb-4">
                        About Me
                    </h2>
                    <div className="h-1 w-20 bg-blue-500/50" />
                </div>

                {/* Two column layout */}
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Terminal section */}
                    <div className="order-2 md:order-1">
                        <TerminalInterface />
                    </div>

                    {/* Text content */}
                    <div className="order-1 md:order-2 space-y-8">
                        <div>
                            <p className="text-lg text-slate-400 leading-relaxed">
                                I&apos;m a full-stack developer passionate about building clean, efficient,
                                and scalable applications. With expertise in modern web technologies, I focus
                                on creating solutions that solve real problems.
                            </p>
                        </div>

                        {/* Skills grid */}
                        <div className="space-y-6">
                            {expertise.map((item, idx) => (
                                <div key={idx}>
                                    <h3 className="text-sm font-mono-tactical text-blue-400 mb-3 uppercase tracking-wide">
                                        {item.category}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {item.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1.5 bg-slate-800/50 border border-slate-700/50 rounded text-sm text-slate-300 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-200"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* System info */}
                        <div className="border-t border-slate-800 pt-6 space-y-2">
                            <div className="flex justify-between text-sm text-slate-500">
                                <span>Experience:</span>
                                <span className="text-slate-400">5+ years</span>
                            </div>
                            <div className="flex justify-between text-sm text-slate-500">
                                <span>Projects Completed:</span>
                                <span className="text-slate-400">25+</span>
                            </div>
                            <div className="flex justify-between text-sm text-slate-500">
                                <span>Client Satisfaction:</span>
                                <span className="text-green-500">98%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
