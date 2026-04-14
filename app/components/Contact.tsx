"use client";

import { useState } from "react";

export default function Contact() {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setEmail("");
            setSubject("");
            setMessage("");
        }, 3000);
    };

    return (
        <section
            id="contact"
            className="relative min-h-screen w-full flex items-center justify-center px-8 py-20 bg-slate-900/30"
        >
            {/* Accent glow */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-2xl w-full">
                {/* Section header */}
                <div className="mb-12 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-50 mb-4">
                        Let&apos;s Connect
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Got a project in mind? Let&apos;s discuss how we can work together.
                    </p>
                </div>

                {/* Terminal-style CTA */}
                <div className="mb-12 p-6 bg-slate-900/50 border border-slate-800 rounded-lg font-mono-tactical text-sm">
                    <div className="text-slate-400 mb-4">
                        <span className="text-green-400">$</span> initiate_contact()
                    </div>
                    <div className="text-slate-500 mb-2">
                        <span className="text-blue-400">{`>`}</span> Initializing secure connection...
                    </div>
                    <div className="text-slate-500">
                        <span className="text-green-400">●</span> Ready to receive transmission
                    </div>
                </div>

                {/* Contact form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email field */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-mono-tactical text-slate-400 mb-2"
                        >
                            EMAIL ADDRESS
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="your@email.com"
                            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-lg text-slate-100 placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all duration-200"
                        />
                    </div>

                    {/* Subject field */}
                    <div>
                        <label
                            htmlFor="subject"
                            className="block text-sm font-mono-tactical text-slate-400 mb-2"
                        >
                            SUBJECT
                        </label>
                        <input
                            type="text"
                            id="subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                            placeholder="Project inquiry"
                            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-lg text-slate-100 placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all duration-200"
                        />
                    </div>

                    {/* Message field */}
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-mono-tactical text-slate-400 mb-2"
                        >
                            MESSAGE
                        </label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            placeholder="Tell me about your project..."
                            rows={6}
                            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-lg text-slate-100 placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all duration-200 resize-none"
                        />
                    </div>

                    {/* Submit button */}
                    <button
                        type="submit"
                        className="w-full px-6 py-3 bg-blue-500/10 border border-blue-500/50 rounded-lg text-blue-400 hover:bg-blue-500/20 hover:border-blue-400 hover-glow transition-all duration-300 font-mono-tactical font-semibold uppercase tracking-wider"
                    >
                        {submitted ? (
                            <span className="flex items-center justify-center gap-2">
                                <span className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
                                Sending...
                            </span>
                        ) : (
                            "Send Message"
                        )}
                    </button>

                    {/* Success message */}
                    {submitted && (
                        <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400 text-sm font-mono-tactical text-center">
                            Message sent successfully! I&apos;ll get back to you soon.
                        </div>
                    )}
                </form>

                {/* Social links */}
                <div className="mt-12 pt-8 border-t border-slate-800 flex justify-center gap-8">
                    <a
                        href="#"
                        className="text-slate-500 hover:text-blue-400 transition-colors duration-200 font-mono-tactical text-sm uppercase"
                    >
                        GitHub
                    </a>
                    <a
                        href="#"
                        className="text-slate-500 hover:text-blue-400 transition-colors duration-200 font-mono-tactical text-sm uppercase"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="#"
                        className="text-slate-500 hover:text-blue-400 transition-colors duration-200 font-mono-tactical text-sm uppercase"
                    >
                        Twitter
                    </a>
                </div>
            </div>
        </section>
    );
}
