import Role from "../schema/Role.js";

export const createRoles = async () => {
  try {
    //counts the documents in the role collection
    const count = await Role.estimatedDocumentCount();

    if (count > 0) return;

    /**
     * if there are no documents, create the user and 
     * administrator roles in the database
     */ 
    const values = await Promise.all([
      new Role({ name: "user" }).save(),
      new Role({ name: "admin" }).save(),
    ]);

    console.log(values);
  } catch (error) {
    console.log(error);
  }
};
