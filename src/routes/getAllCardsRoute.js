import getAllCards from '../db/getAllCards.js';

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