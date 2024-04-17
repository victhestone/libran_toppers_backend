import {signIn} from '../db/signIn.js';

 const signInRoute = {
    method: 'post',
    path: '/signin',
    handler: async (req, res) => {
        const user = req.body;
        const newUser = await signIn(user);
        res.status(200).json(newUser);
    }
}
export default signInRoute
export {signInRoute}