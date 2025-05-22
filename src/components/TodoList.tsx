"use client";
import { Todo } from "@/hooks/useTodos";

interface Props {
  todos: Todo[];
  loading: boolean;
  fetchTodos: () => void;
}

export default function TodoList({ todos, loading, fetchTodos }: Props) {
  async function toggle(todo: Todo) {
    await fetch("/api/todos", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: todo.id, completed: !todo.completed }),
    });
    fetchTodos();
  }

  async function remove(id: string) {
    await fetch("/api/todos", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchTodos();
  }

  if (loading) return <p>Loading…</p>;
  if (!todos.length) return <p className="text-gray-500">No tasks yet.</p>;

  return (
    <ul className="space-y-2">
      {todos.map((t) => (
        <li
          key={t.id}
          className="flex items-center justify-between rounded-lg border p-3"
        >
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggle(t)}
            />
            <span className={t.completed ? "line-through text-gray-400" : ""}>
              {t.title}
            </span>
          </label>
          <button
            onClick={() => remove(t.id)}
            className="text-sm text-red-500 hover:underline"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
