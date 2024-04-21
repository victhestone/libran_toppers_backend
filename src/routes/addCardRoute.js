import addCard from '../db/addCard.js';

 const addCardRoute = {
    method: 'post',
    path: '/cards',
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