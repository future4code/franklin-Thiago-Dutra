import { Competion } from "../../../model/Competion";
import { CompetionDb } from "../../../model/CompetionDB";
import { BaseDatabase } from "../../BaseDatabase";

export default class CreateCompetionDatabase extends BaseDatabase {
  public static TABLE_COMPETION = "case2_competion";
  public static TABLE_PLAYER = "case2_player";
  public static TABLE_CAD_PLAYER = "case2_cad_player";

  public createCompetion = async (competion: Competion) => {
    const competionDB: CompetionDb = {
      status: competion.status,
      title: competion.title,
    };

    await BaseDatabase.connection(
      CreateCompetionDatabase.TABLE_COMPETION
    ).insert(competionDB);
  };
}
