"use client";
import { useEffect, useState } from "react";

const STORAGE_KEY = "todo-theme";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  // read saved preference on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    setDark(stored === "dark");
  }, []);

  // apply & save whenever it changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem(STORAGE_KEY, dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="rounded border px-3 py-1 text-sm"
    >
      {dark ? "Light" : "Dark"}
    </button>
  );
}
