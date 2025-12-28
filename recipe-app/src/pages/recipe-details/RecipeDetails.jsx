import React, { useEffect, useState } from "react";
import "./RecipeDetails.css";
import toast from "react-hot-toast";
import api from "../../api/middleware";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function RecipeDetails() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const recipeName = searchParams.get("FoodName")?.replace("%20", " ");
  const Cuisine = searchParams.get("Cuisine")?.replace("%20", " ");
  const MealTime = searchParams.get("MealTime")?.replace("%20", " ");

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  const getRecipeDetails = async () => {
    try {
      // 🔐 Get token explicitly
      const user = JSON.parse(localStorage.getItem("user"));
      const token = user?.access_token;

      if (!token) {
        toast.error("Please login to continue 🔐");
        navigate("/login");
        return;
      }
      const res = await api.post(
        "/recipes/getrecipeDetails",
        {
          recipeName,
          MealTime,
          Cuisine,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.data || res.data.length === 0) {
        toast.error("We couldn’t find the recipe details 🍽️");
        return;
      }
      setRecipe(res.data); // assuming single recipe
    } catch (error) {
      console.error("Fetch error:", error);

      if (error.response?.status === 401) {
        toast.error("Session expired. Please login again 🔐");
        navigate(-1);
      } else {
        toast.error("Failed to load recipe. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRecipeDetails();
  }, []);

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading recipe...</p>;
  }

  if (!recipe) return null;

  return (
    <section className="full-section">
      <div className="recipeDetails">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <h2 className="recipe-title">{recipe.name}</h2>
        <h3 className="recipe-description">{recipe.description}</h3>
        <p className="recipe-meta">
          🍳 {recipe.mealTime} | 🌍 {recipe.cuisine}
        </p>

        <div className="recipe-section">
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients?.map((ing, index) => (
              <li key={index}>
                <strong>{ing.item}</strong> – {ing.quantity}
              </li>
            ))}
          </ul>
        </div>

        <div className="recipe-section">
          <h3>Steps</h3>
          <ol>
            {recipe.steps?.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
