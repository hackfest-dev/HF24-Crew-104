import { React, useState } from "react";
import NavbarCustomer from "./NavbarCustomer";
import Myproducts from "./Myproducts/Myproducts";
import "./CustomerHome.css";

function CustomerHome() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <NavbarCustomer setSearchQuery={setSearchQuery} />
      <Myproducts searchQuery={searchQuery} />
    </div>
  );
}

export default CustomerHome;
