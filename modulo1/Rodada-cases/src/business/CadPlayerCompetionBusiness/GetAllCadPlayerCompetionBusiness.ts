import GetAllCadPlayerCompetionDatabase from "../../database/migrations/CadPlayerCompetionDatabase/GetAllCadPlayerCompetionDatabase";

const getAllCadPlayerCompetionDatabase = new GetAllCadPlayerCompetionDatabase();

export default class GetAllCadPlayerCompetionBusiness {
  public getAllCadPlayerCompetionBusiness = async () => {
    const response =
      getAllCadPlayerCompetionDatabase.getAllCadPlayerCompetionDatabase();

    return response;
  };
}
