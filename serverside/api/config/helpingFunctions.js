var jwt = require('jsonwebtoken');
const {jwtSecret} = require("../config/vars");

exports.generateToken= async (user_data) => {
    return jwt.sign({ user_data }, jwtSecret, { expiresIn: '1d' })
}