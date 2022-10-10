import RankingDatabase from "../../database/migrations/RankingDatabase/RankingDatabase";

const rankingDatabase = new RankingDatabase();
export default class RankingBusiness {
  public getRanking = async (id: any,orderType:string) => {
    const response = await rankingDatabase.getRanking(id,orderType);
    console.log(response);
    
    return response;
  };
}
