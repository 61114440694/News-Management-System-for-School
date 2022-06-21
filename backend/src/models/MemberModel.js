const mongoose = require('mongoose')
const constants = require('../configs/constants')   

const MemberSchema = new mongoose.Schema(
    {
        fullname: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        },
        status: {
            type: Boolean,
            require: true
        },
        
    }
)

const MemberModel = mongoose.model('member', MemberSchema)

module.exports = MemberModel