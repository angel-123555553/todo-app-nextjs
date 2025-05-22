"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme") === "dark";
    setDark(stored);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setDark(!dark)}
      className="rounded-full border border-white/30 bg-white/20 p-2 text-white backdrop-blur-xs hover:bg-white/30 dark:bg-white/10"
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
