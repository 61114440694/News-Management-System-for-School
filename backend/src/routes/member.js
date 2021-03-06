// import express from 'express'
const express = require('express')
const router = express.Router()

const MemberController = require('../controllers/member/MemberController')
router.use(`/member`, MemberController)

module.exports = router