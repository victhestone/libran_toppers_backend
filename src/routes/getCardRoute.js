import getCard from '../db/getCard.js';

 const getCardRoute = {
    method: 'get',
    path: '/cards/:id',
    handler: async (req, res) => {
        const { id } = req.params;
        const card = await getCard(id);
        res.status(200).json(card);
    }
}
export default getCardRoute
export {getCardRoute}