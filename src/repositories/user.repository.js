import { db } from "../database/db.connection.js";

export function getUserByEmail(email) {
    return db.query(`SELECT * FROM users WHERE email=$1;`, [email]);
}

export function createUser(name, email, password, bio, profileImage){
    return db.query(`
    INSERT INTO users (name, email, password, bio, profileImage) 
    VALUES ($1, $2, $3, $4, $5);`,
    [name, email, password, bio, profileImage]
    )
}