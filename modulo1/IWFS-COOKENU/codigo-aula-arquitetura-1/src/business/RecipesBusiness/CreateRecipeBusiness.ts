import CreateRecipeDatabase from "../../database/Recipe/CreateRecipe";
import { Recipe } from "../../model/Recipe";


const recipeDatabase = new CreateRecipeDatabase();

export default class CreateRecipeBusiness {
    public createRecipes = async (input: any) => {
        const title = input.title;
        const description = input.description;
        const creationDate = input.creationDate;
    
        const recipes = new Recipe(title, description, creationDate);
        
        await recipeDatabase.createRecipes(recipes);
        const response: any = {
          message: "Receita cadastrada com sucesso",
        };
    
        return response;
      };
}