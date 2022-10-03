import { Response } from "express";
import CreateCompetionDatabase from "../../database/migrations/CompetionDatabase/CreateCompetionDatabase";
import { Competion } from "../../model/Competion";
import { CompetionDb } from "../../model/CompetionDB";


const competionDatabase = new CreateCompetionDatabase();

export default class CreateCompetionBusiness {
    public createCompetion = async (input: CompetionDb) => {
        const status = input.status;
        const title = input.title;

        const competion = new Competion(status,title);
        
        await competionDatabase.createCompetion(competion);
        const response: any = {
          message: "Competição cadastrada com sucesso",
        };
    
        return response;
      };
}