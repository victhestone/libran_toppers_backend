import addCard from '../db/addCard.js';

 const addCardRoute = {
    method: 'post',
    path: '/cards',
    handler: async (req, res) => {
        const newCard = req.body;
        const card = await addCard(newCard);
        res.status(200).json(card);
    }
}
export default addCardRoute
export {addCardRoute}