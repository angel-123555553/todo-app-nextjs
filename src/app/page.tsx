import ThemeToggle from "@/components/ThemeToggle";
import TodoApp from "@/components/TodoApp";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen items-center justify-center p-4">
        {/* Glass panel */}
        <section className="w-full max-w-xl rounded-3xl bg-white/30 p-8 shadow-glass backdrop-blur-md dark:bg-white/15">
          <header className="mb-6 flex items-center justify-between">
            <h1 className="text-3xl font-bold text-white">Todo List</h1>
            <ThemeToggle />
          </header>

          <TodoApp />
        </section>
      </main>

      {/* GitHub footer */}
      <footer className="pb-4 text-center text-xs text-white/80">
        Built by&nbsp;
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
