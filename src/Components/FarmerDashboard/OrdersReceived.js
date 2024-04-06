import React, { useState } from "react";
import NavbarFarmer from "./NavbarFarmer";
import Orders from "./Orders/Orders";
import Search from "./Searchbar/Search";
import { orders } from "./ordersdata";
import "./OrdersReceived.css";
import Footer from "../footer/Footer";

function OrdersReceived() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  const footerBackgroundColor = "#1c4c1e";

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(
      event.target.value === "All Orders" ? null : event.target.value
    );
  };

  function filteredData(orders, selected, query) {
    return orders.filter((order) => {
      const matchesCategory = selected
        ? order.status.toLowerCase() === selected.toLowerCase()
        : true;
      const matchesQuery = query
        ? order.product.toLowerCase().includes(query.toLowerCase())
        : true;
      return matchesCategory && matchesQuery;
    });
  }

  return (
    <div>
      <NavbarFarmer />
      <Search handleInputChange={handleInputChange} />
      <div className="status-flex">
        <button className="btns" onClick={handleClick} value="All Orders">
          All Orders
        </button>
        <button className="btns" onClick={handleClick} value="New Orders">
          New Orders
        </button>
        <button className="btns" onClick={handleClick} value="Out for Delivery">
          Out for Delivery
        </button>
        <button className="btns" onClick={handleClick} value="Delivered">
          Delivered
        </button>
      </div>
      <Orders orders={filteredData(orders, selectedCategory, query)} />
      <Footer backgroundColor={footerBackgroundColor} />
    </div>
  );
}

export default OrdersReceived;
