import { BaseDatabase } from "../database/BaseDatabase";

export default class VerifyStatusPlayer {
  public static TABLE_CAD_PLAYER = "case2_cad_player";

  public verifyStatus = async (id: Number) => {
    try {
      const result = await BaseDatabase.connection(
        VerifyStatusPlayer.TABLE_CAD_PLAYER
      )
        .select()
        .where({ playerId: id });

      return result.length;
    } catch (error) {}
  };
}
