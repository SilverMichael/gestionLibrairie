const router= require('express').Router()
const userController = require('../controllers/user.controller')

router.post("/register", userController.register)
router.post("/signin", userController.signIn)
router.get("/signout", userController.signOut)

module.exports = router