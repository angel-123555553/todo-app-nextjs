import ThemeToggle from "@/components/ThemeToggle";
import TodoApp from "@/components/TodoApp";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <main className="mx-auto max-w-xl space-y-6 p-6">
        <header className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">📝 Todo List</h1>
          <ThemeToggle />
        </header>

        <TodoApp />
      </main>

      <footer className="mt-10 text-center text-xs text-gray-400">
        Built by{" "}
        <a
          href="https://github.com/angel-123555553"
          className="underline"
          target="_blank"
        >
          angel-123555553
        </a>
      </footer>
    </>
  );
}
