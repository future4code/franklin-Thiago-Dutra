import { Request, Response } from "express";
import RankingBusiness from "../../business/RankingBusiness/rankingBusiness";

const rankingBusiness = new RankingBusiness();

export default class RankingController{
  public getRanking = async (req: Request, res: Response) => {
    const {id} = req.params
    try {
      const response =
        await rankingBusiness.getRanking(id);

      res.status(200).send(response);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  };
}
