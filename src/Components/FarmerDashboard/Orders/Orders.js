import React, { useState } from "react";
import "./Orders.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Orders({ orders }) {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const expandOrder = (order) => {
    setSelectedOrder(order);
  };

  const closeOrder = () => {
    setSelectedOrder(null);
  };

  const acceptOrder = () => {
    // Your logic to handle accepting the order goes here
    console.log("Order accepted:", selectedOrder);
    setSelectedOrder(null);
  };

  const rejectOrder = () => {
    // Your logic to handle rejecting the order goes here
    console.log("Order rejected:", selectedOrder);
    setSelectedOrder(null);
  };

  return (
    <div>
      <div className="orders-container">
        {orders.map((order, index) => (
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
                <strong>Date Ordered:</strong> {order.dateOrdered}
              </div>
              <div>
                <strong>Ordered By:</strong> {order.orderedBy}
              </div>
              <div>
                <strong>Product:</strong> {order.product}
              </div>
              <div>
                <strong>Quantity:</strong> {order.quantity}
              </div>
              <div>
                <strong>Price:</strong> {order.price}
              </div>
              <div>
                <strong>Delivery Fee:</strong> {order.deliveryFee}
              </div>
              <div>
                <strong>Delivery By:</strong> {order.deliveryBy}
              </div>
              <div>
                <strong>Total Amount To Be Paid:</strong>{" "}
                {order.totalAmountToBePaid}
              </div>
              <div>
                <strong>Status:</strong> {order.status}
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
              <strong>Ordered By:</strong> {selectedOrder.orderedBy}
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
              <strong>Delivery By:</strong> {selectedOrder.deliveryBy}
            </div>
            <div>
              <strong>Total Amount To Be Paid:</strong>{" "}
              {selectedOrder.totalAmountToBePaid}
            </div>
            <div>
              <strong>Status:</strong> {selectedOrder.status}
            </div>
          </div>
          <div className="close-icon" onClick={closeOrder}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
          <div className="buttons-container">
            {selectedOrder.status === "New Orders" && (
              <>
                <button onClick={acceptOrder}>Accept</button>
                <button onClick={rejectOrder}>Decline</button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Orders;
