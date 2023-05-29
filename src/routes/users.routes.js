import { Router } from "express";
import { getUserProfile } from "../controllers/profile.controllers.js";
import { validateAuth } from "../middlewares/validateAuth.js";
import { getFollows } from "../controllers/follows.controllers.js";
import { startFollow } from "../controllers/follows.controllers.js";
import { getUsers } from "../controllers/users.controllers.js";
import { usersById } from "../controllers/users.controllers.js";


const usersRouter = Router();

usersRouter.get("/profile", validateAuth, getUserProfile); //meu perfil
usersRouter.get("/users", getUsers); // todos os usuarios que eu vou filtrar no front
usersRouter.get("/users/:id", usersById); // perfil do usuario que eu clicar;
usersRouter.get("/me/:type", getFollows); //pegar os follows
usersRouter.post("/:id/following", startFollow); //perfil da pessoa que eu quero seguir


export default usersRouter;