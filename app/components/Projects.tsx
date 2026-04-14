"use client";

import React from "react";

interface ProjectCard {
    title: string;
    description: string;
    technologies: string[];
    link: string;
    status: "Live" | "In Progress" | "Archive";
}

const projectsData: ProjectCard[] = [
    {
        title: "E-Commerce Platform",
        description:
            "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
        technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
        link: "#",
        status: "Live",
    },
    {
        title: "Task Management System",
        description:
            "Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics.",
        technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
        link: "#",
        status: "Live",
    },
    {
        title: "Analytics Dashboard",
        description:
            "Interactive data visualization dashboard with custom charts, real-time data processing, and export capabilities.",
        technologies: ["Next.js", "D3.js", "PostgreSQL", "Redux"],
        link: "#",
        status: "Live",
    },
    {
        title: "AI Chat Interface",
        description:
            "Intelligent chat application with natural language processing, context awareness, and user personalization.",
        technologies: ["React", "OpenAI API", "Node.js", "WebSocket"],
        link: "#",
        status: "In Progress",
    },
    {
        title: "Mobile App Backend",
        description:
            "RESTful API with authentication, real-time notifications, and complex business logic optimization.",
        technologies: ["Node.js", "PostgreSQL", "Redis", "Docker"],
        link: "#",
        status: "Live",
    },
    {
        title: "Design System",
        description:
            "Comprehensive component library with documentation, accessibility features, and themed variants.",
        technologies: ["React", "TypeScript", "Storybook", "Tailwind CSS"],
        link: "#",
        status: "In Progress",
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
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">{project.description}</p>

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

                    {/* Link */}
                    <a
                        href={project.link}
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm font-mono-tactical"
                    >
                        View Project
                        <span>→</span>
                    </a>
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
                <div className="mt-16 pt-12 border-t border-slate-800 text-center">
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 rounded-lg text-slate-400 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300 font-mono-tactical text-sm"
                    >
                        View All Projects
                        <span>→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
