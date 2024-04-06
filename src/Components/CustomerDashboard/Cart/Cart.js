import React, { useState } from 'react';
import './Cart.css';

function Cart() {
  
  const initialCart = [
    {
      id: 3,
      img: "https://cdn-prod.medicalnewstoday.com/content/images/articles/272/272782/oranges-in-a-box.jpg",
      name: "Orange",
      quantity: 2,
      maxQuantity: 4,
      price: 300
    },
    {
      id: 5,
      img: "https://fittify.in/cdn/shop/articles/1_1aba4a24-2162-4e21-8c51-f4eb2c02aa6f.jpg?v=1673938218",
      name: "Strawberry",
      quantity: 1,
      maxQuantity: 1,
      price: 350
    },
    {
      id: 6,
      img: "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2021/01/06210424/11.jpg",
      name: "Watermelon",
      quantity: 3,
      maxQuantity: 5,
      price: 180
    }
  ];

  const [cart, setCart] = useState(initialCart);

  
  const handleChangeQuantity = (itemId, newQuantity) => {
    setCart(prevCart => prevCart.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

  const handlePlaceOrder = () => {
    
    console.log("Order placed!");
  };

  return (
    <div className="cart-container">
      <h2>Cart Summary</h2>
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt={item.name} className="cart-item-img" />
            <div className="cart-item-details">
              <p className="cart-item-name">{item.name}</p>
              <p className="cart-item-price">Price: ₹{item.price}</p>
              <div className="cart-item-quantity">
                <select
                  value={item.quantity}
                  onChange={e => handleChangeQuantity(item.id, parseInt(e.target.value))}
                >
                  {[...Array(item.maxQuantity + 1).keys()].map(q => (
                    <option key={q} value={q}>{q}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        ))}
        {cart.length === 0 && <p className="empty-cart-message">Your cart is empty</p>}
        {cart.length > 0 && <p className="cart-total">Total: ₹{totalPrice}</p>}
      </div>
      <div className="button-container">
        <button className="place-order-button" onClick={handlePlaceOrder}>Place Order</button>
        <button className="go-back-button" onClick={() => window.history.back()}>Go Back</button>
      </div>
    </div>
  );
  
}

export default Cart;
