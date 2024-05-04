import addCards from '../db/addCards.js';

/**
 * @openapi
 * /cards:
 *   post:
 *     description: Add multiple cards
 *     responses:
 *       200:
 *         description: Returns an array of the newly created cards
 */
 const addCardsRoute = {
    method: 'post',
    path: '/cards',
    handler: async (req, res) => {
        const newCards = req.body;
        try {
            const cards = await addCards(newCards);
            res.status(200).json(cards);  
        } catch (error) {
            console.error(error)
            res.status(500);
        }
        
    }
}
export default addCardsRoute
export {addCardsRoute}