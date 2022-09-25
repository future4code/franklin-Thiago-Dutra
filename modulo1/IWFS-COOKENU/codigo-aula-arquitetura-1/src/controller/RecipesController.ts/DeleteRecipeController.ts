import { Request, Response } from "express";
import DeleteRecipeBusiness from "../../business/RecipesBusiness/DeleteRecipeBusiness";

const deleteRecipeBusiness = new DeleteRecipeBusiness();

export default class DeleteRecipeController {
 public deleteRecipes = async(req: Request, res: Response) =>{    
    try {
        const {id} = req.params;
        const response = await deleteRecipeBusiness.deleteRecipes(id)

        res.status(201).send(response)
    } catch (error) {
        res.send(error)
    }
}
}