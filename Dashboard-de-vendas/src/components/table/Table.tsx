import type { Order } from "../../types/Order";
import { StatusBadge } from "../StatusBadge";

type TableProps = {
  data: Order[];
};

export function Table({ data }: TableProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden mt-6">
      <table className="w-full border-collapse">

        <thead className="bg-gray-50 dark:bg-gray-700/50 text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wide">
          <tr>
            <th className="text-left px-6 py-3">ID</th>
            <th className="text-left px-6 py-3">Cliente</th>
            <th className="text-left px-6 py-3">Data</th>
            <th className="text-left px-6 py-3">Valor</th>
            <th className="text-left px-6 py-3">Status</th>
          </tr>
        </thead>

        <tbody className="text-sm text-gray-700 dark:text-gray-300">
          {data.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center py-10 text-gray-500 dark:text-gray-400">
                Nenhum pedido encontrado
              </td>
            </tr>
          ) : (
            data.map((order) => (
              <tr
                key={order.id}
                className="border-t border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/40 transition"
              >
                <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{order.id}</td>

                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  {order.customer}
                </td>

                <td className="px-6 py-4">{order.date}</td>

                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  R$ {order.amount}
                </td>

                <td className="px-6 py-4">
                  <StatusBadge status={order.status} />
                </td>
              </tr>
            ))
          )}
        </tbody>

      </table>
    </div>
  );
}
