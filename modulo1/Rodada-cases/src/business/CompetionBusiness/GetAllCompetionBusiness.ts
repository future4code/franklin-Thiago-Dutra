import GetAllCompetionDatabase from "../../database/migrations/CompetionDatabase/GetAllCompetionDatabase";

const getAllCompetionDatabase = new GetAllCompetionDatabase();

export default class GetAllCompetionBusiness {
  public getAllCompetionBusiness = async () => {
    const response = getAllCompetionDatabase.getAllCompetionDatabase();

    return response;
  };
}
