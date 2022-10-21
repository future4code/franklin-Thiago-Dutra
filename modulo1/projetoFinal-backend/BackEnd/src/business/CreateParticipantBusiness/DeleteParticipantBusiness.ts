import DeleteParticipantDatabase from "../../database/migrations/CreateParticipantDatabase/DeleteParticipantDatabase";

const deleteParticipantDatabase = new DeleteParticipantDatabase();

export default class DeleteParticipantBusiness {
  public deleteParticipantBusiness = async (id: string) => {
    await deleteParticipantDatabase.deleteParticipantDatabase(id);
    const response: any = {
      message: "Deletado com sucesso",
    };

    return response;
  };
}
