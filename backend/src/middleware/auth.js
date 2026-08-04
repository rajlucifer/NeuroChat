import UserModel from "../models/Users";
import jwt from "jsonwebtoken";


//middleware to protect the routes

export const protectRoutes = async(req,res,next)=>{
    try{
        const token  = req.headers.token;
        const decoded = jwt.verify(token,process.env.JWT_SECRET);


        const user = UserModel.findById(decoded.userData._id);

        if(!user){
            res.json({
                success:false,
                message:"User Not Found"
            })
        }
        // by doing this we can add the user data in the req.user easily 
        req.user = user;
        next();


    }
    catch(error){
        console.log(error.message);
        res.json({
            success:false,
            message:error.message
        })

    }

};


//controller to check user is authenticated

export const checkAuth = async(req,res)=>{
    res.json({
        success:true,
        user:req.user
    })


}