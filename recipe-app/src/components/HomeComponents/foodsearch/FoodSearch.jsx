import React, { useState, useEffect } from "react";
import "./FoodSearch.css";
import FoodCard from "../../card/FoodCard";
import api from "../../../api/middleware";
import { toast } from "react-hot-toast";

export default function FoodSearch({
  recipeNameType = "",
  cuisineType = "",
  mealTimeType = "",
}) {
  const [recipeName, setRecipeName] = useState(recipeNameType);
  const [mealTime, setMealTime] = useState(mealTimeType);
  const [cuisine, setCuisine] = useState(cuisineType);

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ SINGLE API CALL
  const fetchRecipes = async () => {
    try {
      setLoading(true);

      const res = await api.post("/recipes/getrecipes", {
        recipeName,
        mealTime,
        cuisine,
      });

      if (!res.data || res.data.length === 0) {
        setRecipes([]);
        return;
      }

      setRecipes(res.data);
    } catch (error) {
      console.error("Recipe Fetch error:", error);
      toast.error("Unable to fetch recipes");
    } finally {
      setLoading(false);
    }
  };

  // ✅ FETCH ON PAGE LOAD (WITH PARAMS)
  useEffect(() => {
    fetchRecipes();
  }, []);

  // ✅ FETCH ON SEARCH CLICK
  const handleSearch = (e) => {
    e.preventDefault();
    fetchRecipes();
  };

  return (
    <div className="food-search-container">
      <h2>Find Your Favorite Recipes 🍽️</h2>

      <div className="search-controls">
        <input
          type="text"
          placeholder="Search recipes..."
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
        />

        <select value={mealTime} onChange={(e) => setMealTime(e.target.value)}>
          <option value="">Meal Time</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Snack">Snack</option>
          <option value="Dinner">Dinner</option>
        </select>

        <select value={cuisine} onChange={(e) => setCuisine(e.target.value)}>
          <option value="">Cuisine</option>
          <option value="Indian">Indian</option>
          <option value="Italian">Italian</option>
          <option value="Chinese">Chinese</option>
          <option value="Continental">Continental</option>
        </select>

        <button className="clear-filters-btn" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* Results */}
      <div className="food-grid">
        {loading ? (
          <p className="no-results">Loading recipes...</p>
        ) : recipes.length > 0 ? (
          recipes.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))
        ) : (
          <p className="no-results">No recipes found 🍽️</p>
        )}
      </div>
    </div>
  );
}
