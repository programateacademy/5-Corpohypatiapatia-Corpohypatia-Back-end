import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: {type:String},
        email: {type:String},
        password: {type:String},
        phone: {type:String},
        position: {type:String},
        profile: {type:String},
    },
    {collection: 'users'}
);

export default mongoose.model('UserModel', userSchema);