// const express = require('express')

// const Joi = require('joi')
// const Validate = require('express-joi-validator')

// const CreatePostModel = require('../../models/CreatePostModel')

// const responseCode = require('../../configs/responseCode')
// const CreatePostDecorator = require('../../decorators/CreatePostDecorator')

// const router = express.Router()

// router.get('/', async (request, response, next) => {
    
//   // const data = {
//   //       _id: 'asd235$tsdf12fxzZZZ',
//   //       name: 'test01',
//   //       email: 'test01@gmail.com',
//   //       age: '1000'

//   //   }

//     console.log("first")
//     const data = await CreatePostModel.find()
    
//     const decorator = data.map((item)=> CreatePostDecorator.Decorator(item))
//     response.json({code: responseCode.SUCCESS, message: 'success', data: decorator})
// })

// router.post('/', async (request, response, next) => {
//     console.log(request.body)
//     const createpostModel = await CreatePostModel(request.body).save()
//     const decorator = await CreatePostDecorator.Decorator(createpostModel)
//     response.json({code: responseCode.SUCCESS, message: 'success', data: decorator})
// })

// // router.patch()

// // router.delete()


// module.exports = router
