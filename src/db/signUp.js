import bcrypt from 'bcrypt';
import db from './db.js';

export const signUp = async (user) => {
    const newUser = {
        ...user,
        password: bcrypt.hashSync(user.password, 8),
        cardCollection: JSON.stringify([]),
    };
    const connection = db.getConnection();
    await connection.collection('users').insertOne(newUser);
}