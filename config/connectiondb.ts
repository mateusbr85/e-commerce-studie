import mongoose from "mongoose";

const url = "mongodb+srv://mateusbr85:ecommercedate@ecommerce.3vzdw.mongodb.net/?retryWrites=true&w=majority"

export const mongoDb =  mongoose.connect(url).then((res) => {
    console.log("Logou no mongoDB" + res)
}).catch((err) => {
    console.log("Houve um erro: " + err)
});