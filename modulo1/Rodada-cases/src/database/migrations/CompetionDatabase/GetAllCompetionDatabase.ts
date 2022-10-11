import { BaseDatabase } from "../../BaseDatabase";

export default class GetAllCompetionDatabase extends BaseDatabase {
  public static TABLE_COMPETION = "case2_competion";

  public getAllCompetionDatabase = async () => {
    try {
      const result = await BaseDatabase.connection(
        GetAllCompetionDatabase.TABLE_COMPETION
      ).select("*");

      return result;
    } catch (error: any) {
      throw new Error(error);
    }
  };
}
