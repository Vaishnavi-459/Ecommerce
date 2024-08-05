import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Wishlist from "./Components/Wishlist";
import Footer from "./Components/Footer";
import "./App.css";

const App = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    // Fetch products data
    fetch("https://6690c522c0a7969efd9d6a8c.mockapi.io/ecommerce-app")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const searchproduct = () => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <Router>
      <Nav
        search={search}
        setSearch={setSearch}
        searchproduct={searchproduct}
        cartCount={getCartCount()}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              cart={cart}
              setCart={setCart}
              products={searchproduct()}
              setProducts={setProducts}
              wishlist={wishlist}
              setWishlist={setWishlist}            
            />
          }
        />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/wishlist" element={<Wishlist
        wishlist={wishlist}
        setWishlist={setWishlist}
        cart={cart}
        setCart={setCart}
        />} />
        {/* <Route path="/login" element={<login />} /> */}
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
