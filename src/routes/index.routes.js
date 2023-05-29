import { Router } from "express";
import authRouter from "./auth.routes.js";
import postRouter from "./post.routes.js";
import usersRouter from "./users.routes.js";


const router = Router();
router.use(authRouter);
router.use(postRouter);
router.use(usersRouter);

export default router;