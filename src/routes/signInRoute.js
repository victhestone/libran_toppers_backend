import {signIn} from '../db/signIn.js';

/**
 * @openapi
 * /signin:
 *   post:
 *     description: Sign in the user
 *     responses:
 *       200:
 *         description: the user with a jwt
 */
 const signInRoute = {
    method: 'post',
    path: '/signin',
    handler: async (req, res) => {
        const user = req.body;
        try {
            const newUser = await signIn(user);
            res.status(200).json(newUser);
        } catch (error) {
            console.error(error)
            res.status(500);
        }
    }
}
export default signInRoute
export {signInRoute}