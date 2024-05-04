import updateUser from '../db/updateUser.js';

/**
 * @openapi
 * /users/:id:
 *   patch:
 *     description: Update a field of a user
 *     responses:
 *       200:
 *         description: updated user
 */
 const updateUserRoute = {
    method: 'patch',
    path: '/users/:id',
    handler: async (req, res) => {
        const { id } = req.params;

        if(id !== req.user.id && !req.user?.isAdmin) {
            res.status(403).send({ message: "Cant update other users" });
            return;
        }
        const newUser = req.body;
        try {
            const user = await updateUser(id, newUser);
            res.status(200).json(user);
        } catch (error) {
            console.error(error)
            res.status(500);
        }
        
    }
}
export default updateUserRoute
export {updateUserRoute}