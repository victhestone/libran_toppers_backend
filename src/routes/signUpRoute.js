import { signUp } from '../db/signUp.js';

const signUpRoute = {
    method: 'post',
    path: '/signup',
    handler: async (req, res) => {
        const user = req.body;
        await signUp(user);
        res.status(200).json(user);
    }
}

export default signUpRoute
export {signUpRoute}