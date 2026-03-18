type MetricaCardProps = {
    title: string;
    value: string;
};

export function MetricaCard({ title , value }: MetricaCardProps) {
    return (
        <div
        style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            flex:1,
        }}
        >
            <h4>{title}</h4>
            <h2>{value}</h2>
        </div>
    );
        
}
