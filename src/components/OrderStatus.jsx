import React from "react";

function OrderStatus({ orders }) {
  const total = orders.length || 1;

  const completed = orders.filter((order) => order.status === "completed").length;
  const pending = orders.filter((order) => order.status === "pending").length;
  const cancelled = orders.filter((order) => order.status === "cancelled").length;

  return (
    <div className="order-status">
      <h3>Order Status</h3>

      <div className="status-item">
        <div className="status-header">
          <span className="status-label">Completed</span>
          <span className="status-count">{completed}</span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill green"
            style={{ width: `${(completed / total) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="status-item">
        <div className="status-header">
          <span className="status-label">Pending</span>
          <span className="status-count">{pending}</span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill yellow"
            style={{ width: `${(pending / total) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="status-item">
        <div className="status-header">
          <span className="status-label">Cancelled</span>
          <span className="status-count">{cancelled}</span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill red"
            style={{ width: `${(cancelled / total) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default OrderStatus;
