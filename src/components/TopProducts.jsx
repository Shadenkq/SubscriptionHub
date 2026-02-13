import React from "react";
import { productsData, productsOrder } from "../data/data";

function TopProducts() {
  const productSales = productsData.map((product) => {
    const salesCount = productsOrder.filter((order) =>
      order.items.some((item) => item.subscriptionProduct === product.name)
    ).length;
    
    const revenue = productsOrder
      .filter((order) =>
        order.items.some((item) => item.subscriptionProduct === product.name)
      )
      .reduce((sum, order) => {
        const item = order.items.find((i) => i.subscriptionProduct === product.name);
        return sum + (Number(item?.price) || 0);
      }, 0);

    return { ...product, salesCount, revenue };
  }).sort((a, b) => b.revenue - a.revenue);

  return (
    <div className="top-products">
      <h3>Top Products</h3>
      <div className="products-list">
        {productSales.slice(0, 5).map((product, index) => (
          <div key={product.id} className="product-row">
            <span className="rank">#{index + 1}</span>
            <img src={product.image} alt={product.name} className="product-img" />
            <div className="product-info">
              <span className="product-name">{product.name}</span>
              <span className="product-sales">{product.salesCount} sales</span>
            </div>
            <span className="product-revenue">${product.revenue.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopProducts;
