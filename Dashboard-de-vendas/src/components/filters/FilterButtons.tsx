type FilterButtonsProps = {
  statusFilter: string;
  setStatusFilter: (value: string) => void;
};

const options = [
  { value: "todos", label: "Todos" },
  { value: "pago", label: "Pagos" },
  { value: "pendente", label: "Pendentes" },
  { value: "cancelado", label: "Cancelados" },
];

export function FilterButtons({
  statusFilter,
  setStatusFilter,
}: FilterButtonsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => setStatusFilter(value)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
            statusFilter === value
              ? "bg-indigo-600 text-white shadow-sm"
              : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
