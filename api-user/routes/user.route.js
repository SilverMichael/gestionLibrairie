const router= require('express').Router()
const userController = require('../controllers/user.controller')

router.post("/register", userController.register)
router.get("/signin", userController.signIn)
router.get("/signout", userController.signOut)

module.exports = router