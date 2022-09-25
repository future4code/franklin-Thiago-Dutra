import { Recipe } from "../../model/Recipe";
import { RecipeDb } from "../../model/RecipeDB";
import { BaseDatabase } from "../BaseDatabase";
import UserDatabase from "../UserDatabase";



export default class EditRecipeDatabase extends BaseDatabase {
    public static TABLE_RECIPES = "cookenu_recipes";

    public editRecipes = async (recipe: Recipe,id:string) => {
        const recipeDb: RecipeDb = {
          title: recipe.title,
          description: recipe.description,
          creationDate: recipe.creationDate,
        };
    
        await BaseDatabase.connection(UserDatabase.TABLE_RECIPES)
        .update(recipeDb)
        .where({id: id})
      };
}