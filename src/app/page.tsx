import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";

export const dynamic = "force-dynamic"; // always fresh data

export default function Home() {
  return (
    <main className="mx-auto max-w-xl space-y-6 p-6">
      <h1 className="text-3xl font-bold">📝 Todo List</h1>
      <TodoForm />
      <TodoList />
    </main>
  );
}
