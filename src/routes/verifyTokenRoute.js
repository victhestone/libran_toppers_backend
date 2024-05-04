import jwt from 'jsonwebtoken';
import { UserModel } from '../models/user.js';
/**
 * @openapi
 * /verify:
 *   get:
 *     description: Verify the jwt token
 *     responses:
 *       200:
 *         description: the verified token and user
 */

 const verifyTokenRoute = {
    method: 'get',
    path: '/verify',
    handler: async (req, res, next) => {
        if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            const token = req.headers.authorization.split(' ')[1]
            jwt.verify(token, process.env.API_SECRET, async function (err, decode) {
              if (err || !decode) {
                res.status(403).send({ message: "Invalid JWT token" });
                return;
              }
    
              const user = await UserModel.findOne({"id": decode.id });
    
                if (user) {
                    res.status(200).json({ user, token });
                } else {
                    res.status(403).send({ message: "Invalid JWT token" });
                }
            });
          } else {
            res.status(403).send({ message: "Invalid JWT token" });
          }
    }
}
export default verifyTokenRoute
export {verifyTokenRoute}