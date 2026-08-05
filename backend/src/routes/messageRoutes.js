import express from "express"
import { protectRoutes } from "../middleware/auth.js";
import { getMessages, getUsersForSiderBar, markMessageSeen } from "../controllers/messageController.js";

const messageRouter = express.Router();


messageRouter.get("/users",protectRoutes,getUsersForSiderBar);
messageRouter.get("/:id",protectRoutes,getMessages);
messageRouter.put("/mark/:id",protectRoutes,markMessageSeen);

export default messageRouter;