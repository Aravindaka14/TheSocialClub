import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    lastName: {
        type: String,
        min: 2,
        max: 50,
        required: true,
    },
    email: {
        type: String,
        mzx: 50,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        min: 5,
    },
    picturePath: {
        type: String,
        default: "",
    },
    friends: {
        type: Array,
        default: [],
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
},
    { timestamps: true })

const User = mongoose.model("User", UserSchema)

export default User;