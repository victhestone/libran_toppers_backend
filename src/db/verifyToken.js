import db from './db.js';
import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        jwt.verify(req.headers.authorization.split(' ')[1], process.env.API_SECRET, async function (err, decode) {
          if (err) { req.user = undefined; next(); }

          const connection = db.getConnection();
          const user = await connection.collection('users').findOne({"id": decode.id });

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