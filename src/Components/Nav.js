import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = ({ search, setSearch, searchproduct, cartCount }) => {
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="Shop-a-lot.JPG" alt="logo" width="50px" height="50px" />
          </Link>
          <form
            className="d-flex"
            role="search"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={handleSearchChange}
            />
            <button
              className="btn btn-outline-success"
              type="submit"
              onClick={searchproduct}
            >
              Search
            </button>
          </form>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse home-list" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link-icon" to="/wishlist">
                  <AiOutlineHeart />
                </Link>
              </li>
              <div className="icon">
                <Link to="/cart" className="cart-link">
                  <FaShoppingCart />
                </Link>
                <span className="cart-count">{cartCount}</span>
                {/* <Link className="nav-link-log" to="/login">
                  <span className="navbar-text">Login</span>
                </Link> */}
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
