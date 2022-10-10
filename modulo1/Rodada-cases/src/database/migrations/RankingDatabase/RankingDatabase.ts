import { BaseDatabase } from "../../BaseDatabase";

export default class RankingDatabase extends BaseDatabase {
  public static TABLE_CAD_PLAYER = "case2_cad_player";

  public getRanking = async (id: any,orderType:string) => {
    try {
      const result = await BaseDatabase.connection(
        RankingDatabase.TABLE_CAD_PLAYER
      ).select('playerId').max('value as value')
      .where({competionId: id})
      .groupBy('playerId')
      .orderBy('value',orderType);
  
      return result;
    } catch (error: any) {
      throw new Error(error);
    }
  };
}
