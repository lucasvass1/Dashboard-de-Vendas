type Props = {
  status: string;
};

export function StatusBadge({ status }: Props) {
  const styles = {
    pago: "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400",
    pendente: "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400",
    cancelado: "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${
        styles[status as keyof typeof styles] ??
        "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
      }`}
    >
      {status}
    </span>
  );
}