import express from "express"
import { login, signup, updateProfile } from "../controllers/userController.js";
import { checkAuth, protectRoutes } from "../middleware/auth.js";

const userRouter = express.Router();


userRouter.post("/signup",signup);
userRouter.post("/login",login);
// we use the first protectRoutes to check the token other things
userRouter.put("/update-profile",protectRoutes,updateProfile);
userRouter.get("/check",protectRoutes,checkAuth);

export default userRouter;


