"use client";
import { Todo } from "@/hooks/useTodos";

export default function TaskSummary({ todos }: { todos: Todo[] }) {
  const done = todos.filter((t) => t.completed).length;
  return (
    <p className="text-sm text-gray-600 dark:text-gray-400">
      {done}/{todos.length} complete
    </p>
  );
}
