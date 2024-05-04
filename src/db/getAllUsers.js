import UserModel from "../models/user.js";

async function getAllUsers() {
    const users = await UserModel.find({}).select({ "password": 0 });
    return users;
}

export default getAllUsers
export {getAllUsers}