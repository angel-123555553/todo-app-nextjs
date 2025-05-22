"use client";
import { useTodos } from "@/hooks/useTodos";
import TaskSummary from "@/components/TaskSummary";
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";

export default function TodoApp() {
  const { todos, loading, fetchTodos } = useTodos();

  return (
    <>
      <TaskSummary todos={todos} />
      <TodoForm fetchTodos={fetchTodos} />
      <TodoList todos={todos} loading={loading} fetchTodos={fetchTodos} />
    </>
  );
}
