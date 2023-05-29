import { db } from "../database/db.connection.js";

export function getUserByEmail(email) {
    return db.query(`SELECT * FROM users WHERE email=$1;`, [email]);
}

export function createUser(name, email, password, bio, profileImage){
    return db.query(`
    INSERT INTO users (name, email, password, bio, "profileImage") 
    VALUES ($1, $2, $3, $4, $5);`,
    [name, email, password, bio, profileImage]
    )
}


export function getProfile(userId){
    return db.query(`
    SELECT users.id, users.name, users."profileImage", users.bio,
    JSON_AGG(posts) AS "userPost"
    FROM users 
    JOIN posts ON users.id = posts."userId"
    WHERE users.id=$1
    GROUP BY users.id, users.name;
    `, [userId]);
}

export function getAllUsers(userId){
    return db.query(`
    SELECT name, bio, "profileImage" FROM users WHERE id <> ?;
    `, [userId])
}

export function getUsersById(id){
    return db.query(`
    SELECT users.id, users.name, users.bio, users."profileImage", 
    (JSON_AGG(posts.*) 
    FROM posts 
    WHERE posts."userId" =$1
    ) AS "userPost"
    FROM users 
    JOIN posts ON users.id = posts."userId"
    WHERE users.id=$1;
    `, [id]);
}