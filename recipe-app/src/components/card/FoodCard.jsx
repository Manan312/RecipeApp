import "./FoodCard.css";
import { Link } from "react-router-dom";
export default function FoodCard({ food }) {
  return (
    <div className="food-card">
      <div className="food-card-header">
        <h3>{food.name}</h3>
        <span className="food-cuisine">{food.cuisine}</span>
      </div>

      <p className="food-description">{food.description}</p>

      <div className="food-footer">
        <div className="food-meta">
          <span>🍽 {food.mealTime}</span>
          <span>🔥 {food.calories} kcal</span>
        </div>

        <Link
          to={`/recipesdetails?MealTime=${food.mealTime}&Cuisine=${food.cuisine}&FoodName=${food.name}`}
          className="details-link"
        >
          View Recipe →
        </Link>
      </div>
    </div>
  );
}
