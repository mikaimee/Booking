const mongoose = require("mongoose")

const RoomSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    maxPeople: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    roomNumber: [{
        number: Number, 
        unavaliableDates: {
            type:[Date]
        }
    }],
}, {timestamps: true})

const Room = mongoose.model("Room", RoomSchema)
module.exports = Room;