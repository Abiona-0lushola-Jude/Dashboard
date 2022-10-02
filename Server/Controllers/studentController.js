const database = require('../Mysql/Database')

module.exports= {
    getAllStudent: async (req, res)=>{
            const q = await "SELECT * FROM dashboard.students"
            database.query(q, (err, data)=>{
                if(err) return res.json({message: err.message})
        
                return res.json(data)    
            })
    },
    deleteStudent: async (req, res)=> {
        const taskId = req.params.id
        const q  = await "DELETE FROM dashboard.students where id = ? "

        database.query(q, [taskId], (err, data)=>{
            if(err) return res.json({message: err.message})
        
            return res.json({message: "Data has been deleted successfully!"}) 
        })
    },
    updateStudent: async (req, res)=>{
        const taskId = req.params.id
        const q = "UPDATE dashboard.students SET `completed`=? where id =?"

        const values = [
            req.body.completed
        ]
        database.query(q, [values, taskId], (err, data)=>{
            if(err) return res.json({message: err.message})
        
            return res.json({message: "Data has been updated successfully!"}) 
        })
    },
    postStudent: async (req,res)=>{
        const q = "INSERT INTO dashboard.students (`name`,`email`,`phoneNumber`,`duration`,`completed`) VALUE (?) "
        const values = [
            req.body.name,
            req.body.email,
            req.body.phoneNumber,
            req.body.duration,
            req.body.completed
        ]

        database.query(q, [values], (err, data)=> {
            if(err) return res.json({message: err.message})
        
            return res.json({message: "Data has been posted successfully!"})
            return res.json(data)
        })
    },

}