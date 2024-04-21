import express from 'express';
import routes, { unVerifiedRoutes } from './src/routes/index.js';
import dotenv from "dotenv";
import cors from 'cors';
import { verifyToken } from './src/db/verifyToken.js';
import { rateLimit } from 'express-rate-limit';
import mongoose from 'mongoose';

dotenv.config();

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 50, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
})

/* Create an Express application.*/
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use(limiter)

routes.forEach(route => {
    app[route.method](route.path, verifyToken, async (req, res) => {
        if(!req.user) {
            res.status(403).send({ message: "Invalid JWT token" });
            return;
        }
        return route.handler(req, res);
    });
});

unVerifiedRoutes.forEach(route => {
    app[route.method](route.path, route.handler);
});

const dBConnectionString = process.env.COSMOS_BOOKSTORE_DB_CONNECTION_STRING || "";
const PORT = process.env.PORT || 8080;

mongoose.connect(dBConnectionString, { useNewUrlParser: true });
mongoose.connection.once('open', function(){
    console.log('Database connected Successfully');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
}).on('error',function(err){
    console.log('Error', err);
});

