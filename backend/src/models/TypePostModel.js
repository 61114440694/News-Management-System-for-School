const mongoose = require('mongoose') 

const TypePostSchema = new mongoose.Schema(
    {
        value: {
            type: String,
            require: true
        },
        label: {
            type: String,
            require: true
        }
    }
)

const MemberModel = mongoose.model('type_post', TypePostSchema)

module.exports = MemberModel