import { Router } from "express";
import { newPost } from "../controllers/profile.controllers.js";
import { validateAuth } from "../middlewares/validateAuth.js";
import { postSchema } from "../schemas/post.schemas.js";
import { validateSchema } from "../middlewares/validateSchema.js";

const postRouter = Router();
postRouter.post("/newPost", validateAuth, validateSchema(postSchema), newPost);

export default postRouter;