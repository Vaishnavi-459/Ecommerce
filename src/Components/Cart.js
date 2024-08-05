import React from 'react';
import './Cart.css';

const Cart = ({ cart, setCart }) => {
  const incrementQuantity = (product) => {
    const updatedCart = cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decrementQuantity = (product) => {
    const updatedCart = cart.map((item) =>
      item.id === product.id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateItemTotal = (item) => item.price * item.quantity;

  const calculateCartTotal = () =>
    cart.reduce((total, item) => total + calculateItemTotal(item), 0);

  return (
    <div className="cart">
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <p>Total: ${calculateItemTotal(item).toFixed(2)}</p>
              <div className="cart-item-controls">
                <button onClick={() => decrementQuantity(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => incrementQuantity(item)}>+</button>
                <button onClick={() => removeItem(item)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h2>Total: ${calculateCartTotal().toFixed(2)}</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
