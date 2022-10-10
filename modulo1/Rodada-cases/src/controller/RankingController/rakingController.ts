import { Request, Response } from "express";
import RankingBusiness from "../../business/RankingBusiness/rankingBusiness";

const rankingBusiness = new RankingBusiness();

export default class RankingController{
  public getRanking = async (req: Request, res: Response) => {
    const {id} = req.params
    const orderType = req.body.orderType
    try {
      const response = await rankingBusiness.getRanking(id,orderType);
        if(!response){
          res.status(403).send({ message: 'Competição não encontrada' });
        }
        if(!orderType){
          res.status(403).send({ message: 'Informe uma ordenação para a competição' });
        }

      res.status(200).send(response);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  };
}
