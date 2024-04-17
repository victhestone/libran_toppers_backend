import  db  from './db.js';

const getCard = async (cardId) => {
    const connection = db.getConnection();
    // Query one document that matches the particular criteria
    const card = await connection.collection('cards').findOne({"id": cardId })
    return card;
}
export default getCard
export {getCard}