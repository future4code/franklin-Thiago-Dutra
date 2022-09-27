import CreateRecipeDatabase from "../../database/Recipe/CreateRecipe";
import ListAllRecipeDatabase from "../../database/Recipe/ListAllRecipeDatabase";
import { Recipe } from "../../model/Recipe";


const listAllRecipeDatabase = new ListAllRecipeDatabase();

export default class ListAllRecipeBusiness {
    public listAllRecipesBusiness = async (token: string) => {
        if (!token) {
            throw new Error("parâmetro token inválido");
          }
          const response = listAllRecipeDatabase.listAllRecipeDatabase();
      
          return response;
        };

}