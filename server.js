const express = require('express')
const app = express()
const port = 8000
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routeUrls = require('./routes/routes')
const cors = require('cors')

dotenv.config()

const uriReq = "mongodb+srv://Ninja:Ninja@cluster0.tee3me8.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(uriReq, {useNewUrlParser: true, useUnifiedTopology: true})
.then( () => {console.log( `DB connected`)})
.catch(() => {console.log(`DB failed`)})

app.use(express.json())
app.use(cors())
app.use('/app', routeUrls)
app.listen(port, () => console.log(`server is running on the port ${port}`) )