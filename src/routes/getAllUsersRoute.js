import getAllUsers from '../db/getAllUsers.js';

/**
 * @openapi
 * /users:
 *   get:
 *     description: Get all users (for admins)
 *     responses:
 *       200:
 *         description: Returns an array of the users
 */
 const getAllUsersRoute = {
    method: 'get',
    path: '/users',
    handler: async (req, res) => {
        if(req.user?.isAdmin) {
            const books = await getAllUsers();
            res.status(200).json(books);
        } else {
            res.status(403).send({ message: "Cant see other users" })
        }

    }
}
export default getAllUsersRoute
export {getAllUsersRoute}