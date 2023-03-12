require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 8000
const cors = require("cors")
const cookieParser = require("cookie-parser")
require("./config/mongoose.config")

app.use(cookieParser())
app.use(
    cors({credentials: true, origin: "http://localhost:3000"})
);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const hotelRoutes = require("./routes/routes.hotel")
hotelRoutes(app)
const authRoutes = require("./routes/routes.auth")
authRoutes(app)
const userRoutes = require("./routes/routes.user")
userRoutes(app)
const roomRoutes = require("./routes/routes.room")
roomRoutes(app)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))