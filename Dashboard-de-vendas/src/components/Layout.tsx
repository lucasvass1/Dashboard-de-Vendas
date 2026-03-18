export function Layout({ children}: { children: React.ReactNode }) {
    return (
        <div style={{display: "flex", height: "100vh"}}>
            <aside style={{width: "250px", background: "#111", color:"#fff", padding: "20px"}}>
                <h2>Dashboard</h2>
                <p>Vendas</p>
            </aside>
            <div style={{flex:1 , display: "flex", flexDirection: "column"}}>
                <header style={{height: "60px" , background: "#eee" , padding: "10px"}}>
                <h3>Painel de Vendas</h3>
              </header>
              <main style={{flex:1 , padding: "20px"}}>
                {children}
              </main>
            </div>
        </div>
    );
}
