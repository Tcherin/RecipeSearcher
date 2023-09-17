import { useState, useEffect } from "react";
import RecipeList from "../Components/RecipeList";
import SearchBar from "../Components/SearchBar";

const url = "https://api.spoonacular.com/recipes";

const RecipeContainer = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setRecipes(data);
    console.log(recipes);
  };

  return (
    <div>
      <SearchBar />
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  );
};

export default RecipeContainer;
