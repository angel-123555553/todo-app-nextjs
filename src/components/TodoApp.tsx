"use client";
import { useTodos } from "@/hooks/useTodos";
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";

export default function TodoApp() {
  const { todos, loading, fetchTodos } = useTodos();

  return (
    <>
      <TodoForm fetchTodos={fetchTodos} />
      <TodoList todos={todos} loading={loading} fetchTodos={fetchTodos} />
    </>
  );
}
