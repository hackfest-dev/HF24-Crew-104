import { React, useEffect, useState } from "react";
import NavbarCustomer from "./NavbarCustomer";

import Footer from "../footer/Footer";

function CustomerHome() {
  const footerBackgroundColor = "#1c4c1e";

  return (
    <div>
      <NavbarCustomer />

      <Footer backgroundColor={footerBackgroundColor} />
    </div>
  );
}

export default CustomerHome;
