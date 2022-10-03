import { error } from "console";
import { Request, Response } from "express";
import { nextTick } from "process";
import CreateCadPlayerCompetionBusiness from "../../business/CadPlayerCompetionBusiness/CreateCadPlayerCompetionBusiness";
import { CadPlayerCompetion } from "../../model/CadPlayerCompetion";
import VerifyStatusPlayer from "../../services/verifyPlayer";
import verifyStatusCompetion from "../../services/verifyStatusCompetion";

const createCadPlayerCompetionBusiness = new CreateCadPlayerCompetionBusiness();
const verifyStatus = new verifyStatusCompetion();
const verifyPlayer = new VerifyStatusPlayer();


export default class CreateCadPlayerCompetionController {
  public createCadPlayerCompetion = async (req: Request, res: Response) => {
    try {
      const input: CadPlayerCompetion = {
        value: req.body.value,
        unity: req.body.unity,
        playerId: req.body.playerId,
        competionId: req.body.competionId,
      };
      const verificationStatus = await verifyStatus.verifyStatus(
        input.competionId
      );
      if (verificationStatus.status === "false") {
        res.status(403).send({ message: 'Competição encerrada, Não sendo possível cadastrar mais' });

      }
     if(input.unity === 'm'){
         const response = await verifyPlayer.verifyStatus(input.playerId)  
         if(response >= 3){
            res.status(403).send({ message: 'O Player já tem 3 tentativas, Não sendo possível cadastrar mais' });
         }
     }
     

      const response =
        await createCadPlayerCompetionBusiness.createCadPlayerCompetion(input);
      res.status(201).send(response);
    } catch (error) {
      res.send(error);
    }
  };
}
