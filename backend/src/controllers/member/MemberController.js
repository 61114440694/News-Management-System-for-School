const express = require('express')

const Joi = require('joi')
const Validate = require('express-joi-validator')

const MemberModel = require('../../models/MemberModel')

const responseCode = require('../../configs/responseCode')
const MemberDecorator = require('../../decorators/MemberDecorator')

const router = express.Router()

router.get('/teachers', async (request, response, next) => {
    const data = await MemberModel.find({status : "ครู"})

    const decorator = data.map((item) => MemberDecorator.Decorator(item))
    response.json({code: responseCode.SUCCESS, message: 'success', data: decorator})
})


router.get('/students', async (request, response, next) => {

    const data = await MemberModel.find({status : "นักเรียน"})

    const decorator = data.map((item) => MemberDecorator.Decorator(item))
    response.json({code: responseCode.SUCCESS, message: 'success', data: decorator})
})


router.post('/login', async (request, response, next) => {
    const data = await MemberModel.find({email: request.body.email, password: request.body.password})

    const decorator = data.map((item) => MemberDecorator.Decorator(item))
    response.json({code: responseCode.SUCCESS, message: 'success', data: decorator})
})


router.post('/addmember', async (request, response, next) => {
    
    request.body.data.map(async (items) => {
        console.log(items["number"])
        await MemberModel.update({
            fullname: items["fullname"]
        }, {
            $setOnInsert: {
                fullname: items["fullname"],
                email: items["email"],
                password: items["password"],
                status: items["status"],
                position: items["position"]
            }
        }, {upsert: true})
    })
    // const memberModel = await MemberModel(request.body).save()
    // const decorator = await MemberDecorator.Decorator(memberModel)
    response.json({code: responseCode.SUCCESS, message: 'success', data: "data"})
})


router.post('/userpost', async (request, response, next) => {
    console.log(request.body.data)
    const check = request.body.data
    const data = await MemberModel.find({email: check})

    const decorator = data.map((item) => MemberDecorator.Decorator(item))
    response.json({code: responseCode.SUCCESS, message: 'success', data: decorator})

})


router.post('/remove_member', async (request, response, next) => {
    console.log(request.body.data)
    const Data = request.body.data
    await MemberModel.remove({'_id': Data})

})


// router.patch()

// router.delete()


module.exports = router
