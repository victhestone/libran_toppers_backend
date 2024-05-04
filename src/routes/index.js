import addCardRoute from "./addCardRoute.js"
import addCardsRoute from "./addCardsRoute.js"
import getAllCardsRoute from "./getAllCardsRoute.js"
import getAllUsersRoute from "./getAllUsersRoute.js"
import getCardRoute from "./getCardRoute.js"
import signInRoute from "./signInRoute.js"
import signUpRoute from "./signUpRoute.js"
import updateUserRoute from "./updateUserRoute.js"
import verifyTokenRoute from "./verifyTokenRoute.js"


const routes = [
    addCardRoute,
    addCardsRoute,
    getCardRoute,
    getAllCardsRoute,
    getAllUsersRoute,
    updateUserRoute
];

const unVerifiedRoutes = [
    signInRoute,
    signUpRoute,
    verifyTokenRoute
];
export default routes
export {routes, unVerifiedRoutes}
