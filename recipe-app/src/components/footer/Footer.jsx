import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function Footer({ user }) {
  return (
    <footer className="recipe-footer">
      <div className="container footer-content">
        {/* About Section */}
        <div className="footer-section">
          <h4>Recipe App</h4>
          <p>
            Discover delicious recipes, cooking tips, and kitchen inspiration.
            Your daily source for tasty meals!
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h5>Quick Links</h5>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            {user === true ? (
              <>
                <li>
                  <NavLink to="/details">Details</NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h5>Contact</h5>
          <p>Email: support@recipeapp.com</p>
          <p>Phone: +91 98765 43210</p>

          <div className="social-icons">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-youtube"></i>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Recipe App — Cook. Eat. Enjoy.
      </div>
    </footer>
  );
}
