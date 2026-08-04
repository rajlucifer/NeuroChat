import bcrypt from "bcryptjs";
import UserModel from "../models/Users";
import { generateToken } from "../lib/utils";
import userModel from "../../../../backend-by-sheryians/adv-auth/src/models/user.model";

//sign up new user

export const signup = async(req,res)=>{
    const {fullName,bio,email,password} = req.body;

    try{
        if(!fullName || !email || !password || !bio){
            return res.json({
                success:false,
                message:"Missing Details"
                

            })
        }
        const user = await UserModel.findOne({email});

        if(user){
            return res.json({
                success:false,
                message:"User Already Exist"
                 

            })
        }
        // here we create the salt so that password become more strong
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt); 
        // here we creating the new user 
        const newUser = UserModel.create({
            fullName,
            email,
            password:hashedPassword,
            bio
        });
        // now we create the token 
        const token = generateToken(newUser._id);
        res.json({
            success:true,
            userData:newUser,
            token:token,
            message:"Account Created Successfully"
        })



    }
    catch(error){
        console.log(error.message);
        res.json({
            success:false,
            message:error.message
        })

    }

};



//controller to login the user

export const login = async(req,res)=>{
    try{
        const {email,password} = req.body;
        const userData = await userModel.findOne({email});


        const isPasswordCorrect = await bcrypt.compare(password,userData.hashedPassword);

        if(!isPasswordCorrect){
            res.json({
                success:false,
                message:"Invalid Credentials"
            })
        }
        //if password is true the generate token
        const token = generateToken(userData._id);
        res.json({
            success:true,
            userData,
            token:token,
            message:"Login Successfully",

        })

    }
    catch(error){
        console.log(error.message);
        res.json({
            success:false,
            message:error.message
        })

    }

}