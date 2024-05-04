import mongoose from "mongoose"

const BoosterPackSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
      },
    name: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
});

const UserSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        index: { unique: true, dropUps: true }
    },
    password: {
        type: String,
        required: true,
    },
    cardCollection: {
        type: String,
        required: true
    },
    boosterPacks: {
        type: [BoosterPackSchema],
        required: true,
    },
    starterPacks: {
        type: [String],
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: false,
        default: false
    }
});

const UserModel = mongoose.model('users', UserSchema);

export { UserModel }
export default UserModel;