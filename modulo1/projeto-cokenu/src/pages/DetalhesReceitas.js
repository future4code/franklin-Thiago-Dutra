import { Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../components/constants/urls";
import useProtectedPage from "../components/hooks/useProtectedPage";
import useRequestData from "../components/hooks/useRequestData";
import { ScreenContainer } from "./styled/CadastroUserStyled";
import { RecipeContainer, RecipeImage } from "./styled/DetalhesSyle";

const DetalhesReceitas = () => {
  useProtectedPage();
  const params = useParams();
  const recipe = useRequestData([], `${BASE_URL}/recipe/${params.id}`);
  console.log(recipe);
  return (
    <ScreenContainer>
      {recipe[0] && (
        <RecipeContainer>
          <RecipeImage src={recipe[0].image} />
          <Typography
            gutterBottom
            align={"center"}
            variant={"h5"}
            color={"primary"}
          >
            {recipe[0].title}
          </Typography>
          <Typography align={"center"}>{recipe[0].description}</Typography>{" "}
        </RecipeContainer>
      )}
    </ScreenContainer>
  );
};

export default DetalhesReceitas;
