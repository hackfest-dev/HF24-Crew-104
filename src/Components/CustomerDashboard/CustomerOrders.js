import React, { useState } from "react";
import NavbarCustomer from "./NavbarCustomer";
import OrderList from "./OrderList";
import Footer from "../footer/Footer";

function CustomerOrders() {
  const [searchQuery, setSearchQuery] = useState("");
  const footerBackgroundColor = "#1c4c1e";

  return (
    <div className="original">
      <NavbarCustomer setSearchQuery={setSearchQuery} />
      <OrderList searchQuery={searchQuery} />
      <Footer backgroundColor={footerBackgroundColor} />
    </div>
  );
}

export default CustomerOrders;
