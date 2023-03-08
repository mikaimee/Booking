const mongoose = require("mongoose")

const HotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    typeOfHotel: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    distance: {
        type: String,
        required: true
    },
    photos: {
        type: [String]
    },
    description: {
        type: String, 
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    rooms: {
        type: [String]
    },

    cheapestPrice: {
        type: Number
    },
    featured: {
        type: Boolean,
        default: false
    }
})

const Hotel = mongoose.model("Hotel", HotelSchema)
module.exports = Hotel;