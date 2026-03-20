type Order = {
    id: number;
    customer: string;
    date: string;
    amount: number;
    status: string;
};

type Tableprops= {
    data: Order[];
};

export function Table({ data }: Tableprops) {
    return (
        <table style={{ width: "100%" , background: "#fff"}}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Cliente</th>
                    <th>Data</th>
                    <th>Valor</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {data.map((order) => (
                    <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.customer}</td>
                            <td>{order.date}</td>
                            <td>R$ {order.amount}</td>
                        <td>{order.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
    