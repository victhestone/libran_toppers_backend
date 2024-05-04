import addCard from '../db/addCard.js';

/**
 * @openapi
 * /card:
 *   post:
 *     description: Add a card
 *     responses:
 *       200:
 *         description: Returns the newly created card
 */
 const addCardRoute = {
    method: 'post',
    path: '/card',
    handler: async (req, res) => {
        const newCard = req.body;
        try {
            const card = await addCard(newCard);
            res.status(200).json(card);  
        } catch (error) {
            console.error(error)
            res.status(500);
        }
        
    }
}
export default addCardRoute
export {addCardRoute}