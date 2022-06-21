const express = require('express')
const home = require('./home')
const create_post = require('./create_post')
const member = require('./member')

const router = express.Router()

router.use(home)
router.use(create_post)
router.use(member)

module.exports = router