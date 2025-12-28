import React from "react";
import { useSearchParams,useNavigate } from "react-router-dom";
import "./Recipes.css";
import FoodSearch from "../../components/HomeComponents/foodsearch/FoodSearch";
export default function Recipes() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const mealtime = searchParams.get("MealTime");
  const cuisine = searchParams.get("Cuisine");
  const recipeName = searchParams.get("FoodName");
  return (
    <section className="full-section">
      
      <div className="section-inner">
        <button className="back-button" onClick={() =>navigate(-1)}>
        ← Back
      </button>
        <FoodSearch mealTimeType={mealtime} cuisineType={cuisine} recipeName={recipeName} />
      </div>
    </section>
  );
}
