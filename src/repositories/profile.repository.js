import { db } from "../database/db.connection.js";

export function createPost(photo, description, userId) {
    return db.query(`
INSERT INTO posts (photo, description, "userId") VALUES ($1, $2, $3);
`, [photo, description, userId]);
}
