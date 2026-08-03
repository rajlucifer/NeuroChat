import express from "express";
import "dotenv/config"
import cors from "cors";
import http from "http";
import connectDB from "./src/lib/db.js";


const PORT = process.env.PORT || 5000;
// create express app and http  we crate http because socket.io i support the http 
const app = express();
const server = http.createServer(app);


//middleware 
// we create the limit so that only less then 4mb file can be use
app.use(express.json({limit:"4mb"}))
app.use(cors());

app.use("/api/status",(req,res)=>
    // this show in frontend
    res.send("server is live")
    
);

//connect to db
await connectDB();


server.listen(PORT,()=>{
    console.log(`Server Is Running on ${PORT}`);
})

