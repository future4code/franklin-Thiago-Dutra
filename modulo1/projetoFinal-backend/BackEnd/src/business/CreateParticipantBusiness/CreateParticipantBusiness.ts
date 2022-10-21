import CreateParticipantDatabase from "../../database/migrations/CreateParticipantDatabase/CreateParticipantDatabase";
import { CadParticipant } from "../../model/CadParticipant";

const createParticipantDatabase = new CreateParticipantDatabase();

export default class CreateParticipantBusiness {


  public createParticipantBusiness = async (input: CadParticipant) => {
    const firstName = input.firstName;
    const lastName = input.lastName;
    const participation = input.participation;

    const participant = new CadParticipant(firstName, lastName, participation);

    await createParticipantDatabase.createParticipantDatabase(participant);
    const response = participant
    return response;
  };
}
