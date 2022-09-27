import EditRecipeDatabase from "../../database/Recipe/EditRecipeDatabase";
import { Recipe } from "../../model/Recipe";


const recipeDatabase = new EditRecipeDatabase();

export default class EditRecipeBusiness {
    public editRecipes = async (input: any, id: string) => {
        const title = input.title;
        const description = input.description;
        const creationDate = input.creationDate;
    
        const recipes = new Recipe(title, description, creationDate);
        
        await recipeDatabase.editRecipes(recipes,id);
        const response: any = {
          message: "Receita Editada com sucesso",
        };
    
        return response;
      };
}