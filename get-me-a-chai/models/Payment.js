import mongoose from "mongoose";

const {Schema,model} = mongoose;
const PaymentSchema = new Schema({
    user:{type:String ,required:true},
    to_user:{type:String ,required:true},
    order_id:{type:String ,required:true},
    message:{type:String},
    amount:{type:Number,required:true},    
    creatAt:{type:Date ,default:Date.now},
    updateAt:{type:Date ,default:Date.now},
    done:{type:Boolean ,default:false}
});

const Payment =model("Payment", PaymentSchema)
export default mongoose.model.Payment || Payment ;