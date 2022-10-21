import { BaseDatabase } from "./BaseDatabase";
import CreateParticipantDatabase from "./migrations/CreateParticipantDatabase/CreateParticipantDatabase";

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
        DROP TABLE IF EXISTS ${CreateParticipantDatabase.TABLE_CAD_PARTICIPANT};

        CREATE TABLE IF NOT EXISTS ${CreateParticipantDatabase.TABLE_CAD_PARTICIPANT}(
          id int PRIMARY KEY AUTO_INCREMENT,
          firstname VARCHAR(255) NOT NULL,
          lastname VARCHAR(255) NOT NULL,
          participation INT NOT NULL
      );`);
  };
}
const migrations = new Migrations();
migrations.execute();
