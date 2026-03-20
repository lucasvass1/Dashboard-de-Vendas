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
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
            minWidth: "150px",  
        }}
        >
            <h4 style={{color: "#666", marginBottom: "8px"}}>{title}</h4>
            <h2 style={{ margin: 0 }}>{value}</h2>
        </div>
    );
        
}
