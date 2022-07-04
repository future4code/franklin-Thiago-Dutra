import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../components/constants/urls";
import useProtectedPage from "../components/hooks/useProtectedPage";
import useRequestData from "../components/hooks/useRequestData";
import FeedCards from "./FeedCards";
import {
  goToAddReceita,
  goToRecipeDetail,
  goToRecipes,
} from "../routes/coordinator";
import { AddRecipeButton, RecipeListContainer } from "./styled/FeedStyled";
import { AccordionDetails } from "@mui/material";

const Feed = () => {
  useProtectedPage();
  const recipes = useRequestData([], `${BASE_URL}/recipe/feed`);
  const history = useNavigate();

  const onClickCard = (id) => {
    goToRecipes(history, id);
  };

  const recipeCards = recipes.map((recipe) => {
    return (
      <FeedCards
        key={recipe.recipe_id}
        title={recipe.title}
        image={recipe.image}
        onClick={() => onClickCard(recipe.recipe_id)}
      />
    );
  });
  return (
    <RecipeListContainer>
      {recipeCards}
      <AddRecipeButton
        color={"primary"}
        onClick={() => goToAddReceita(history)}
      >
        {" "}
        +
      </AddRecipeButton>
    </RecipeListContainer>
  );
};

export default Feed;
