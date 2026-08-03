import mongoose, { mongo } from "mongoose";


// function to connect the mongodb

const connectDB = async()=>{
    try{
        //new way to do the connection is
        mongoose.connection.on("connected",()=>{
            console.log("Database connected successfully")
        })
        await mongoose.connect(`${process.env.MONGO_URI}/chat-app`)
        // console.log("Database connected Successfully")

    }
    catch(error){
        console.log("connetion error ",error)
    }

}

export default connectDB;