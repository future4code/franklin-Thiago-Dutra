import { BaseDatabase } from "../../BaseDatabase";

export default class DeleteParticipantDatabase extends BaseDatabase {
    public static TABLE_CAD_PARTICIPANT = "case2_labenu";

  public deleteParticipantDatabase = async (id: string) => {
    await BaseDatabase.connection(DeleteParticipantDatabase.TABLE_CAD_PARTICIPANT)
      .delete()
      .where({ id: id });
  };
}
