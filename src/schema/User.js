import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         firstNames:
 *           type: string
 *           description: Los nombres del usuario.
 *           example: "Juan"
 *         lastNames:
 *           type: string
 *           description: Los apellidos del usuario.
 *           example: "Pérez"
 *         email:
 *           type: string
 *           format: email  
 *           description: El correo electrónico del usuario.  
 *           example: "juan.perez@example.com"  
 *         position:
 *           type: string 
 *           description: La posición del usuario en la empresa. 
 *           example: "Gerente de Ventas" 
 *         phone:
 *           type: integer 
 *           format: int64 
 *           description: El número de teléfono del usuario. 
 *           example: 1234567890 
 *         password:
 *           type: string 
 *           format: password 
 *           description: La contraseña del usuario. No se devuelve en las respuestas de la API. 
 *         role:
 *           type: number 
 *           description: admin o superadmin 
 *           default: 6419ef677037c6f52031309b  
 *         enabled:
 *           type: boolean 
 *           default: true  
 */
const userSchema = new Schema(
  {
    firstNames: {
      type: String,
      required: true,
    },
    lastNames: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    position: {
      type: String,
    },
    phone: {
      type: Number,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      ref: "Role",
      type: Schema.Types.ObjectId,
    },
    enabled: {
      type: Boolean,
      default: true,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.statics.compareRole = async (role, receiveRol) => {
  return await (role == receiveRol);
};

userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

userSchema.statics.comparePassword = async (password, receivePassword) => {
  return await bcrypt.compare(password, receivePassword);
};

export default model("User", userSchema);