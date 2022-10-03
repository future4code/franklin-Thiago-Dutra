import RankingDatabase from "../../database/migrations/RankingDatabase/RankingDatabase";

const rankingDatabase = new RankingDatabase();

export default class RankingBusiness {
  public getRanking = async (id:any) => {
    const response = rankingDatabase.getRanking(id);

    return response;
  };
}
