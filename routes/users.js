let router = require('express').Router()
let { create, read ,update} = require('../controllers/user')

router.post('/user/',create)
router.get('/user/:id',read)
router.patch('/user/:id',update)
module.exports = router;