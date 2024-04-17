import addCardRoute from "./addCardRoute.js"
import getAllCardsRoute from "./getAllCardsRoute.js"
import getCardRoute from "./getCardRoute.js"
import signInRoute from "./signInRoute.js"
import signUpRoute from "./signUpRoute.js"


const routes = [
    addCardRoute,
    getCardRoute,
    getAllCardsRoute,
];

const unVerifiedRoutes = [
    signInRoute,
    signUpRoute
];
export default routes
export {routes, unVerifiedRoutes}
