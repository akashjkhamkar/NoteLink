const express = require('express')

const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

//config
const config = require('./utils/config')

//routers 
const fileRouter = require('./controllers/file')

//mongo stuff
const mongoUrl = config.MONGODB_URI
mongoose.connect(mongoUrl, {
    useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true,
})

app.use(express.static('build'))
app.use(cors())
app.use(express.json())
app.use('/api/files', fileRouter)

module.exports = app


