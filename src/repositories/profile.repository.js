import { db } from "../database/db.connection.js";

export function createPost(photo, description, userId) {
    return db.query(`
INSERT INTO posts (photo, description, "userId") VALUES ($1, $2, $3);
`, [photo, description, userId]);
}


export function getProfile(userId){
    return db.query(`
    SELECT users.id, users.name, users."profileImage", users.bio,
    JSON_AGG(posts) AS "userPost"
    FROM users 
    LEFT JOIN posts ON users.id = posts."userId"
    WHERE users.id=$1
    GROUP BY users.id, users.name;
    `, [userId]);
}
