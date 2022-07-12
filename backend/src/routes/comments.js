// import express from 'express'
const express = require('express')
const router = express.Router()

const CommentsController = require('../controllers/comments/CommentsController')
router.use(`/comments`, CommentsController)

module.exports = router