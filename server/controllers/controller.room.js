const Room = require("../models/model.room")
const Hotel = require("../models/model.hotel")


//CREATE
const createRoom = async(req, res) => {
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body)

    try{
        const savedRoom = await newRoom.save()
        try{
            await Hotel.findByIdAndUpdate(hotelId, 
                {$push : {rooms: savedRoom._id }}
            )
        }
        catch (error) {
            res.status(500).json({
                success: false,
                error: error.message
            })
        }
        res.status(200).json(savedRoom)
    }
    catch (error){
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

// UPDATE
const updateRoom = async (req, res) => {
    try{
        const updatedRoom = await Room.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body }, 
            {new: true, runValidators: true}
        )
        res.status(200).json(updatedRoom)
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

// DELETE
const deleteRoom = async (req, res) => {
    const hotelId = req.params.hotelid;
    try{
        const deletedRoom = await Room.findByIdAndDelete(
            req.params.id
        )
        try{
            await Hotel.findByIdAndUpdate(hotelId, 
                {$pull : {rooms: req.params.id }}
            )
        }
        catch (error) {
            res.status(500).json({
                success: false,
                error: error.message
            })
        }
        console.log("Room is deleted")
        res.status(200).json(deletedRoom)
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

// GET ONE ROOM
const getOneRoom = async (req, res) => {
    try{
        const oneRoom = await Room.findById(
            req.params.id
        )
        res.status(200).json(oneRoom)
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

// GET ALL ROOMS
const getAllRooms = async (req, res) => {
    try{
        const allRooms = await Room.find()
        res.status(200).json(allRooms)
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

module.exports = {createRoom, updateRoom, deleteRoom, getAllRooms, getOneRoom}