const mongoose = require('mongoose')
const constants = require('../configs/constants')   

const HomeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        age: {
            type: String
        }
    }
)

const HomeModel = mongoose.model('home', HomeSchema)

module.exports = HomeModel