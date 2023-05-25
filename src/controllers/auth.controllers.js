import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import { createUser, getUserByEmail } from "../repositories/user.repository.js";
import { createSession } from "../repositories/auth.repository.js";

export async function signUp(req, res) {
    const { name, email, password, confirmPassword, profileImage, bio } = req.body;

    try {
        const user = await getUserByEmail(email);
        if (user.rowCount !== 0) return res.status(409).send({ message: "E-mail já foi cadastrado" });

        const hash = bcrypt.hashSync(password, 10);
        await createUser(name, email, hash, profileImage, bio);

        res.sendStatus(201);

    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function signIn(req, res) {
    const { email, password } = req.body;
    try {
        const user = await getUserByEmail(email);
        if (user.rowCount === 0) return res.status(401).send({ message: "E-mail não cadastrado" });

        const existsPassword = bcrypt.compareSync(password, user.rows[0].password)
        if (!existsPassword) return res.status(401).send({ message: "Senha incorreta!" });

        const token = uuid();
        await createSession(user.rows[0].id, token);
        res.status(200).send({ token });
    } catch (err) {
        res.status(500).send(err.message);
    }
}