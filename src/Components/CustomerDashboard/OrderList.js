import React, { useState } from "react";
import "./OrderList.css";
import { orders } from "../FarmerDashboard/ordersdata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function OrderList({ searchQuery = "" }) {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const expandOrder = (order) => {
    setSelectedOrder(order);
  };

  const closeOrder = () => {
    setSelectedOrder(null);
  };

  const filteredOrders = orders.filter((order) =>
    order.product.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const ordersLeft = filteredOrders.slice(
    0,
    Math.ceil(filteredOrders.length / 2)
  );
  const ordersRight = filteredOrders.slice(
    Math.ceil(filteredOrders.length / 2)
  );

  return (
    <div className="customer-orders-container">
      <div className="order-column">
        {ordersLeft.map((order, index) => (
          <div
            className="order-box"
            key={index}
            onClick={() => expandOrder(order)}
          >
            <div className="order-info">
              <div>
                <strong>Order No.:</strong> {order.orderNo}
              </div>
              <div>
                <strong>Product:</strong> {order.product}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="order-column">
        {ordersRight.map((order, index) => (
          <div
            className="order-box"
            key={index}
            onClick={() => expandOrder(order)}
          >
            <div className="order-info">
              <div>
                <strong>Order No.:</strong> {order.orderNo}
              </div>
              <div>
                <strong>Product:</strong> {order.product}
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedOrder && (
        <div className="expanded-order">
          <div className="order-info">
            <div>
              <strong>Order No.:</strong> {selectedOrder.orderNo}
            </div>
            <div>
              <strong>Date Ordered:</strong> {selectedOrder.dateOrdered}
            </div>
            <div>
              <strong>Product:</strong> {selectedOrder.product}
            </div>
            <div>
              <strong>Quantity:</strong> {selectedOrder.quantity}
            </div>
            <div>
              <strong>Price:</strong> {selectedOrder.price}
            </div>
            <div>
              <strong>Delivery Fee:</strong> {selectedOrder.deliveryFee}
            </div>
            <div>
              <strong>Status:</strong> {selectedOrder.status}
            </div>
          </div>
          <div className="close-icon" onClick={closeOrder}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderList;
