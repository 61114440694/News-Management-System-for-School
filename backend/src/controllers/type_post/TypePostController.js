const express = require('express')

const Joi = require('joi')
const Validate = require('express-joi-validator')

const TypePostModel = require('../../models/TypePostModel')

const responseCode = require('../../configs/responseCode')
const TypePostDecorator = require('../../decorators/TypePostDecorator')

const router = express.Router()

router.get('/get_type', async (request, response, next) => {

    const data = await TypePostModel.find()

    const decorator = data.map((item) => TypePostDecorator.Decorator(item))
    response.json({code: responseCode.SUCCESS, message: 'success', data: decorator})
})


router.post('/add_type', async (request, response, next) => {

    const data = request.body
    await TypePostModel.update({
        value: data["value"],
    }, {
        $setOnInsert: {
            value: data["value"],
            label: data["label"],
            // color: Data["color"]
        }
    }, {upsert: true})

    response.json({code: responseCode.SUCCESS, message: 'success', data: "data"})
})

router.post('/delete_type', async (request, response, next) => {
    console.log(request.body.data)
    const data = request.body.data
    await TypePostModel.remove({'_id' : data})
    // const washingModel = await WashingModel.remove({ 'washingid': request.body.washingid })
    // response.json({code: responseCode.SUCCESS, message: 'success', data: "data"})
})

// router.patch()

// router.delete()


module.exports = router
