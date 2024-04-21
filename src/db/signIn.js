import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { UserModel } from '../models/user.js';

export const signIn = async (receivedUser) => {
    const user = await UserModel.findOne({ "email": receivedUser.email });
    
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