import { Sidebar } from "./sidebar/sidebar";
import { ThemeToggle } from "./theme/ThemeToggle";

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col">

      <header className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Dashboard de Vendas
        </h1>

        <ThemeToggle />
      </header>

      <div className="flex flex-1">

        <Sidebar />

        <main className="flex-1 p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
          {children}
        </main>

      </div>

    </div>
  );
}