const Hotel = require("../models/model.hotel")

// CREATE 
const createHotel = async (req, res) => {
    const newHotel = new Hotel(req.body)
    try{
        const createdHotel = await newHotel.save()
        res.status(200).json(createdHotel)
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

// UPDATE
const updateHotel = async (req, res) => {
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body }, 
            {new: true, runValidators: true}
        )
        res.status(200).json(updatedHotel)
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

// DELETE
const deleteHotel = async (req, res) => {
    try{
        const deletedHotel = await Hotel.findByIdAndDelete(
            req.params.id
        )
        res.status(200).json(deletedHotel)
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

// GET ONE HOTEL
const getOneHotel = async (req, res) => {
    try{
        const oneHotel = await Hotel.findById(
            req.params.id
        )
        res.status(200).json(oneHotel)
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

// GET ALL HOTELS
const getAllHotels = async (req, res) => {
    try{
        const allHotels = await Hotel.find()
        res.status(200).json(allHotels)
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

// HOTEL BY CITY
const numHotelInCity = async (req, res) => {
    const cities = req.query.cities.split(",")
    try{
        const list = await Promise.all(cities.map(city => {
            return Hotel.countDocuments({city:city})
        }))
        res.status(200).json(list)
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

// HOTEL BY TYPE
const numHotelByType = async (req, res) => {
    try{
        const hotelNum = await Hotel.countDocuments({typeOfHotel:"hotel"});
        const apartmentNum = await Hotel.countDocuments({typeOfHotel:"apartment"})
        const resortNum = await Hotel.countDocuments({typeOfHotel:"resort"})
        const villaNum = await Hotel.countDocuments({typeOfHotel:"villa"})
        const hostelNum = await Hotel.countDocuments({typeOfHotel:"hostel"})

        res.status(200).json([
            {typeOfHotel:"hotel", count:hotelNum},
            {typeOfHotel:"apartment", count:apartmentNum},
            {typeOfHotel:"resort", count:resortNum},
            {typeOfHotel:"villa", count:villaNum},
            {typeOfHotel:"hostel", count:hostelNum}
        ])
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

module.exports = {
    createHotel, 
    updateHotel, 
    deleteHotel, 
    getOneHotel, 
    getAllHotels, 
    numHotelInCity,
    numHotelByType}

