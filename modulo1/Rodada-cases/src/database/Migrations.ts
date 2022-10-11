import { BaseDatabase } from "./BaseDatabase";
import CreateCompetionDatabase from "./migrations/CompetionDatabase/CreateCompetionDatabase";
import CompetionDatabase from "./migrations/CompetionDatabase/CreateCompetionDatabase";

class Migrations extends BaseDatabase {
  public execute = async () => {
    try {
      console.log("Creating tables...");
      await this.createTables();
      console.log("Tables created successfully.");

      console.log("Migrations completed.");
    } catch (error: any) {
      console.log("Error in migrations...");
      console.log(error.message);
    } finally {
      console.log("Ending connection...");
      BaseDatabase.connection.destroy();
      console.log("Connection closed graciously.");
    }
  };

  public createTables = async () => {
    await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS ${CreateCompetionDatabase.TABLE_COMPETION};
        DROP TABLE IF EXISTS ${CreateCompetionDatabase.TABLE_PLAYER};
        DROP TABLE IF EXISTS ${CreateCompetionDatabase.TABLE_CAD_PLAYER};


        CREATE TABLE IF NOT EXISTS ${CreateCompetionDatabase.TABLE_COMPETION}(
            id int PRIMARY KEY AUTO_INCREMENT,
            title VARCHAR(255) NOT NULL DEFAULT 'Null',
            status VARCHAR(255) NOT NULL DEFAULT 'true'
        );

        CREATE TABLE IF NOT EXISTS ${CreateCompetionDatabase.TABLE_PLAYER}(
            id int PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(255) NOT NULL DEFAULT 'Null',
            age VARCHAR(255) NOT NULL DEFAULT 'Null'
        );

        CREATE TABLE IF NOT EXISTS ${CreateCompetionDatabase.TABLE_CAD_PLAYER}(
            id int PRIMARY KEY AUTO_INCREMENT,
            value VARCHAR(255) NOT NULL DEFAULT 'Null',
            unity VARCHAR(255) NOT NULL DEFAULT 'Null',
            competionId int,
            playerId int,
            FOREIGN KEY (competionId) REFERENCES case2_competion(id),
            FOREIGN KEY (playerId) REFERENCES case2_player(id)
        );`);
  };
}
const migrations = new Migrations();
migrations.execute();
