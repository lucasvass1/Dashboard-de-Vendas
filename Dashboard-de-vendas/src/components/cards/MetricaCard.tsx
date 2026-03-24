type MetricaCardProps = {
    title: string;
    value: string;
};

export function MetricaCard({ title, value }: MetricaCardProps) {
    return (
        <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <h4 style={{ color: "#666", marginBottom: "8px" }}>{title}</h4>
            <h2 style={{ margin: 0 }}>{value}</h2>
        </div>
    );
}
