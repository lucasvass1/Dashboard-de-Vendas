import { Layout } from "../components/Layout";
import { MetricaCard } from "../components/MetricaCard";
import { salesData } from "../data/salesData";
import { useState, useEffect } from "react";
import { Table } from "../components/Table";
import { FilterButtons } from "../components/FilterButtons";
import { SalesChart } from "../components/SalesChart";
import { chartData } from "../data/chartData";


type Order = {
  id: number;
  customer: string;
  date: string;
  amount: number;
  status: string;
};

export function Dashboard() {
  const [loading, setLoading] = useState(true);
const [error, setError] = useState(false);
    const [statusFilter, setStatusFilter] = useState("todos");


  const [orders, setOrders] = useState<Order[]>([]);

  
  useEffect(() => {
    setLoading(true);
    setError(false);

    fetch("http://localhost:3001/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);


  const filteredOrders =
    statusFilter === "todos"
      ? orders
      : orders.filter((order) => order.status === statusFilter);
if (loading) return <p>Carregando...</p>;
if (error) return <p>Erro ao carregar dados</p>;
  return (
    <Layout>
      <h2 style={{ marginBottom: "20px" }}>Visão Geral</h2>

      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <MetricaCard title="Receita" value={`R$ ${salesData.revenue}`} />
        <MetricaCard title="Vendas" value={String(salesData.sales)} />
        <MetricaCard title="Clientes" value={String(salesData.customers)} />
      </div>

      <SalesChart data={chartData} />

      <FilterButtons
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      <Table data={filteredOrders} />
    </Layout>
  );
}