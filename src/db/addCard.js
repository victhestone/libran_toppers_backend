import  db  from './db.js';

const addCard = async (card) => {
    const connection = db.getConnection();
    await connection.collection('cards').insertOne(card)
}
export default addCard
export { addCard }