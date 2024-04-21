import UserModel from '../models/user.js';

async function updateUser(userId, user) {
    const dbUser = await UserModel.findOneAndUpdate({ id: userId }, user);
    return dbUser;
}

export {updateUser}
export default updateUser;