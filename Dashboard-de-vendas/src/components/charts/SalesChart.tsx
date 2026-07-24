import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
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
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
      <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">
        Vendas ao longo do tempo
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
          <XAxis dataKey="name" stroke="currentColor" className="text-gray-500 dark:text-gray-400" fontSize={12} />
          <YAxis stroke="currentColor" className="text-gray-500 dark:text-gray-400" fontSize={12} />
          <Tooltip
            contentStyle={{
              borderRadius: 8,
              border: "1px solid #e5e7eb",
              fontSize: 13,
            }}
          />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#4f46e5"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
