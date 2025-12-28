import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="notfound-wrapper">
      <div className="notfound-box">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-text">
          Oops! This recipe seems to be missing… or maybe it got overcooked 🍳
        </p>

        <div className="notfound-buttons">
          <button
            className="btn btn-outline-primary"
            onClick={() => navigate(-1)}
          >
            ← Go Back
          </button>

          <button className="btn btn-primary" onClick={() => navigate("/")}>
            🏠 Go Home
          </button>
        </div>
      </div>
    </div>
  );
}
