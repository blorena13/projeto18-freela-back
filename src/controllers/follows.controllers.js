import { getFollowsByType } from "../repositories/follows.repository.js";
import { newFollow } from "../repositories/follows.repository.js";


export async function getFollows(req, res) {
    const { userId } = res.locals;
    const { type } = req.params;
    
    try {
        const { rows: [follows] } = await getFollowsByType(userId, type);
        res.status(200).send(follows);

    } catch (err) {
        res.status(500).send(err.message);
    }
}


export async function startFollow(req, res) {
    const { type } = req.params;
    const { userId } = res.locals;
    const { idFollow } = req.params;
    
    try {
        await newFollow(idFollow, type, userId);
        res.sendStatus(201);

    } catch (err) {
        res.status(500).send(err.message);

    }
}

