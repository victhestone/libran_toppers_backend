import CardModel from "../models/card.js";

const getCard = async (cardId) => {
    const card = await CardModel.findOne({"id": cardId })
    return card;
}
export default getCard
export {getCard}