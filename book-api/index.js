const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
require('dotenv').config({path: './env'})
const path = require('path')

app.use(cors())
app.options('*', cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//route
const bookRoute = require('./routes/book.route')
app.use('/api/book', bookRoute)

const PORT = process.env.PORT || 5001

app.listen(PORT, ()=> {
    console.log(`server book started on ${PORT}`)
})
