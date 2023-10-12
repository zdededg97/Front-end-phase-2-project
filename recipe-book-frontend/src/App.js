import React, { useState, useEffect } from "react";
import "./App.css";
// Make sure to import your components
import RecipeList from "./RecipeList";
import AddRecipeForm from "./AddRecipeForm";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch the recipes when the component mounts
    fetch("http://localhost:3000/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  return (
    <div className="App">
      <h1>Recipe Book</h1>

      <RecipeList recipes={recipes} />
      <AddRecipeForm onAdd={addRecipe} />
    </div>
  );
}

export default App;
