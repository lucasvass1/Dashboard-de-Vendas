type Order = {
  id: number;
  customer: string;
  date: string;
  amount: number;
  status: string;
};

type TableProps = {
  data: Order[];
};


const tableStyle = {
  width: "100%",
  background: "#fff",
  borderRadius: "12px",
  overflow: "hidden",
  marginTop: "20px",
  borderCollapse: "collapse" as const,
};

const headerStyle = {
  background: "#f5f5f5",
};

const thStyle = {
  padding: "12px",
  textAlign: "left" as const,
  fontWeight: "600",
  fontSize: "14px",
  color: "#555",
};

const tdStyle = {
  padding: "12px",
  borderTop: "1px solid #eee",
  fontSize: "14px",
};

const rowStyle = {
  transition: "background 0.2s",
};

const hoverStyle = {
  background: "#fafafa",
};

export function Table({ data }: TableProps) {
  return (
    <table style={tableStyle}>
      <thead style={headerStyle}>
        <tr>
          <th style={thStyle}>ID</th>
          <th style={thStyle}>Cliente</th>
          <th style={thStyle}>Data</th>
          <th style={thStyle}>Valor</th>
          <th style={thStyle}>Status</th>
        </tr>
      </thead>

      <tbody>
        {data.map((order) => (
          <tr
            key={order.id}
            style={rowStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = hoverStyle.background)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "")
            }
          >
            <td style={tdStyle}>{order.id}</td>
            <td style={tdStyle}>{order.customer}</td>
            <td style={tdStyle}>{order.date}</td>
            <td style={tdStyle}>R$ {order.amount}</td>
            <td style={tdStyle}>{order.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}