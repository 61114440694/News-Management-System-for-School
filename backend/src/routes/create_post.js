const express = require('express')
const router = express.Router()

const CreatePostController = require('../controllers/create_post/CreatePostController')
router.use('/create_post', CreatePostController)

module.exports = router