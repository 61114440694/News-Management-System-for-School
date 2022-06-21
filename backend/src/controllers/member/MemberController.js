const express = require('express')

const Joi = require('joi')
const Validate = require('express-joi-validator')

const MemberModel = require('../../models/MemberModel')

const responseCode = require('../../configs/responseCode')
const MemberDecorator = require('../../decorators/MemberDecorator')

const router = express.Router()

router.get('/member', async (request, response, next) => {
    
  // const data = {
  //       _id: 'asd235$tsdf12fxzZZZ',
  //       name: 'test01',
  //       email: 'test01@gmail.com',
  //       age: '1000'

  //   }
  

    console.log("first")
    const data = await MemberModel.find()
    
    const decorator = data.map((item)=> MemberDecorator.Decorator(item))
    response.json({code: responseCode.SUCCESS, message: 'success', data: decorator})
})

router.post('/login', async (request, response, next) => {
    
    console.log("first")
    const data = await MemberModel.find({email:request.body.email , password:request.body.password})
    
    const decorator = data.map((item)=> MemberDecorator.Decorator(item))
    response.json({code: responseCode.SUCCESS, message: 'success', data: decorator})
})

router.post('/addmember', async (request, response, next) => {
    console.log(request.body)
    request.body.data.map(async (items)=>{
      console.log(items["number"])
      await MemberModel.update(
        {
          fullname : items["fullname"],
        }, 
         {
          $setOnInsert: {
            fullname : items["fullname"],
            email : items["email"],
            password : items["password"],
            status : items["status"],
      }
         },
         {upsert: true}
      )
    })
    // const memberModel = await MemberModel(request.body).save()
    // const decorator = await MemberDecorator.Decorator(memberModel)
    response.json({code: responseCode.SUCCESS, message: 'success', data: "data"})
})

// router.patch()

// router.delete()


module.exports = router
