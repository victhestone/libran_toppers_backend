import db from './db.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const signIn = async (receivedUser) => {
    const connection = db.getConnection();
    const user = await connection.collection('users').findOne({"email": receivedUser.email });
    
    const passwordIsValid = bcrypt.compareSync(receivedUser.password, user.password);

    if (!passwordIsValid) {
        throw new Error('Password is incorrect');
    }

    const token = jwt.sign({
        id: user.id
      }, process.env.API_SECRET, {
        expiresIn: 86400
    });

    return { user, token };
}