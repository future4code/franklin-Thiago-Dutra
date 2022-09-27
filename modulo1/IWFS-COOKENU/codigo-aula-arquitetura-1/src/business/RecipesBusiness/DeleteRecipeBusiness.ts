import DeleteRecipeDatabase from "../../database/Recipe/DeleteRecipeDatabase";
import EditRecipeDatabase from "../../database/Recipe/EditRecipeDatabase";
import { Recipe } from "../../model/Recipe";

const recipeDatabase = new DeleteRecipeDatabase();

export default class DeleteRecipeBusiness {
  public deleteRecipes = async (id: string) => {

    await recipeDatabase.deleteRecipes(id);
    const response: any = {
      message: "Receita Deletada com sucesso",
    };

    return response;
  };
}
