const DB = require('../Mysql/Database')
const bcrypt = require('bcrypt')

module.exports = {
    registerUser : async (req, res)=>{
        const userIdName = req.body.username
        const userIdEmail = req.body.email

        const q = "SELECT * FROM dashboard.user WHERE `username`= ? "

        await DB.query(q, [userIdName], async (err, data)=>{
            if(err) return res.status(500).json({message: err.message})
            
            if(data.length > 0){
                res.status(400).json("Username has been used!")
            }else{

                const salt = await  bcrypt.genSalt(10)
                const hashPassword = await bcrypt.hash(req.body.password, salt)

                const newQuery = "INSERT INTO dashboard.user (`username`,`email`, `password`) VALUES (?) "
                const values = [
                    userIdName,
                    userIdEmail,
                    hashPassword
                ]

                await DB.query(newQuery, [values], (err, data)=>{
                    if(err) return res.status(400).json({message: err.message})


                    return res.status(201).json({
                        username: userIdName,
                        email:userIdEmail
                    })
                })

            }
        })
    },

    loginUser: async (req, res)=>{

        const userIdName = req.body.username
        const userIdPaassword = req.body.password

        const q = "SELECT * FROM dashboard.user WHERE `username`= ? "

        await DB.query(q, [userIdName],async (err, data)=> {
            if(err) return res.status(500).json({message: err.message})

            if(data.length <= 0){
                return res.status(406).json("Username not found!")
            }

            const match  = await bcrypt.compare(userIdPaassword, data[0].password)
            if(!match){
                return res.status(400).json("Incorrect Password!")
            }

            return res.status(200).json({
                username: userIdName
            })

        })

    },

    signoutUser: async (req, res)=>{
        const userIdName = req.body.username
        const userIdPaassword = req.body.password

        const q = "SELECT * FROM dashboard.user WHERE `username`= ? "

        await DB.query(q, [userIdName],async (err, data)=> {
            if(err) return res.status(500).json({message: err.message})

            if(data.length <= 0){
                return res.status(400).json("Username not found!")
            }

            const match  = await bcrypt.compare(userIdPaassword, data[0].password)
            if(!match){
                return res.status(400).json("Incorrect Password")
            }else{
                const deleteQuery = "DELETE FROM dashboard.user WHERE  `username`= ?"

                await DB.query(deleteQuery, [userIdName], (err, data)=>{
                    if(err) return res.status(500).json({message: err.message})


                    return res.status(200).json(`${userIdName} has been deleted!`)
                })
            }

        })
    }

}