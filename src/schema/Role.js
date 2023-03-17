import { Schema, model } from "mongoose";



/**
 * @openapi
 * components:
 *   schemas:
 *     Role:
 *       type: Schema.Types.ObjectId
 *       example: "63e1b26e90beec64ebc7db09"
 */
const roleSchema = new Schema(
  {
    name: Schema.Types.ObjectId,
  },
  {
    versionKey: false,
  }
);

export default model("Role", roleSchema);
