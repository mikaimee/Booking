const roomController = require("../controllers/controller.room")
const verifications = require("../config/verifyToken")

module.exports = (app) => {
    app.post("/api/rooms/:hotelid", verifications.VerifyisAdmin, roomController.createRoom)
    app.put("/api/rooms/:id", verifications.VerifyisAdmin, roomController.updateRoom)
    app.delete("/api/rooms/:id/:hotelid", verifications.VerifyisAdmin, roomController.deleteRoom)
    app.get("/api/rooms", roomController.getAllRooms)
    app.get("/api/rooms/:id", roomController.getOneRoom)
} 
