import NavbarFarmer from "./NavbarFarmer";
import Footer from "../footer/Footer";
import ProductList from "./ProductList";

const FarmerProduct = () => {
  const footerBackgroundColor = "#1c4c1e";

  return (
    <div>
      <div>
        <NavbarFarmer />
      </div>
      <div>
        <ProductList />
      </div>
      <div>
        <Footer backgroundColor={footerBackgroundColor} />
      </div>
    </div>
  );
};

export default FarmerProduct;
