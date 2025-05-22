// src/hooks/useTodos.ts
import { useEffect, useState } from "react";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchTodos() {
    setLoading(true);
    const res = await fetch("/api/todos");
    setTodos(await res.json());
    setLoading(false);
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  return { todos, loading, fetchTodos };
}
