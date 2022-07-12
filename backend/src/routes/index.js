const express = require('express')
const create_post = require('./create_post')
const member = require('./member')
const type_post = require('./type_post')
const comments = require('./comments')

const router = express.Router()

router.use(create_post)
router.use(member)
router.use(type_post)
router.use(comments)

module.exports = router