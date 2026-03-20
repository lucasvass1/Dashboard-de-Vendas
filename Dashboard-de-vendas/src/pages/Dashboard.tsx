import { Layout } from "../components/Layout";
import { MetricaCard } from "../components/MetricaCard";
import { salesData }  from "../data/salesData";
import { orders } from "../data/orders";
import { useState } from "react";
import { Table } from "../components/Table";
import { FilterButtons } from "../components/Filterbuttons";

export function Dashboard() {
    const [statusFilter, setStatusFilter] = useState("todos");
    const filteredOrders = 
    statusFilter === "todos" ? orders
    : orders.filter((order) => order.status === statusFilter);
        return (
        <Layout>
     <h2 style={{marginBottom: "20px"}}>Visão Geral</h2>
     <div style={{display: "flex", gap: "20px", marginBottom: "20px"}}>
        <MetricaCard title="Receita" value= {`R$ ${salesData.revenue}`} />
        <MetricaCard title="Vendas" value= {String(salesData.sales)} />
        <MetricaCard title="Clientes" value= {String(salesData.customers)} />
     </div>
     <FilterButtons statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
       <Table data={filteredOrders} />
        </Layout>
    );
}
        