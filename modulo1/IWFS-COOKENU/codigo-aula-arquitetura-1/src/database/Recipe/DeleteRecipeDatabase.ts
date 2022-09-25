import { BaseDatabase } from "../BaseDatabase";
import UserDatabase from "../UserDatabase";

export default class DeleteRecipeDatabase extends BaseDatabase {
    public static TABLE_RECIPES = "cookenu_recipes";

    public deleteRecipes = async (id:string) => {
        await BaseDatabase.connection(UserDatabase.TABLE_RECIPES)
        .delete()
        .where({id: id})
      };
}