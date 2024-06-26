import { signUp } from '../db/signUp.js';

/**
 * @openapi
 * /signup:
 *   post:
 *     description: Create a new user
 *     responses:
 *       200:
 *         description: the newly created user
 */
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