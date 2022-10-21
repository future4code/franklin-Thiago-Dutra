import { CadParticipantDb } from "../../../model/CadParticipantDb";
import { BaseDatabase } from "../../BaseDatabase";

export default class CreateParticipantDatabase extends BaseDatabase {
  public static TABLE_CAD_PARTICIPANT = "case2_labenu";

  public createParticipantDatabase = async (createParticipant: CadParticipantDb) => {
    try {
      const createParticipantDb: CadParticipantDb = {
        firstName: createParticipant.firstName,
        lastName: createParticipant.lastName,
        participation: createParticipant.participation,
      };

      await BaseDatabase.connection(
        CreateParticipantDatabase.TABLE_CAD_PARTICIPANT
      ).insert(createParticipantDb);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
