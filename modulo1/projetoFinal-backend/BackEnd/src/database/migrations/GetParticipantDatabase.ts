import { BaseDatabase } from "../BaseDatabase";

export default class GetParticipantDatabase extends BaseDatabase {
    public static TABLE_CAD_PLAYER = "case2_labenu";

  public getParticipantDatabase = async () => {
    try {
      const result = await BaseDatabase.connection(
        GetParticipantDatabase.TABLE_CAD_PLAYER
      )
        .select("*")
      return result;
    } catch (error: any) {
      throw new Error(error);
    }
  };
}
