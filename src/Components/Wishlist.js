import React from "react";
import "./Wishlist.css";

const Wishlist = ({ wishlist, setWishlist, cart, setCart }) => {

  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    let updatedCart;
    if (existingProductIndex >= 0) {
      updatedCart = cart.map((item, index) =>
        index === existingProductIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    removeFromWishlist(product.id);  // Remove item from wishlist after adding to cart
  };

  return (
    <div className="wishlist">
      <h1>Your Wishlist</h1>
      <div className="products">
        {wishlist.map((product) => (
          <div key={product.id} className="product">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <button onClick={() => removeFromWishlist(product.id)}>Remove from Wishlist</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
