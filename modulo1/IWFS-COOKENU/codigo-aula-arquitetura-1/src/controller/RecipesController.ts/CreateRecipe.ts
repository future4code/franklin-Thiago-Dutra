import { Request, Response } from "express";
import CreateRecipeBusiness from "../../business/RecipesBusiness/CreateRecipeBusiness";

const createRecipeBusiness = new CreateRecipeBusiness();

export default class CreateRecipeController {
 public createRecipes = async(req: Request, res: Response) =>{
    try {
        const input: any = {
            title: req.body.title,
            description: req.body.description,
            creationDate: req.body.creationDate,
        }
        const response = await createRecipeBusiness.createRecipes(input)
        res.status(201).send(response)
    } catch (error) {
        res.send(error)
    }
}
}