import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import NotFound from "../pages/notfound/NotFound";
import PrivateRouter from "./PrivateRouter";
import Login from "../pages/login/Login";
import Layout from "./layout/Layout";
import Recipes from "../pages/recipes/Recipes";
import SignUp from "../pages/signup/SignUp";
import RecipeDetails from "../pages/recipe-details/RecipeDetails";
export default function AppRouter() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    const onStorageChange = () => {
    try {
      const useExists = localStorage.getItem("user");
      if (useExists)
        setUser(true);
      else
        setUser(false);
    } catch {
      localStorage.removeItem("user");
      setUser(false);
    }
  };
    onStorageChange();
  }, []);
  return (
    <Router>
      <Routes>
        {/* No navbar & footer */}
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<SignUp setUser={setUser} />} />
        {/* Private pages with navbar/footer */}
        <Route element={<Layout user={user} setUser={setUser} />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="recipes" element={<PrivateRouter />}>
            <Route path="" element={<Recipes />} />
          </Route>
          <Route path="recipesdetails" element={<PrivateRouter />}>
            <Route path="" element={<RecipeDetails />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
