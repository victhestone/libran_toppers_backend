import CardModel from '../models/card.js';

const addCard = async (card) => {
    const toAddCard = new CardModel({
        id: card.id,
        name: card.name,
        type: card.type,
        faction: card.faction,
        alignment: card.alignment,
        red: card.red,
        blue: card.blue,
        quote: card.quote,
        abilities: card.abilities,
        version: card.version
    })
    await toAddCard.save();
}
export default addCard
export { addCard }