import type { Order } from "../types/Order";

export async function getOrders(): Promise<Order[]> {
  const response = await fetch("http://localhost:3001/orders");
  return response.json();
}
