import { Request, Response } from "express";
import CreateCompetionBusiness from "../../business/CompetionBusiness/CreateCompetionBusiness";
import { CompetionDb } from "../../model/CompetionDB";

const createCompetionBusiness = new CreateCompetionBusiness();

export default class CreateCompetionController {
 public createCompetion = async(req: Request, res: Response) =>{
    try {
        const input: CompetionDb = {
            status: req.body.status,
            title: req.body.title,
        }
        if(!input.title){
            res.status(403).send({ message: 'Informe um título para a competição' });
  
          }
        const response = await createCompetionBusiness.createCompetion(input)
        res.status(201).send(response)
    } catch (error) {
        res.send(error)
    }
}
}