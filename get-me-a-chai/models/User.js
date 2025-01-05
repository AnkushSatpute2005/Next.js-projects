import mongoose from "mongoose";

const {Schema,model} = mongoose;
const UserSchema = new Schema({
    email:{type:String ,required:true},
    name:{type:String },
    username:{type:String ,required:true},
    profilepic:{type:String },
    coverpic:{type:String },
    creatAt:{type:Date ,default:Date.now},
    updateAt:{type:Date ,default:Date.now},
});

const User = model("User", UserSchema)
export default mongoose.model.User || User ;