import { useEffect, useState } from "react";
import "./DietSlider.css";

const slides = [
  {
    title: "Balanced Nutrition",
    text: "A balanced diet provides the right mix of carbohydrates, proteins, healthy fats, vitamins, and minerals to support overall health and daily energy needs."
  },
  {
    title: "Sustained Energy",
    text: "Eating balanced meals helps maintain stable blood sugar levels, preventing sudden energy crashes and keeping you active throughout the day."
  },
  {
    title: "Strong Immunity",
    text: "Nutrient-rich foods strengthen the immune system, helping your body fight infections and recover faster from illness."
  },
  {
    title: "Healthy Digestion",
    text: "Fiber-rich foods support digestion, improve gut health, and help your body absorb nutrients more efficiently."
  },
  {
    title: "Mental Well-being",
    text: "Good nutrition supports brain health, improves concentration, reduces stress, and helps maintain a positive mood."
  },
  {
    title: "Weight Management",
    text: "Balanced meals help control appetite, reduce cravings, and support healthy weight management without extreme dieting."
  },
  {
    title: "Long-Term Wellness",
    text: "Consistently eating well reduces the risk of lifestyle diseases and supports long-term physical and mental well-being."
  }
];

export default function DietSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="slider-section">
      <h2>Why a Balanced Diet Matters</h2>

      <div className="slider-wrapper">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="slide" key={index}>
              <h3>{slide.title}</h3>
              <p>{slide.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${active === index ? "active" : ""}`}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </section>
  );
}
