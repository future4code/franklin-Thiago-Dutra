import { Recipe } from "../../model/Recipe";
import { RecipeDb } from "../../model/RecipeDB";
import { BaseDatabase } from "../BaseDatabase";
import UserDatabase from "../UserDatabase";



export default class CreateRecipeDatabase extends BaseDatabase {
    public static TABLE_RECIPES = "cookenu_recipes";

    public createRecipes = async (recipe: Recipe) => {
        const recipeDb: RecipeDb = {
          title: recipe.title,
          description: recipe.description,
          creationDate: recipe.creationDate,
        };
    
        await BaseDatabase.connection(UserDatabase.TABLE_RECIPES).insert(recipeDb);
      };
}