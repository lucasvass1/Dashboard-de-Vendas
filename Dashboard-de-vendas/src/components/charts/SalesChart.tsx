import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Data = {
  name: string;
  sales: number;
};

type Props = {
  data: Data[];
};

export function SalesChart({ data }: Props) {
  return (
    <div>
      <h3>Teste gráfico</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="#111" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}