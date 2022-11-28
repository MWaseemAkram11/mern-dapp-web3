const path = require("path");
require("dotenv").config();
module.exports = {
    bdport: process.env.PORT,
    mongoUri:process.env.MONGO_URI,
    jwtSecret: process.env.JWT_SECRET,
    frontEncSecret: process.env.FRONT_ENC_SECRET,
    jwtExpirationInterval: process.env.JWT_EXPIRATION_MINUTES,
}