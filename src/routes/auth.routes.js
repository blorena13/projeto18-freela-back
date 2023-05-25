import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.controllers.js";
import { signUpSchema, signInSchema } from "../schemas/auth.schemas.js";
import { validateSchema } from "../middlewares/validateSchema.js";


const authRouter = Router();

authRouter.post("/signUp", validateSchema(signUpSchema), signUp);
authRouter.post("/signIn", validateSchema(signInSchema), signIn);

export default authRouter;