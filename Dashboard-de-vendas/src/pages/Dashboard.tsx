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

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-800"></div>
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
      <h2 className="text-2xl font-semibold mb-6">Visão Geral</h2>

      <div className="grid grid-cols-3 gap-8">
        <MetricaCard title="Receita" value={`R$ ${salesData.revenue}`} change={12} icon={<DollarSign size={24} />} />
        <MetricaCard title="Vendas" value={String(salesData.sales)} change={5} icon={<ShoppingCart size={24} />} />
        <MetricaCard title="Clientes" value={String(salesData.customers)} change={-3} icon={<Users size={24} />} />
      </div>

      <div className="my-8">
        <SalesChart data={chartData} />
      </div>

      <FilterButtons
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />
<div className="mb-4">
  <input
    type="text"
    placeholder="Buscar cliente..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full max-w-sm px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>
      <Table data={filteredOrders} />
    </Layout>
  );
}