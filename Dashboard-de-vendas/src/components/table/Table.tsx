import type { Order } from "../../types/Order";

type TableProps = {
  data: Order[];
};

export function Table({ data }: TableProps) {
  function getStatusStyle(status: string) {
  switch (status) {
    case "pago":
      return "bg-green-100 text-green-700";

    case "pendente":
      return "bg-yellow-100 text-yellow-700";

    case "cancelado":
      return "bg-red-100 text-red-700";

    default:
      return "bg-gray-100 text-gray-700";
  }
}
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden mt-6">
      <table className="w-full border-collapse">
        
        <thead className="bg-gray-100 text-gray-600 text-sm uppercase">
          <tr>
            <th className="text-left px-6 py-3">ID</th>
            <th className="text-left px-6 py-3">Cliente</th>
            <th className="text-left px-6 py-3">Data</th>
            <th className="text-left px-6 py-3">Valor</th>
            <th className="text-left px-6 py-3">Status</th>
          </tr>
        </thead>

  <tbody className="text-sm text-gray-700">
    {data.length === 0 ? (
      <tr>
        <td colSpan={5} className="text-center py-10 text-gray-500">
          Nenhum pedido encontrado
        </td>
      </tr>
    ) : (
      data.map((order) => (
        <tr
          key={order.id}
          className="border-t hover:bg-gray-50 transition"
        >
          <td className="px-6 py-4">{order.id}</td>

          <td className="px-6 py-4 font-medium">
            {order.customer}
          </td>

          <td className="px-6 py-4">{order.date}</td>

          <td className="px-6 py-4 font-semibold text-gray-900">
            R$ {order.amount}
          </td>

          <td className="px-4 py-3">
  <span
    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
      order.status
    )}`}
  >
    {order.status}
  </span>
</td>
        </tr>
      ))
    )}
  </tbody>

      </table>
    </div>
  );
}