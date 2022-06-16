const mongoose = require('mongoose')
const constants = require('../configs/constants')

const CreatePostSchema = new mongoose.Schema({
    header: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    imageURL: {
        type: String,
        require:true
    },
    start_time: {
        type: String,
        require: true
    },
    end_time: {
        type: String,
        require: true
    },
    seepost: {
        type: Array,
        require: true
    }

})

const CreatePostModel = mongoose.model('Create_Post', CreatePostSchema)
module.exports = CreatePostModel
