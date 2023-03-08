const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/hotel", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to hotel database"))
    .catch(err => console.log("Failed to connect to database", err));