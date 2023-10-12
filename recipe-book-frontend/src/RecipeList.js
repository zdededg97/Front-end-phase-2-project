import React from "react";

function RecipeList({ recipes }) {
  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <img src={recipe.image} alt={recipe.title} width={200} />
          <a
            href={recipe.externalLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Recipe
          </a>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
