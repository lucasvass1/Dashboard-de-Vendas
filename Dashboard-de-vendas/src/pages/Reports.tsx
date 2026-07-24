import { Layout } from "../components/Layout";
import { BarChart } from "lucide-react";

export function Reports() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-96 text-center gap-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
        <div className="p-3 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
          <BarChart size={24} />
        </div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Relatórios</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">Em breve por aqui.</p>
      </div>
    </Layout>
  );
}

export default Reports;
