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
    <div style={{ marginTop: "30px", marginBottom: "30px" }}>
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