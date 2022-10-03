import { CadPlayerCompetionDb } from "../../../model/CadPlayerCompetionDb";
import { BaseDatabase } from "../../BaseDatabase";

export default class CreateCadPlayerCompetionDatabase extends BaseDatabase {
  public static TABLE_CAD_PLAYER = "case2_cad_player";

  public createCadPlayerCompetion = async (
    cadPlayerCompetion: CadPlayerCompetionDb) => {
    try {
      const cadPlayerCompetionDb: CadPlayerCompetionDb = {
        value: cadPlayerCompetion.value,
        unity: cadPlayerCompetion.unity,
        playerId: cadPlayerCompetion.playerId,
        competionId: cadPlayerCompetion.competionId,
      };

      await BaseDatabase.connection(
        CreateCadPlayerCompetionDatabase.TABLE_CAD_PLAYER
      ).insert(cadPlayerCompetionDb);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
