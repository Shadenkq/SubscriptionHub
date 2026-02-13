import { useState } from "react"
import { productsOrder } from "../data/data"

function OrdersPage() {
  const [orders, setOrders] = useState(productsOrder)

  const deleteOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id))
  }

  const calculateTotal = (items) => {
    if (!items || !Array.isArray(items)) return 0
    return items.reduce((sum, item) => {
      const price = Number(item.price) || 0
      return sum + price
    }, 0)
  }

  return (
    <div>
      <div className="page-header">
        <h2>Orders</h2>
        
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Subscriber</th>
            <th>Items</th>
            <th>Total</th>
            <th>Date</th>
            <th>Status</th>
            <th>View</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>
                <div>
                  <strong>{order.subscriberName}</strong>
                  <br />
                  <small style={{ color: "grey" }}>{order.email}</small>
                </div>
              </td>
              <td>{order.items?.length || 0} items</td>
              <td>${calculateTotal(order.items).toFixed(2)}</td>
              <td>{order.date}</td>
              <td>
                <span
                  className={
                    order.status === "completed"
                      ? "badge active"
                      : order.status === "pending"
                      ? "badge pending"
                      : "badge inactive"
                  }
                >
                  {order.status}
                </span>
              </td>
              <td>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ cursor: "pointer", color: " gray" }}>View</span>
                
                </div>
              </td>
              <td>
                <button className="btn-delete" onClick={() => deleteOrder(order.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default OrdersPage;
