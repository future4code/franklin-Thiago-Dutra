import { BaseDatabase } from "../database/BaseDatabase";

export default class verifyStatusCompetion {
  public static TABLE_COMPETION = "case2_competion";

  public verifyStatus = async (id: Number) => {
    try {
      const result = await BaseDatabase.connection(
        verifyStatusCompetion.TABLE_COMPETION
      )
        .select()
        .where({ id: id });

      return result[0];
    } catch (error) {}
  };
}
