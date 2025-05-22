"use client";
import { Todo } from "@/hooks/useTodos";

export default function TaskSummary({ todos }: { todos: Todo[] }) {
  const completed = todos.filter((t) => t.completed).length;

  return (
    <p className="text-sm text-gray-500">
      {completed}/{todos.length} complete
    </p>
  );
}
