const mongoose = require('mongoose')

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
            type: String,
            require: true
        },
        position: {
            type: String,
            require: true
        },

        
    }
)

const MemberModel = mongoose.model('member', MemberSchema)

module.exports = MemberModel