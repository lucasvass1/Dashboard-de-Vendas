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
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-between hover:shadow-md transition">

      <div className="flex flex-col gap-1">
        <span className="text-sm text-gray-500 dark:text-gray-400">{title}</span>

        <span className="text-2xl font-bold text-gray-900 dark:text-white">{value}</span>

        <span
          className={`flex items-center gap-1 text-sm font-medium ${
            isPositive ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
          }`}
        >
          {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          {Math.abs(change)}% vs mês passado
        </span>
      </div>

      <div className="p-3 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
        {icon}
      </div>
    </div>
  );
}