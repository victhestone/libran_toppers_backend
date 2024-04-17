import db from './db.js';

async function getAllCards() {
    const connection = db.getConnection();
    const cursor = await connection.collection('cards').find();
    const cards = await cursor.toArray();
    return cards;
}

export default getAllCards
export {getAllCards}