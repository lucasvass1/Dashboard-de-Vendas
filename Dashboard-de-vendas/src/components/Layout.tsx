import { Sidebar } from "./sidebar/sidebar";
import { ThemeToggle } from "./theme/ThemeToggle";

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col">

      <header className="sticky top-0 z-10 flex justify-between items-center px-8 py-5 border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
          Dashboard de Vendas
        </h1>

        <ThemeToggle />
      </header>

      <div className="flex flex-1">

        <Sidebar />

        <main className="flex-1 p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
          {children}
        </main>

      </div>

    </div>
  );
}