import React, { useState } from "react";
import NavbarCustomer from "./NavbarCustomer";
import OrderList from "./OrderList";
import Footer from "../footer/Footer";

function CustomerOrders() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <NavbarCustomer setSearchQuery={setSearchQuery} />
      <OrderList searchQuery={searchQuery} />

      <Footer />
    </div>
  );
}

export default CustomerOrders;
