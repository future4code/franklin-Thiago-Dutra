import { BaseDatabase } from "../../BaseDatabase";

export default class GetAllCadPlayerCompetionDatabase extends BaseDatabase {
  public static TABLE_CAD_PLAYER = "case2_cad_player";

  public getAllCadPlayerCompetionDatabase = async () => {
    try {
      const result = await BaseDatabase.connection(
        GetAllCadPlayerCompetionDatabase.TABLE_CAD_PLAYER
      )
        .select("*")
        .orderBy("value", "desc");

      return result;
    } catch (error: any) {
      throw new Error(error);
    }
  };
}
