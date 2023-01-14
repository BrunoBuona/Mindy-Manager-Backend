let router = require('express').Router()
let {registrar, verificar, signin, loginWithToken,unlogin, readUserData, updateUserData} = require('../controllers/user')
const accountExistsSignUp = require('../middlewares/accountExistsSignUp')
const accountExistsSignIn = require("../middlewares/accountExistsSignIn");
const mustSignIn = require("../middlewares/mustSignIn.js");
const accountHasBeenVerified = require("../middlewares/accountHasBeenVerified");
const schema = require('../schemas/user')
const schemasignin = require('../schemas/signin')
const schemaprofile = require('../schemas/profile')
const validator = require('../middlewares/validator')
const passport = require("../config/passport");

router.post('/singup',validator(schema),accountExistsSignUp,registrar)
router.get('/verify/:code',verificar)
router.post("/signin",validator(schemasignin), accountExistsSignIn, accountHasBeenVerified, signin);
router.post("/token", passport.authenticate("jwt", { session: false }), mustSignIn, loginWithToken);
router.put("/signout",passport.authenticate("jwt", { session: false }),unlogin);
router.get('/me/:id',readUserData)
router.patch('/me/:id',validator(schemaprofile),updateUserData)
module.exports = router;