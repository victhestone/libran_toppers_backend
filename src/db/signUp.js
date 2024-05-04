import bcrypt from 'bcrypt';
import { UserModel } from '../models/user.js';

export const signUp = async (user) => {
    const toAddUser = new UserModel({
        id: user.id,
        username: user.username,
        email: user.email,
        password: bcrypt.hashSync(user.password, 8),
        cardCollection: JSON.stringify([]),
        boosterPacks: [{
            id: "gothurial",
            name: "Gothurian Pack",
            amount: 0
        }, 
        {
            id: 'lucarian',
            name: "Lucarian Pack",
            amount: 0
        },
        {
            id: "neutral",
            name: "Neutral Pack",
            amount: 0
        }],
        starterPacks: [],
        isAdmin: false
    })
    await toAddUser.save();
}