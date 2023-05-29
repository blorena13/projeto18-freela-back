import { getAllUsers } from "../repositories/user.repository.js";
import { getUsersById } from "../repositories/user.repository.js";

export async function getUsers(req, res){
   const { userId } = res.locals;
    try {
        const {rows: [users]} = await getAllUsers(userId);
        res.send(users);

    } catch(err){
        res.status(500).send(err.message);
    }
}

export async function usersById(req, res){
    const {id} = req.params;
    try{
        const users = await getUsersById(id);
        if(users.rowCount === 0) return res.status(404).send({message: "Este usuário não existe!"});

        res.send(users.rows[0]);
    }catch(err){
        res.status(500).send(err.message);
    }
}