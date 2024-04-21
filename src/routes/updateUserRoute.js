import updateUser from '../db/updateUser.js';

 const updateUserRoute = {
    method: 'patch',
    path: '/users/:id',
    handler: async (req, res) => {
        const { id } = req.params;

        if(id !== req.user.id && !req.user?.isAdmin) {
            res.status(403).send({ message: "Cant update other users" })
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