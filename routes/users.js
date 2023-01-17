let router = require('express').Router()
let { create, read} = require('../controllers/user')

router.post('/user/',create)
router.get('/user/:id',read)
module.exports = router;