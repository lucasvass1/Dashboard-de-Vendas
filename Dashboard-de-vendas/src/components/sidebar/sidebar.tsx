import { Home, ShoppingCart, Users, BarChart, LayoutDashboard } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Dashboard", icon: Home },
  { to: "/pedidos", label: "Pedidos", icon: ShoppingCart },
  { to: "/clientes", label: "Clientes", icon: Users },
  { to: "/relatorios", label: "Relatórios", icon: BarChart },
];

export function Sidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col p-6">

      <div className="flex items-center gap-2 mb-10">
        <div className="p-2 rounded-lg bg-indigo-600 text-white">
          <LayoutDashboard size={20} />
        </div>
        <h1 className="text-lg font-bold tracking-wide text-gray-900 dark:text-white">
          Sales Dashboard
        </h1>
      </div>

      <nav className="flex flex-col gap-1">
        {links.map(({ to, label, icon: Icon }) => {
          const active = pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
                active
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <Icon size={18} />
              {label}
            </Link>
          );
        })}
      </nav>

    </aside>
  );
}