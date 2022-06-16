const express = require('express')

const Joi = require('joi')
const Validate = require('express-joi-validator')

const HomeModel = require('../../models/HomeModel')

const responseCode = require('../../configs/responseCode')
const HomeDecorator = require('../../decorators/HomeDecorator')

const router = express.Router()

router.get('/', async (request, response, next) => {
    
  // const data = {
  //       _id: 'asd235$tsdf12fxzZZZ',
  //       name: 'test01',
  //       email: 'test01@gmail.com',
  //       age: '1000'

  //   }

    console.log("first")
    const data = await HomeModel.find()
    
    const decorator = data.map((item)=> HomeDecorator.Decorator(item))
    response.json({code: responseCode.SUCCESS, message: 'success', data: decorator})
})

router.post('/', async (request, response, next) => {

    const homeModel = await HomeModel(request.body).save()
    const decorator = await HomeDecorator.Decorator(homeModel)
    response.json({code: responseCode.SUCCESS, message: 'success', data: decorator})
})

// router.patch()

// router.delete()


module.exports = router
