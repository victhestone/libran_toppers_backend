import jwt from 'jsonwebtoken';
import { UserModel } from '../models/user.js';

export const verifyToken = (req, res, next) => {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        jwt.verify(req.headers.authorization.split(' ')[1], process.env.API_SECRET, async function (err, decode) {
          if (err) { req.user = undefined; next(); }

          const user = await UserModel.findOne({"id": decode.id });

          if (user) {
            req.user = user;
            next();
          }
        });
      } else {
        req.user = undefined;
        next();
      }
}