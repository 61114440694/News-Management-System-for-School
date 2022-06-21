// import express from 'express'
const express = require('express')

const router = express.Router()

// import UserController from '../controllers/users/UserController'
const HomeController = require('../controllers/home/HomeController')

router.use('/home', HomeController)

module.exports = router