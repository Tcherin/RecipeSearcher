import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes }) => {
  const listItems = recipes.map((recipe) => {
    return (
      <div key={recipe.id}>
        <RecipeCard recipe={recipe} />
      </div>
    );
  });

  return <div>{listItems}</div>;
};

export default RecipeList;
