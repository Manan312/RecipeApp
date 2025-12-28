import React from "react";
import "./Home.css";
import { useEffect } from "react";
import IntroSection from "../../components/HomeComponents/intro/IntroSection";
import MealTimeSection from "../../components/HomeComponents/mealtime/MealTimeSection";
import DietSlider from "../../components/HomeComponents/dietslider/DietSlider";
import FoodSearch from "../../components/HomeComponents/foodsearch/FoodSearch";
export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll(".full-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.25 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <div className="home-container">
        <section className="full-section">
          <div className="section-inner">
            <IntroSection />
          </div>
        </section>

        <section className="full-section">
          <div className="section-inner">
            <DietSlider />
          </div>
        </section>

        <section className="full-section">
          <div className="section-inner">
            <MealTimeSection />
          </div>
        </section>
        <section className="full-section">
          <div className="section-inner">
            <FoodSearch />
          </div>
        </section>
      </div>
    </>
  );
}
