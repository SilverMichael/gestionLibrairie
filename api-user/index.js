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
const userRoute = require('./routes/user.route')
app.use('/api/user', userRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> {
    console.log(`server strted on ${PORT}`)
})

