import getAllCards from '../db/getAllCards.js';

/**
 * @openapi
 * /cards:
 *   get:
 *     description: Get all cards
 *     responses:
 *       200:
 *         description: Returns an array of all the cards
 */
 const getAllCardsRoute = {
    method: 'get',
    path: '/cards',
    handler: async (req, res) => {
        const books = await getAllCards();
        res.status(200).json(books);
    }
}
export default getAllCardsRoute
export {getAllCardsRoute}