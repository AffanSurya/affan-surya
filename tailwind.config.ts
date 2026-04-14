/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                slate: {
                    50: "#f9fafb",
                    100: "#f3f4f6",
                    200: "#e5e7eb",
                    300: "#d1d5db",
                    400: "#9ca3af",
                    500: "#6b7280",
                    600: "#4b5563",
                    700: "#374151",
                    800: "#1f2937",
                    900: "#111827",
                    950: "#0f172a",
                },
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                mono: ["JetBrains Mono", "monospace"],
            },
            animation: {
                pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                bounce: "bounce 1s infinite",
            },
            boxShadow: {
                glow: "0 0 30px rgba(59, 130, 246, 0.2)",
            },
            backgroundImage: {
                "gradient-blue": "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)",
            },
        },
    },
    plugins: [],
    safelist: [
        "bg-slate-950",
        "text-slate-100",
        "border-slate-800",
        "text-blue-400",
        "bg-blue-500/10",
        "border-blue-500/50",
        "text-green-500",
        "hover:text-blue-400",
    ],
};
