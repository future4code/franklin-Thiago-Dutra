import { BaseDatabase } from "../../BaseDatabase";

export default class DeleteCompetionDatabase extends BaseDatabase {
  public static TABLE_COMPETION = "case2_competion";

  public deleteCompetion = async (id: string) => {
    await BaseDatabase.connection(DeleteCompetionDatabase.TABLE_COMPETION)
      .delete()
      .where({ id: id });
  };
}
