import { Layout } from "../components/Layout";
import { MetricaCard } from "../components/MetricaCard";
import { salesData }  from "../data/salesData";
import { orders } from "../data/orders";
import { useState } from "react";


export function Dashboard() {
    const [statusFilter, setStatusFilter] = useState("todos");
    const filteredOrders = 
    statusFilter === "todos" ? orders
    : orders.filter((order) => order.status === statusFilter);
        return (
        <Layout>
     <h2 style={{marginBottom: "20px"}}>Visão Geral</h2>
     <div style={{display: "flex", gap: "20px"}}>
        <MetricaCard title="Receita" value= {`R$ ${salesData.revenue}`} />
        <MetricaCard title="Vendas" value= {String(salesData.sales)} />
        <MetricaCard title="Clientes" value= {String(salesData.customers)} />
     </div>
     <div style={{marginTop: "30px", marginBottom: "30px"}}>
        <button onClick={() => setStatusFilter("todos")} style={{fontWeight: statusFilter === "todos" ? "bold" : "normal"}}>Todos</button>
        <button onClick={() => setStatusFilter("pago")} style={{fontWeight: statusFilter === "pago" ? "bold" : "normal"}}>Pagos</button>
        <button onClick={() => setStatusFilter("pendente")} style={{fontWeight: statusFilter === "pendente" ? "bold" : "normal"}}>Pendentes</button>
        <button onClick={() => setStatusFilter("cancelado")} style={{fontWeight: statusFilter === "cancelado" ? "bold" : "normal"}}>Cancelados</button>
        </div>
       <table style={{width: "100%" , marginTop: "30px" , background: "#fff"}}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Cliente</th>
                    <th>Data</th>
                    <th>Valor</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {filteredOrders.map((order) => (
                    <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.customer}</td>
                            <td>{order.date}</td>
                            <td>R$ {order.amount}</td>
                        <td>{order.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </Layout>
    );
}