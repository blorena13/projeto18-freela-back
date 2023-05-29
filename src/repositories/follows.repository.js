import { db } from "../database/db.connection.js";

export function getFollowsByType(userId, type){
    return db.query(`
    SELECT * FROM follows 
    WHERE "userId"=$1 AND type=$2;
    `), [userId, type]
}

export function newFollow(idFollow, type, userId){
    return db.query(`
    INSERT INTO follows ("idFollow", type, "userId") 
    VALUES ($1, $2, $3);
    `, [idFollow, type, userId]);
}