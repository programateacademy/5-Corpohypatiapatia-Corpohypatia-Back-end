import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: {type:String},
        email: {type:String}
    },
    {collection: 'users'}
);

export default mongoose.model('UserModel', userSchema);