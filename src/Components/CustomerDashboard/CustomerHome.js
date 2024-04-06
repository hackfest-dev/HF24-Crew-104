import React from "react";
import NavbarCustomer from "./NavbarCustomer";
import Myproducts from "./Myproducts/Myproducts";
import './CustomerHome.css'

function CustomerHome() {
  return (
    <div>
      <NavbarCustomer />
      
      <Myproducts />
    </div>
  );
}

export default CustomerHome;
