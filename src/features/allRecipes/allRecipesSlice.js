import { allRecipesData } from "../../data";

export const loadData = () => {
  return {
    type: "allRecipes/loadData",
    payload: allRecipesData,
  };
};

const initialAllRecipes = [];
export const allRecipesReducer = (allRecipes = initialAllRecipes, action) => {
  switch (action.type) {
    case "allRecipes/loadData":
      return action.payload;

    case "favoriteRecipes/addRecipe":
      return allRecipes.filter((recipe) => recipe.id !== action.payload.id);
    case "favoriteRecipes/removeRecipe":
      return [...allRecipes, action.payload];

    default:
      return allRecipes;
  }
};
