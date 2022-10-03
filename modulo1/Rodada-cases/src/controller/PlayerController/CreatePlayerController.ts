import { Request, Response } from "express";
import CreatePlayerBusiness from "../../business/PlayerBusiness/CreatePlayerBusiness";
import { Player } from "../../model/Player";

const createPlayerBusiness = new CreatePlayerBusiness();

export default class CreatePlayerController {
 public createPlayer = async(req: Request, res: Response) =>{
    try {
        const input: Player= {
            name: req.body.name,
            age: req.body.age,
        }
        if(!input.name || !input.age){
            res.status(403).send({ message: 'Informe todos os campos da requisição' });

          }
        const response = await createPlayerBusiness.createPlayer(input)
        res.status(201).send(response)
    } catch (error) {
        res.send(error)
    }
}
}