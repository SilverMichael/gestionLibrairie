const router= require('express').Router()
const upload = require('../middleware/upload');
const bookController = require('../controllers/book.controller')


router.post('/upload', upload.single('image'), bookController.uploadCover);



module.exports = router;