import { Layout } from "../components/Layout";
import { MetricaCard } from "../components/MetricaCard";

export function Dashboard() {
    return (
        <Layout>
     <h2 style={{marginBottom: "20px"}}>Visão Geral</h2>
     <div style={{display: "flex", gap: "20px"}}>
        <MetricaCard title="Receita" value="R$ 45.000" />
        <MetricaCard title="Vendas" value="320" />
        <MetricaCard title="Clientes" value="120" />
     </div>
        </Layout>
    );
}