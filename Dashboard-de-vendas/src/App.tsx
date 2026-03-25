import { Dashboard } from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import { Orders } from "./pages/Orders";
import Customers from "./pages/Customers";
import Reports from "./pages/Reports";
function App() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/pedidos" element={<Orders />} />
            <Route path="/clientes" element={<Customers />} />
            <Route path="/relatorios" element={<Reports />} />
        </Routes>
    );
}
export default App;