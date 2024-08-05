import React from "react";
import { Link } from "react-router-dom";
//import "./Footer.css"; // Import your custom CSS if needed

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              Shop-a-lot technology drives path-breaking, customer-focused
              innovation that makes high quality products accessible to Indian
              shoppers, besides making the online shopping experience
              convenient, intuitive and seamless.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-white">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-white">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="text-white">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>Email: info@shopalot.com</li>
              <li>Phone: +91 98765 43021</li>
              <li>Address: abc Street, Hyderabad, India</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>
            &copy; {new Date().getFullYear()} Shop-a-lot. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
