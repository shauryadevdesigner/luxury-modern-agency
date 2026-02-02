"use client"

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { useState, useEffect } from "react"

export function FloatingThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[100] hidden md:block">
            <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-background border border-border shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
                aria-label="Toggle theme"
            >
                <div className="relative w-6 h-6">
                    <Sun className={`absolute inset-0 transition-all duration-500 ${theme === 'dark' ? 'scale-0 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100 text-yellow-500'}`} />
                    <Moon className={`absolute inset-0 transition-all duration-500 ${theme === 'light' ? 'scale-0 -rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100 text-blue-400'}`} />
                </div>

                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300 ${theme === 'dark' ? 'bg-blue-500' : 'bg-yellow-500'}`} />
            </button>
        </div>
    )
}
