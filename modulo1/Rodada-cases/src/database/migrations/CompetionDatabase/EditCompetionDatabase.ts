import { Competion } from "../../../model/Competion";
import { CompetionDb } from "../../../model/CompetionDB";
import { BaseDatabase } from "../../BaseDatabase";


export default class EditCompetionDatabase extends BaseDatabase {
    public static TABLE_COMPETION = "case2_competion";
    public editCompetion = async (competion: Competion,id:string) => {
        const competionDb: CompetionDb = {
            status: competion.status,
            title: competion.title,
          };

        await BaseDatabase.connection(EditCompetionDatabase.TABLE_COMPETION)
        .update(competionDb)
        .where({id: id})
      };

}