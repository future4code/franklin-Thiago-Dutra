import CreateCadPlayerCompetionDatabase from "../../database/migrations/CadPlayerCompetionDatabase/CreateCadPlayerCompetionDatabase";
import { CadPlayerCompetion } from "../../model/CadPlayerCompetion";

const cadPlayerCompetionDatabase = new CreateCadPlayerCompetionDatabase();

export default class CreateCadPlayerCompetionBusiness {
  public createCadPlayerCompetion = async (input: CadPlayerCompetion) => {
    const value = input.value;
    const unity = input.unity;
    const playerId = input.playerId;
    const competionId = input.competionId;

    const cadPlayerCompetion = new CadPlayerCompetion(
      value,
      unity,
      playerId,
      competionId
    );

    await cadPlayerCompetionDatabase.createCadPlayerCompetion(
      cadPlayerCompetion
    );
    const response: any = {
      message: "Player cadastrado na competição com sucesso",
    };

    return response;
  };
}
