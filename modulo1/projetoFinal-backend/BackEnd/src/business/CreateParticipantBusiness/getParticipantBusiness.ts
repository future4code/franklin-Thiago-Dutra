import GetParticipantDatabase from "../../database/migrations/GetParticipantDatabase";

const getParticipantDatabase = new GetParticipantDatabase();

export default class GetParticipantBusiness {
  public getParticipantBusiness = async () => {
    const response =
    getParticipantDatabase.getParticipantDatabase();

    return response;
  };
}
