import mongoose from "mongoose"

const AbilitySchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      description: {
          type: String,
          required: true,
      },
});

const CardSchema = new mongoose.Schema({
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
        type: String,
        required: true,
    },
    factions: {
        type: [String],
        required: true,
    },
    alignment: {
        type: String,
        required: true,
    },
    red: {
        type: Number,
        required: true,
    },
    blue: {
        type: Number,
        required: true,
    },
    quote: {
        type: String,
        required: true,
    },
    abilities: {
        type: [AbilitySchema],
    },
    version: {
        type: Number,
        required: true,
    },
    isTemp: {
        type: Boolean,
        required: false,
    }
  });

const CardModel = mongoose.model('cards', CardSchema);

export { CardModel, CardSchema, AbilitySchema };
export default CardModel; 