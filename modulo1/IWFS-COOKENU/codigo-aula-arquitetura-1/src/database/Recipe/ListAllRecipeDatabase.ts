
import { BaseDatabase } from "../BaseDatabase";



export default class ListAllRecipeDatabase extends BaseDatabase {
    public static TABLE_RECIPES = "cookenu_recipes";

    public listAllRecipeDatabase = async () => {
      try {
        const result = await BaseDatabase.connection(
          ListAllRecipeDatabase.TABLE_RECIPES
        ).select("*");
  
        return result;
      } catch (error: any) {
        throw new Error(error);
      }
}
}