import EditCompetionDatabase from "../../database/migrations/CompetionDatabase/EditCompetionDatabase";
import { Competion } from "../../model/Competion";

const editCompetionDatabase = new EditCompetionDatabase();

export default class EditCompetionBusiness {
  public editCompetion = async (input: Competion, id: string) => {
    const status = input.status;
    const title = input.title;
    const editCompetion = new Competion(status, title);

    await editCompetionDatabase.editCompetion(editCompetion, id);

    const response: any = {
      message: "Competição Editada com sucesso",
    };

    return response;
  };
}
