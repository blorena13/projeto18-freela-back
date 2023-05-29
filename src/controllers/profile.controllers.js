import { createPost } from "../repositories/profile.repository.js";
import { getProfile } from "../repositories/user.repository.js";

export async function newPost(req, res) {
    const  { photo, description } = req.body;
    const { userId } = res.locals.userId;

    try {
        const { rows: [result]} = await createPost(photo, description, userId);
        res.status(201).send(result);

    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function getUserProfile(req, res) {
    const { userId } = res.locals;
    try {
        const { rows: [user] } = await getProfile(userId);
        res.status(200).send(user)

    } catch (err) {
        res.status(500).send(err.message);
    }
}