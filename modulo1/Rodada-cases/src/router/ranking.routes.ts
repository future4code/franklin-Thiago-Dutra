import { Router } from "express";
import RankingController from "../controller/RankingController/rakingController";

const rankingController = new RankingController();

export const rankingRouter = Router();
//Cadastrar player na competição
rankingRouter.get("/:id", rankingController.getRanking);
