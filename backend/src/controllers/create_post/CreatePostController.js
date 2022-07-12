const express = require('express')

const Joi = require('joi')
const Validate = require('express-joi-validator')

const CreatePostModel = require('../../models/CreatePostModel')

const responseCode = require('../../configs/responseCode')
const CreatePostDecorator = require('../../decorators/CreatePostDecorator')
const Moment = require("moment")

const router = express.Router()

router.get('/', async (request, response, next) => {
    const data = await CreatePostModel.find()
    const decorator = data.map((item) => CreatePostDecorator.Decorator(item))
    response.json({code: responseCode.SUCCESS, message: 'success', data: decorator})
})

router.post('/edit', async (request, response, next) => {
    const data = await CreatePostModel.find({"useridpost": request.body.data})
    const decorator = data.map((item) => CreatePostDecorator.Decorator(item))
    response.json({code: responseCode.SUCCESS, message: 'success', data: decorator})
})

router.post('/select_type', async (request, response, next) => {

    const check = request.body.select
    const data = await CreatePostModel.find({"seepost": check})

    const decorator = data.map((item) => CreatePostDecorator.Decorator(item))
    response.json({code: responseCode.SUCCESS, message: 'success', data: decorator})

})


router.post('/', async (request, response, next) => {

    const createpostModel = await CreatePostModel(request.body).save()
    const decorator = await CreatePostDecorator.Decorator(createpostModel)
    response.json({code: responseCode.SUCCESS, message: 'success', data: decorator})
})


router.post('/detail', async (request, response, next) => {

    const data = await CreatePostModel.find({_id: request.body.data})
    const decorator = data.map((item) => CreatePostDecorator.Decorator(item))
    response.json({code: responseCode.SUCCESS, message: 'success', data: decorator})

})

router.post('/remove_post', async (request, response, next) => {

    const Data = request.body.data
   
    await CreatePostModel.remove({_id: Data})
})

router.post('/update_post', async (request, response, next) => {
    const Data = request.body.data

    await CreatePostModel.update({
        _id: Data["idpost"],
    },{
        $set:{
            header:Data["header"],
            description:Data["description"],
            imageURL:Data["imageURL"],
            start_time:Data["start_time"],
            seepost:Data["seepost"]
        }
    },{upsert:true})
    response.json({code: responseCode.SUCCESS, message: 'success', data: "data"})
    })




module.exports = router
