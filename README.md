# 📊 Sales Dashboard

Dashboard moderno de vendas desenvolvido com **React, TypeScript, Vite e TailwindCSS**.
O projeto simula um painel administrativo de empresas SaaS com métricas, gráficos e gerenciamento de pedidos.

---

## 🚀 Preview

Interface com:

* 📈 **Gráfico de vendas**
* 📊 **Cards de métricas**
* 📋 **Tabela de pedidos com paginação**
* 🔎 **Filtro por status e busca por cliente**
* 🌗 **Modo claro/escuro** (persistido no navegador)
* 🧭 **Navegação lateral com múltiplas páginas**
* ⏳ **Loading state**
* ⚠️ **Error handling**

---

## 🛠️ Tecnologias Utilizadas
=======
# 🚀 Tecnologias Utilizadas

* **React**
* **TypeScript**
* **Vite**
* **TailwindCSS**
* **React Router**
* **Lucide Icons**
* **JSON Server (API mock)**

---

# ✨ Funcionalidades

### 📈 Dashboard

* Cards de métricas estilo **SaaS**
* Gráfico de vendas
* Indicadores de receita, vendas e clientes

### 📋 Tabela de Pedidos

* Listagem de pedidos
* **Filtros por status**
* **Busca de pedidos**
* **Paginação**
* **Status badges**

### 🎨 Interface Moderna

* Layout profissional de dashboard
* **Sidebar com navegação**
* **Dark Mode / Light Mode**
* Interface responsiva
* Transições suaves entre temas

### 🔌 Integração com API

* Consumo de API utilizando **fetch**
* Simulação de backend com **JSON Server**

---

# 🗂 Estrutura do Projeto

### Dashboard (`/`)

* Visualização de **métricas de vendas**
* Cards com:

  * Receita
  * Total de vendas
  * Clientes

  > Os cards de métricas usam dados estáticos (`src/data/salesData.ts`), não vêm da API mock.

### Gráfico

* Gráfico de vendas mensais (dados estáticos em `src/data/chartData.ts`)
* Visualização clara da evolução do negócio

### Filtros e busca

* Filtro de pedidos por status: Todos, Pagos, Pendentes, Cancelados
* Busca de pedidos por nome do cliente

### Tabela de pedidos

Exibe (consumindo a API mock):

* ID
* Cliente
* Data
* Valor
* Status

Com:

* destaque visual de status
* hover nas linhas
* paginação
* layout moderno com suporte a dark mode

### Navegação e tema

* Sidebar com rotas para **Dashboard**, **Pedidos**, **Clientes** e **Relatórios**
* Alternância entre modo claro e escuro, com preferência salva no navegador

> ⚠️ As páginas **Pedidos**, **Clientes** e **Relatórios** ainda são telas placeholder ("em breve"), sem funcionalidade própria implementada. Toda a lógica de dados hoje está concentrada na tela de Dashboard.
=======
```
src
 ├── components
 │    ├── cards
 │    ├── charts
 │    ├── filters
 │    ├── sidebar
 │    ├── table
 │    └── theme
 │
 ├── pages
 │    ├── Dashboard
 │    ├── Pedidos
 │    ├── Clientes
 │    └── Relatorios
 │
 ├── services
 │    └── api.ts
 │
 ├── types
 │    └── Order.ts
 │
 └── data
      ├── chartData.ts
      └── salesData.ts
```

---

# 🔌 API Simulada

O projeto utiliza **JSON Server** para simular uma API REST.

Arquivo:

```
db.json
```

Para iniciar a API:

```bash
npx json-server --watch db.json --port 3001
```

Endpoint utilizado no projeto:

```
http://localhost:3001/orders
```

---

# ▶️ Como Rodar o Projeto

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/lucasvass1/Dashboard-de-Vendas.git
```

---

### 2️⃣ Acessar a pasta

```bash
cd sales-dashboard
```

---

### 3️⃣ Instalar dependências

```bash
npm install
```

---

### 4️⃣ Iniciar o projeto

```bash
npm run dev
```

---

### 5️⃣ Iniciar API mock

```bash
npx json-server --watch db.json --port 3001
```

---

# 📸 Preview do Projeto

Dashboard com:

* métricas de vendas
* gráfico de receita
* tabela de pedidos
* busca e filtros
* modo escuro

---

# 💡 Possíveis Melhorias Futuras

* Autenticação de usuários
* Backend real com **Node.js ou NestJS**
* Banco de dados **PostgreSQL**
* Deploy completo (Frontend + Backend)
* Sidebar colapsável
* Exportação de relatórios

---

# 👨‍💻 Autor

**Lucas Vasconcelos**

---
