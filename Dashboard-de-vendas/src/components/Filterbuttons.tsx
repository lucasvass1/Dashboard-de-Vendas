type FilterButtonsProps = {
    statusFilter: string;
    setStatusFilter: (value: string) => void;
};

export function FilterButtons({ statusFilter , setStatusFilter }: FilterButtonsProps) {
    return (
        <div style={{marginTop: "30px", marginBottom: "30px"}}>
        <button onClick={() => setStatusFilter("todos")} style={{fontWeight: statusFilter === "todos" ? "bold" : "normal"}}>Todos</button>
        <button onClick={() => setStatusFilter("pago")} style={{fontWeight: statusFilter === "pago" ? "bold" : "normal"}}>Pagos</button>
        <button onClick={() => setStatusFilter("pendente")} style={{fontWeight: statusFilter === "pendente" ? "bold" : "normal"}}>Pendentes</button>
        <button onClick={() => setStatusFilter("cancelado")} style={{fontWeight: statusFilter === "cancelado" ? "bold" : "normal"}}>Cancelados</button>
        </div>
    );
}