import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar({ user, setUser }) {
  const handleLogOut = () => {
    localStorage.removeItem("user");
    setUser(false);
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Recipe App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
              {user === true ? (
                <>
                  <li className="nav-item">
                    <NavLink
                      to="/recipes"
                      className="nav-link"
                      aria-current="page"
                    >
                      Recipes
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
            {user === true ? (
              <button
                className="btn btn-outline-danger"
                onClick={() =>  handleLogOut()}
              >
                Logout
              </button>
            ) : null}
          </div>
        </div>
      </nav>
    </div>
  );
}
