import { TrendingUp , TrendingDown } from "lucide-react";
import type React from "react";

type MetricaCardProps = {
    title: string;
    value: string;
    change: number;
    icon: React.ReactNode;
};

export function MetricaCard({ title, value, change, icon }: MetricaCardProps) {
    const isPositive = change > 0;
    return (
    <div className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-between hover:shadow-md transition">

      <div className="flex flex-col gap-1">
        <span className="text-sm text-gray-500">{title}</span>

        <span className="text-2xl font-bold">{value}</span>

        <span
          className={`flex items-center gap-1 text-sm font-medium ${
            isPositive ? "text-green-600" : "text-red-600"
          }`}
        >
          {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          {Math.abs(change)}% vs mês passado
        </span>
      </div>

      <div className="text-gray-400">{icon}</div>
    </div>
  );
}