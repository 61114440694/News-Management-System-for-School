// import express from 'express'
const express = require('express')

const router = express.Router()

// import UserController from '../controllers/users/UserController'
const CreatePostController = require('../controllers/create_post/CreatePostController')

router.use('/create_post', CreatePostController)

module.exports = router