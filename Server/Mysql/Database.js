const mysql = require('mysql')
require('dotenv').config()

const dashboardDataBase = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:process.env.password,
    database:"dashboard"
})

dashboardDataBase.connect(function (err){
    if(err){
        return console.log({message: err})
    }
    return console.log("Connected to Database")
})

module.exports = dashboardDataBase