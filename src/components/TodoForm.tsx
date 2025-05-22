"use client";
import { useState } from "react";
import { useTodos } from "@/hooks/useTodos";

export default function TodoForm() {
  const [title, setTitle] = useState("");
  const { fetchTodos } = useTodos();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    await fetch("/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    setTitle("");
    fetchTodos();
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a task…"
        className="flex-1 rounded-lg border px-3 py-2"
      />
      <button className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
        Add
      </button>
    </form>
  );
}
