const router= require('express').Router()
const bookController = require('../controllers/book.controller')

router.get("/", bookController.getAllBooks)
router.post('/add', bookController.addBook)
router.get('/book/:type', bookController.getBookByGenre)
router.get('/book/:author/:type', bookController.getBookByAuthorAndType)

module.exports = router