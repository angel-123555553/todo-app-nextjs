"use client";
import { Todo } from "@/hooks/useTodos";
import { AnimatePresence, motion } from "framer-motion";
import { Trash2 } from "lucide-react";

export default function TodoList({
  todos,
  loading,
  fetchTodos,
}: {
  todos: Todo[];
  loading: boolean;
  fetchTodos: () => void;
}) {
  const toggle = async (todo: Todo) => {
    await fetch("/api/todos", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: todo.id, completed: !todo.completed }),
    });
    fetchTodos();
  };

  const remove = async (id: string) => {
    await fetch("/api/todos", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchTodos();
  };

  if (loading) return <p className="text-white/80">Loading…</p>;
  if (!todos.length)
    return <p className="text-white/80">No tasks yet. Add one!</p>;

  return (
    <ul className="space-y-2">
      <AnimatePresence>
        {todos.map((t) => (
          <motion.li
            key={t.id}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8, height: 0, margin: 0, padding: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-between rounded-xl bg-white/25 p-3 shadow-glass backdrop-blur-xs dark:bg-white/15"
          >
            <label className="flex cursor-pointer select-none items-center gap-3">
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() => toggle(t)}
                className="h-4 w-4 accent-primary dark:accent-primary-dark"
              />
              <span
                className={
                  t.completed
                    ? "line-through opacity-60"
                    : "font-medium opacity-95"
                }
              >
                {t.title}
              </span>
            </label>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => remove(t.id)}
              className="rounded-lg bg-red-600 px-3 py-2 text-xs font-medium text-white shadow-md shadow-red-600/30 hover:bg-red-700"
              aria-label="Delete"
            >
              <Trash2 size={14} />
            </motion.button>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
}
