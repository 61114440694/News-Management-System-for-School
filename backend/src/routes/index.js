const express = require('express')
const home = require('./home')
const create_post = require('./create_post')
const router = express.Router()

router.use(home)
router.use(create_post)

module.exports = router