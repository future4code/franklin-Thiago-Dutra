import { Router } from "express"
import CreateRecipeController from "../controller/RecipesController.ts/CreateRecipe"
import DeleteRecipeController from "../controller/RecipesController.ts/DeleteRecipeController"
import EditRecipeController from "../controller/RecipesController.ts/EditRecipeController"
import ListAllRecipeController from "../controller/RecipesController.ts/ListAllRecipes"

const createRecipeController = new CreateRecipeController()
const listAllRecipeController = new ListAllRecipeController()
const editRecipeController = new EditRecipeController()
const deleteRecipeController = new DeleteRecipeController()


export const recipesRouter = Router()

//Recipes Rotas 
recipesRouter.post("/",createRecipeController.createRecipes)
recipesRouter.get("/allrecipes",listAllRecipeController.listAllRecipes)
recipesRouter.put("/editrecipes/:id",editRecipeController.editRecipes)
recipesRouter.delete("/deleterecipes/:id",deleteRecipeController.deleteRecipes)



