const hotelController = require("../controllers/controller.hotel")
const verifications = require("../config/verifyToken")

module.exports = (app) => {
    app.post("/api/hotels", verifications.VerifyisAdmin, hotelController.createHotel)
    app.put("/api/hotels/:id",  verifications.VerifyisAdmin, hotelController.updateHotel)
    app.delete("/api/hotels/find/:id", verifications.VerifyisAdmin, hotelController.deleteHotel)

    app.get("/api/hotels", hotelController.getAllHotels)
    app.get("/api/hotels/find/:id", hotelController.getOneHotel)
    app.get("/api/hotels/byCity", hotelController.numHotelInCity)
    app.get("/api/hotels/byType", hotelController.numHotelByType)
} 