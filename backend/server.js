import express from "express";
import "dotenv/config"
import cors from "cors";
import http from "http";
import connectDB from "./src/lib/db.js";
import dns from "dns";
import userRouter from "./src/routes/userRoutes.js";
import messageRouter from "./src/routes/messageRoutes.js";


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
app.use("/api/auth",userRouter);
app.use("/api/message",messageRouter);
 


// correct the dns so that mongodb connect properly

dns.setServers(['8.8.8.8','1.1.1.1']);

//connect to db
await connectDB();


server.listen(PORT,()=>{
    console.log(`Server Is Running on ${PORT}`);
})

