import { Home, ShoppingCart, Users, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

export function Sidebar() {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col p-6">

      <h1 className="text-2xl font-bold mb-10 tracking-wide text-gray-900 dark:text-white">
        📊 Sales Dashboard
      </h1>

      <nav className="flex flex-col gap-4">

        <Link
          to="/"
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          <Home size={18} />
          Dashboard
        </Link>

        <Link
          to="/pedidos"
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          <ShoppingCart size={18} />
          Pedidos
        </Link>

        <Link
          to="/clientes"
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          <Users size={18} />
          Clientes
        </Link>

        <Link
          to="/relatorios"
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          <BarChart size={18} />
          Relatórios
        </Link>

      </nav>

    </aside>
  );
}