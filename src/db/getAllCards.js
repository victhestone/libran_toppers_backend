import CardModel from "../models/card.js";

async function getAllCards() {
    const cards = await CardModel.find({});
    return cards;
}

export default getAllCards
export {getAllCards}