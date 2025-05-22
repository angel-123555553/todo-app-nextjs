import TodoApp from "@/components/TodoApp";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="mx-auto max-w-xl space-y-6 p-6">
      <h1 className="text-3xl font-bold">📝 Todo List</h1>
      <TodoApp />
    </main>
  );
}
