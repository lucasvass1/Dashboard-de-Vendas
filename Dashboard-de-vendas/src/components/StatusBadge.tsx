type Props = {
  status: string;
};

export function StatusBadge({ status }: Props) {
  const styles = {
    pago: "bg-green-100 text-green-700",
    pendente: "bg-yellow-100 text-yellow-700",
    cancelado: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${
        styles[status as keyof typeof styles]
      }`}
    >
      {status}
    </span>
  );
}