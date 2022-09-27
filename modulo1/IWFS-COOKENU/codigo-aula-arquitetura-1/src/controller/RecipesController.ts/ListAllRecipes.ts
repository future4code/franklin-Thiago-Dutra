import { Request, Response } from "express";
import CreateRecipeBusiness from "../../business/RecipesBusiness/CreateRecipeBusiness";
import ListAllRecipeBusiness from "../../business/RecipesBusiness/ListAllRecipes";


const listAllRecipeBusiness = new ListAllRecipeBusiness();

export default class ListAllRecipeController {
    public listAllRecipes = async (req: Request, res: Response) => {
        try {
          const token = req.headers.authorization as string;
          const response = await listAllRecipeBusiness.listAllRecipesBusiness(token);
    
          res.status(200).send(response);
        } catch (error) {
          return res.status(400).send({ message: error.message });
        }
      };
}