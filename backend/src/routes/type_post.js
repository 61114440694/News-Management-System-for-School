// import express from 'express'
const express = require('express')
const router = express.Router()

const TypePostController = require('../controllers/type_post/TypePostController')
router.use(`/type_post`, TypePostController)

module.exports = router