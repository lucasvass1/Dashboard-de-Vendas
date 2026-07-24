# 📊 Sales Dashboard

Um **Dashboard de Vendas moderno** desenvolvido com **React, TypeScript e TailwindCSS**, que permite visualizar métricas de vendas, analisar gráficos e filtrar pedidos por status.

Este projeto simula um **painel administrativo utilizado por empresas** para acompanhar indicadores de negócio em tempo real.

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

* **React**
* **TypeScript**
* **TailwindCSS**
* **Recharts**
* **JSON Server (API mock)**
* **Vite**

---

## 🧠 Conceitos Aplicados

Este projeto aplica diversas boas práticas de desenvolvimento front-end:

* Arquitetura baseada em **componentes reutilizáveis**
* **Separação de responsabilidades**
* **Tipagem forte com TypeScript**
* Consumo de **API simulada**
* **Estados de Loading e Error**
* **Organização profissional de pastas**
* **UI moderna com Tailwind**

---

## 📊 Funcionalidades

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

---

## 🔌 API Simulada

O projeto utiliza **JSON Server** para simular uma API.

Arquivo:

```
db.json
```

Para iniciar a API:

```bash
npx json-server --watch db.json --port 3001
```

---

## ▶️ Como Rodar o Projeto

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/lucasvass1/Dashboard-de-Vendas.git
```

---

### 2️⃣ Instalar dependências

```bash
npm install
```

---

### 3️⃣ Iniciar o projeto

```bash
npm run dev
```

---

### 4️⃣ Iniciar API mock

```bash
npx json-server --watch db.json --port 3001
```

---

## 👨‍💻 Autor

**Lucas Vasconcelos**
