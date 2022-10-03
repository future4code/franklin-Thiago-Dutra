import { Player } from "../../../model/Player";
import { PlayerDb } from "../../../model/PlayerDb";
import { BaseDatabase } from "../../BaseDatabase";

export default class CreatePlayerDatabase extends BaseDatabase {
  public static TABLE_PLAYER = "case2_player";

  public createPlayer = async (player: Player) => {
    const playerDB: PlayerDb = {
      name: player.name,
      age: player.age,
    };

    await BaseDatabase.connection(
        CreatePlayerDatabase.TABLE_PLAYER
    ).insert(playerDB);
  };
}
