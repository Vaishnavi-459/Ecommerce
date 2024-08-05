import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

const Home = ({
  cart,
  setCart,
  products,
  setProducts,
  wishlist,
  setWishlist,
}) => {
  useEffect(() => {
    axios
      .get("https://6690c522c0a7969efd9d6a8c.mockapi.io/ecommerce-app")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [setProducts]);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );
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
  };

  const addToWishlist = (product) => {
    //const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const existingProductIndex = wishlist.findIndex(
      (item) => item.id === product.id
    );
    let updatedWishlist;
    if (existingProductIndex >= 0) {
      updatedWishlist = wishlist.map((item, index) =>
        index === existingProductIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedWishlist = [...wishlist, { ...product, quantity: 1 }];
    }
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  // Calculate the total count of items in the cart
  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="home">
      <div className="cart-count"></div>
      <div className="products">
        {products.map((product) => (
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
            <button onClick={() => addToWishlist(product)}>
              Add to Wishlist
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
