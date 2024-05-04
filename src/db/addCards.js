import CardModel from '../models/card.js';

const addCards = async (cards) => {
    const cardArray = [];

    cards.forEach(card => {
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
        });
        cardArray.push(toAddCard)
    })

    const addedCards = await CardModel.insertMany(cardArray);
    return addedCards;
}
export default addCards
export { addCards }