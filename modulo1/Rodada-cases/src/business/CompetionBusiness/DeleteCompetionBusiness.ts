import DeleteCompetionDatabase from "../../database/migrations/CompetionDatabase/DeleteCompetionDatabase";


const deleteCompetionDatabase = new DeleteCompetionDatabase();

export default class DeleteCompetionBusiness {
  public deleteCompetion = async (id: string) => {

    await deleteCompetionDatabase.deleteCompetion(id);
    const response: any = {
      message: "Competição Deletada com sucesso",
    };

    return response;
  };
}