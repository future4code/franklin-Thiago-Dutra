import GetAllPlayerDatabase from "../../database/migrations/PlayerDatabase/GetAllPlayerDatabase";

const getAllPlayerDatabase = new GetAllPlayerDatabase();

export default class GetAllPlayerBusiness {
  public getAllPlayerBusiness = async () => {
    const response = getAllPlayerDatabase.getAllPlayerDatabase();

    return response;
  };
}
