"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export default function TodoForm({ fetchTodos }: { fetchTodos: () => void }) {
  const [title, setTitle] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    await fetch("/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    setTitle("");
    fetchTodos();
  };

  return (
    <form onSubmit={submit} className="flex gap-3">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a task…"
        className="flex-1 rounded-lg border border-white/30 bg-white/20 px-3 py-2 backdrop-blur-xs placeholder:text-white/70 focus:border-white focus:outline-none dark:bg-white/10"
      />
      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="flex items-center gap-1 rounded-lg bg-green-500 px-4 py-2 font-medium text-white shadow-md shadow-green-500/30 hover:bg-green-600"
      >
        <Plus size={18} /> Add
      </motion.button>
    </form>
  );
}
