import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1>🍽️ About Us</h1>

        <p>
          Our app was created for everyone who loves good food—whether you’re
          trying your first recipe, cooking for family, or experimenting with
          new flavors. We bring together handpicked recipes, clear instructions,
          and helpful tips to make every meal feel achievable and fun.
        </p>

        <p>
          From quick weekday dishes to special weekend treats, our goal is to
          help you cook with confidence and discover recipes you’ll want to make
          again and again. We focus on real ingredients, practical steps, and
          flavors that bring people together.
        </p>

        <p className="about-highlight">
          Food has a way of connecting us, and we’re here to be part of your
          everyday kitchen moments—one recipe at a time.
        </p>

        <span className="about-footer">
          Happy cooking! 👩‍🍳👨‍🍳
        </span>
      </div>
    </div>
  );
}
