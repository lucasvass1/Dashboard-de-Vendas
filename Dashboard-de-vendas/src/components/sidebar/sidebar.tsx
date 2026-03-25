import { Home, ShoppingCart, Users, BarChart } from "lucide-react";

export function Sidebar() {
    return (
        <aside className="w-64 h-screen bg-gray-900 text-white flex flex-col p-6">
            <h1 className="text-2xl font-bold mb-10 tracking-wide">
  📊 Sales Dashboard
</h1>
            <nav className="flex flex-col gap-4">
               <a className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-700 transition cursor-pointer">
  <Home size={18} />
  Dashboard
</a>
                <a className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-700 transition cursor-pointer">
  <ShoppingCart size={18} />
  Pedidos
</a>
                <a className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-700 transition cursor-pointer">
  <Users size={18} />
  Clientes
</a>
                <a className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-700 transition cursor-pointer">
  <BarChart size={18} />
  Relatórios
</a>
            </nav>
        </aside>
    );
}