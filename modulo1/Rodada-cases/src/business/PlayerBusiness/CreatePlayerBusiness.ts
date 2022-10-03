import CreatePlayerDatabase from "../../database/migrations/PlayerDatabase/CreatePlayerDatabase";
import { Player } from "../../model/Player";


const playerDatabase = new CreatePlayerDatabase();

export default class CreatePlayerBusiness {
    public createPlayer = async (input: Player) => {
        const name = input.name;
        const age = input.age;
      
     
        const player = new Player(name,age);
        
        await playerDatabase.createPlayer(player);
        const response: any = {
          message: "Player cadastrado(a) com sucesso",
        };
    
        return response;
      };
}