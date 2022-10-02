const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = process.env.PORT || 6001
const studentRoute = require('./Routes/studentRoute')
const teamRoute = require('./Routes/teamRoute')
const taskRoute = require('./Routes/taskRoute')
const userRoute  = require('./Routes/userRoute')


// middlewares
app.use(cors())
app.use(express.json())
// app.use(express.urlencoded({extended:false}))
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}))
app.use(bodyParser.text({ limit: '200mb' }))


// Routes
app.use('/', studentRoute)
app.use('/', teamRoute)
app.use('/', taskRoute)
app.use('/api', userRoute)


app.listen(PORT, ()=> console.log(`SERVER IS CONNECTED TO DATABASE AND RUNNING ON PORT ${PORT}`))
