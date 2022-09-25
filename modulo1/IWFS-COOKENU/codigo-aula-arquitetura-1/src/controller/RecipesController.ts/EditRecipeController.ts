import { Request, Response } from "express";
import CreateRecipeBusiness from "../../business/RecipesBusiness/CreateRecipeBusiness";
import EditRecipeBusiness from "../../business/RecipesBusiness/EditRecipeBusiness";

const editRecipeBusiness = new EditRecipeBusiness();

export default class EditRecipeController {
 public editRecipes = async(req: Request, res: Response) =>{
    
    try {
        const {id} = req.params;
        const input: any = {
            title: req.body.title,
            description: req.body.description,
            creationDate: Date(),
        }
        const response = await editRecipeBusiness.editRecipes(input,id)
        res.status(201).send(response)
    } catch (error) {
        res.send(error)
    }
}
}