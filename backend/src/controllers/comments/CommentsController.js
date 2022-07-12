const express = require('express')

const Joi = require('joi')
const Validate = require('express-joi-validator')

const CommentsModel = require('../../models/CommentsModel')

const responseCode = require('../../configs/responseCode')
const CommentsDecorator = require('../../decorators/CommentsDecorator')
const Moment = require("moment")

const router = express.Router()

router.get('/', async (request, response, next) => {
    
    const data = await CommentsModel.find()

    const decorator = data.map((item)=> CommentsDecorator.Decorator(item))
    response.json({code: responseCode.SUCCESS, message: 'success', data: decorator})
})

router.post('/commentspost', async (request, response, next) => {
  
    const data = await CommentsModel(request.body).save()
    const decorator = await CommentsDecorator.Decorator(data)
    response.json({code: responseCode.SUCCESS, message: 'success', data: decorator})
    
})

router.post('/getcomments', async (request, response, next) => {
    
    const checkpost = request.body.data
    const data = await CommentsModel.find({"id_post":checkpost})
    const decorator = data.map((item) => CommentsDecorator.Decorator(item))
    response.json({code: responseCode.SUCCESS, message: 'success', data: decorator})
})

// router.patch()

// router.delete()


module.exports = router
