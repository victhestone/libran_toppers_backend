import CardModel from '../models/card.js';

const addCard = async (card) => {
    const toAddCard = new CardModel({
        id: card.id,
        name: card.name,
        type: card.type,
        factions: card.factions,
        alignment: card.alignment,
        red: card.red,
        blue: card.blue,
        quote: card.quote,
        abilities: card.abilities,
        version: card.version,
        isTemp: card.isTemp
    })
    await toAddCard.save();
}
export default addCard
export { addCard }