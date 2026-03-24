type FilterButtonsProps = {
  statusFilter: string;
  setStatusFilter: (value: string) => void;
};

const baseStyle = {
  padding: "8px 16px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  marginRight: "8px",
};

const activeStyle = {
  background: "#111",
  color: "#fff",
};

const inactiveStyle = {
  background: "#eee",
};

export function FilterButtons({
  statusFilter,
  setStatusFilter,
}: FilterButtonsProps) {

  const getButtonStyle = (status: string) => ({
    ...baseStyle,
    ...(statusFilter === status ? activeStyle : inactiveStyle),
  });

  return (
    <div className="px-4 py-2 rounded-lg transiction">
      <button onClick={() => setStatusFilter("todos")} style={getButtonStyle("todos")}>
        Todos
      </button>

      <button onClick={() => setStatusFilter("pago")} style={getButtonStyle("pago")}>
        Pagos
      </button>

      <button onClick={() => setStatusFilter("pendente")} style={getButtonStyle("pendente")}>
        Pendentes
      </button>

      <button onClick={() => setStatusFilter("cancelado")} style={getButtonStyle("cancelado")}>
        Cancelados
      </button>
    </div>
  );
}