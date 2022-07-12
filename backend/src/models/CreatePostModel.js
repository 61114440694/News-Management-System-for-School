const mongoose = require('mongoose')

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
    seepost: {
        type: Array,
        require: true
    },
    useridpost:{
        type:String,
        require:true
    }

})

const CreatePostModel = mongoose.model('create_post', CreatePostSchema)
module.exports = CreatePostModel
