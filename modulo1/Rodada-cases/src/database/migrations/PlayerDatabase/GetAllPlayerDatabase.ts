import { BaseDatabase } from "../../BaseDatabase";

export default class GetAllPlayerDatabase extends BaseDatabase {
  public static TABLE_PLAYER = "case2_player";

  public getAllPlayerDatabase = async () => {
    try {
      const result = await BaseDatabase.connection(
        GetAllPlayerDatabase.TABLE_PLAYER
      ).select("*");

      return result;
    } catch (error: any) {
      throw new Error(error);
    }
  };
}
