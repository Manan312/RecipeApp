import { Link } from "react-router-dom";
import "./MealTimeSection.css";

const meals = [
  {
    name: "Breakfast",
    emoji: "🍳",
    front: "Kickstart your day with energy by having a nice Breakfast",
    calories: "300–400 kcal",
    time: "7:00 – 9:00 AM",
    tip: "Include protein and whole grains.",
  },
  {
    name: "Lunch",
    emoji: "🍛",
    front: "Fuel your productivity with a balanced Lunch",
    calories: "500–700 kcal",
    time: "12:00 – 2:00 PM",
    tip: "Balance carbs, protein & veggies.",
  },
  {
    name: "Snack",
    emoji: "🥗",
    front: "Stay energized between meals with a healthy Snack",
    calories: "150–250 kcal",
    time: "4:00 – 6:00 PM",
    tip: "Fruits, nuts, or yogurt work best.",
  },
  {
    name: "Dinner",
    emoji: "🍲",
    front: "Light and nourishing Dinner for restful sleep",
    calories: "400–600 kcal",
    time: "7:00 – 9:00 PM",
    tip: "Keep it light & avoid heavy carbs.",
  },
];

export default function MealTimeSection() {
  return (
    <section className="meals-section section-fade">
      <h2>Daily Meal Times</h2>

      <div className="meal-grid">
        {meals.map((meal) => (
          <div className="meal-card" key={meal.name}>
            <div className="meal-inner">
              {/* Front */}
              <div className="meal-front">
                <h3>{meal.emoji} {meal.name}</h3>
                <p>{meal.front}</p>
              </div>

              {/* Back */}
              <div className="meal-back">
                <p><strong>Calories:</strong> {meal.calories}</p>
                <p><strong>Best Time:</strong> {meal.time}</p>
                <p className="meal-tip">{meal.tip}</p>
                <Link to={`/recipes?MealTime=${meal.name}`} className="meal-link">
                  Explore {meal.name} Recipes
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
