const mongoose = require('mongoose')

const CommentsSchema = new mongoose.Schema(
    {
        id_post:{
            type:String,
            require:true
        },
        fullname: {
            type: String,
            require: true
        },   
        comment: {
            type: String,
            require: true
        },   
        date_time: {
            type: String,
            require: true
        },   
        position: {
            type: String,
            require: true
        },   
    }
)

const CommentsModel = mongoose.model( "comments" , CommentsSchema)

module.exports = CommentsModel