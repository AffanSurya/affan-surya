"use client";

import React from "react";

interface ProjectCard {
    title: string;
    description: string;
    technologies: string[];
    link: string;
    demoLink?: string;
    status: "Live" | "In Progress" | "Archive";
}

const projectsData: ProjectCard[] = [
    {
        title: "TravelZero",
        description:
            "Next.js-based AI Trip Planner that helps users create travel plans interactively through chat. Users only need to answer AI prompts (origin, destination, budget, duration, group type, and interests), and the system will automatically generate a daily itinerary and hotel recommendations.",
        technologies: ["Next.js", "Tailwind CSS", "Arcjet"],
        link: "https://github.com/AffanSurya/travel-zero",
        demoLink: "https://travel-zero.vercel.app",
        status: "Live",
    },
    {
        title: "K Trash",
        description:
            "A mobile application platform that connects customers (nasabah) with waste collection officers (petugas) using location-based services. Customers can request waste collection, track officers in real-time, and manage their accounts. Officers can handle waste collection requests and update order status.",
        technologies: ["React Native", "TypeScript", "Laravel", "Firebase", "React Native Maps"],
        link: "https://github.com/AffanSurya/k-trash.git",
        status: "Archive",
    },
    {
        title: "SaResto",
        description:
            "Comprehensive restaurant management system designed to simplify restaurant operations for both administrators and customers.",
        technologies: ["Laravel", "PHP", "MySQL", "JWT", "Laravel Sanctum", "Vite", "Bootstrap"],
        link: "https://github.com/AffanSurya/sa-restoV2",
        status: "Archive",
    },
];

function ProjectCard({ project }: { project: ProjectCard }) {
    const statusColor = {
        Live: "bg-green-500/10 text-green-400 border-green-500/30",
        "In Progress": "bg-blue-500/10 text-blue-400 border-blue-500/30",
        Archive: "bg-slate-500/10 text-slate-400 border-slate-500/30",
    };

    return (
        <div className="group relative">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-6 h-6 pointer-events-none">
                <div className="absolute top-0 left-0 w-4 h-0.5 bg-linear-to-r from-blue-500 to-transparent group-hover:w-5 transition-all duration-300" />
                <div className="absolute top-0 left-0 w-0.5 h-4 bg-linear-to-b from-blue-500 to-transparent group-hover:h-5 transition-all duration-300" />
            </div>

            <div className="relative h-full p-6 border border-slate-800 rounded-lg bg-slate-900/50 hover:bg-slate-900/80 transition-all duration-300 hover-glow">
                {/* Status badge */}
                <div
                    className={`absolute top-6 right-6 px-2 py-1 rounded text-xs font-mono-tactical border ${statusColor[project.status]}`}
                >
                    {project.status}
                </div>

                {/* Content */}
                <div className="mt-6">
                    <h3 className="text-xl font-bold text-slate-50 mb-3 group-hover:text-blue-400 transition-colors duration-200">
                        {project.title}
                    </h3>
                    <p
                        className="text-slate-400 text-sm mb-6 leading-relaxed line-clamp-4 cursor-help"
                        title={project.description}
                    >
                        {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-2.5 py-1 bg-slate-800/50 text-slate-300 text-xs rounded font-mono-tactical border border-slate-700/50"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 flex-wrap">
                        {project.demoLink && (
                            <a
                                href={project.demoLink}
                                target="_blank"
                                className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 hover:text-blue-300 transition-all duration-200 text-sm font-mono-tactical rounded border border-blue-500/30"
                            >
                                Live Demo
                                <span>→</span>
                            </a>
                        )}
                        <a
                            href={project.link}
                            target="_blank"
                            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm font-mono-tactical"
                        >
                            View Project
                            <span>→</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="relative w-full px-8 py-20">
            {/* Accent glow */}
            <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Section header */}
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-50 mb-4">
                        Featured Projects
                    </h2>
                    <div className="h-1 w-20 bg-blue-500/50" />
                </div>

                {/* Projects grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectsData.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>

                {/* View all projects link */}
                {/* <div className="mt-16 pt-12 border-t border-slate-800 text-center">
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 rounded-lg text-slate-400 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300 font-mono-tactical text-sm"
                    >
                        View All Projects
                        <span>→</span>
                    </a>
                </div> */}
            </div>
        </section>
    );
}
