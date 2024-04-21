import { signUp } from '../db/signUp.js';

const signUpRoute = {
    method: 'post',
    path: '/signup',
    handler: async (req, res) => {
        const user = req.body;
        try {
            await signUp(user);
            res.status(200).json(user);
        } catch (error) {
            console.error(error)
            res.status(500);
        }
        
    }
}

export default signUpRoute
export {signUpRoute}