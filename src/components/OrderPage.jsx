import {OrdersData, productsData } from " ../data/data";
import { useState} from "react";

function OrderPage(){

const [orders, setOrders]=useState(OrdersData);

const deleteOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
};

return(
    <div>
        <div className="page-header">
            <h2>Orders</h2>
            <button className="btn-add">Add Order  </button>
        </div>
        <table>
           
        </table>
    </div>
)

}
export default OrderPage;