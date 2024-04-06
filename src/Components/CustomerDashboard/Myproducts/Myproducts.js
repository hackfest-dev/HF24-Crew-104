import React, { useState } from "react";
import products from "./Products";
import "./Myproducts.css";

function Cart({ cart }) {
  return (
    <div>
      <h2></h2>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.id}>
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ₹{item.price}</p>
            <hr />
          </div>
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
}

function ProductCard({ product, addToCart }) {
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setSelectedQuantity(parseInt(event.target.value));
  };

  const quantityOptions = [];
  for (let i = 1; i <= product.quantity; i++) {
    quantityOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  const handleAddToCart = () => {
    const item = {
      id: product.id,
      name: product.name,
      img: product.img,
      price: product.price,
      quantity: selectedQuantity,
    };
    addToCart(item);
  };

  return (
    <div className="product-card">
      <img src={product.img} alt={product.name} className="card-img" />
      <div className="card-details">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-price">Price: ₹{product.price}</p>
        <div className="quantity-dropdown">
          <label htmlFor="quantity">Quantity:</label>
          <select
            id="quantity"
            value={selectedQuantity}
            onChange={handleQuantityChange}
          >
            {quantityOptions}
          </select>
          <button className="add-button" onClick={handleAddToCart}>
            <i className="fa-solid fa-plus"></i> Add
          </button>
        </div>
      </div>
    </div>
  );
}

function Myproducts({ searchQuery }) {
  const [bulkOrder, setBulkOrder] = useState(false);
  const [cart, setCart] = useState([]);

  const isBulkOrder = (product) => {
    const quantityNum = parseFloat(product.quantity);
    return (
      (product.quantityType === "quintal" && quantityNum >= 1) ||
      (product.quantityType === "kg" && quantityNum >= 25) ||
      (product.quantityType === "dozen" && quantityNum >= 20) ||
      (product.quantityType === "piece" && quantityNum >= 20)
    );
  };

  const filteredProducts = bulkOrder
    ? products.filter((product) => isBulkOrder(product))
    : products.filter((product) => !isBulkOrder(product));

  const searchedProducts = filteredProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>
      <div className="order-buttons">
        <button className="order-button" onClick={() => setBulkOrder(false)}>
          Small-Scale Orders
        </button>
        <button className="order-button" onClick={() => setBulkOrder(true)}>
          Bulk Orders
        </button>
      </div>
      <div className="product-container">
        {searchedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Myproducts;
