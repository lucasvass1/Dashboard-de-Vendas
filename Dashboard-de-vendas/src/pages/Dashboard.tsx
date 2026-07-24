import { Layout } from "../components/Layout";
import { MetricaCard } from "../components/cards/MetricaCard";
import { salesData } from "../data/salesData";
import { useState, useEffect } from "react";
import { Table } from "../components/table/Table";
import { FilterButtons } from "../components/filters/FilterButtons";
import { SalesChart } from "../components/charts/SalesChart";
import { chartData } from "../data/chartData";
import { getOrders } from "../services/api";
import type { Order } from "../types/Order";
import { DollarSign , ShoppingCart , Users } from "lucide-react";

export function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [statusFilter, setStatusFilter] = useState("todos");
  const [search, setSearch] = useState("");
  const [orders, setOrders] = useState<Order[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    getOrders()
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

 const filteredOrders = orders
  .filter((order) =>
    statusFilter === "todos" ? true : order.status === statusFilter
  )
  .filter((order) =>
    order.customer.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

const startIndex = (currentPage - 1) * itemsPerPage;
const paginatedOrders = filteredOrders.slice(
  startIndex,
  startIndex + itemsPerPage
);

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-600"></div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <p className="text-red-500 text-center mt-10">
          Erro ao carregar dados
        </p>
      </Layout>
    );
  }

  return (
    <Layout>
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Visão Geral</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricaCard title="Receita" value={`R$ ${salesData.revenue}`} change={12} icon={<DollarSign size={24} />} />
        <MetricaCard title="Vendas" value={String(salesData.sales)} change={5} icon={<ShoppingCart size={24} />} />
        <MetricaCard title="Clientes" value={String(salesData.customers)} change={-3} icon={<Users size={24} />} />
      </div>

      <div className="my-8">
        <SalesChart data={chartData} />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <FilterButtons
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />

        <input
          type="text"
          placeholder="Buscar cliente..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-xs px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <Table data={paginatedOrders} />

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 disabled:opacity-40 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            ◀
          </button>

          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 rounded-lg border transition ${
                currentPage === index + 1
                  ? "bg-indigo-600 border-indigo-600 text-white"
                  : "border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 disabled:opacity-40 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            ▶
          </button>
        </div>
      )}
    </Layout>
  );
}