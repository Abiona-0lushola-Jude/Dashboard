const database = require('../Mysql/Database')

module.exports= {
    getAllTask: async (req, res)=>{
            const q = await "SELECT * FROM dashboard.task"
            database.query(q, (err, data)=>{
                if(err) return res.json({message: err.message})
        
                return res.json(data)    
            })
    },
    deleteTask: async (req, res)=> {
        const taskId = req.params.id
        const q  = await "DELETE FROM dashboard.task where id = ? "

        database.query(q, [taskId], (err, data)=>{
            if(err) return res.json({message: err.message})
        
            return res.json({message: "Data has been deleted successfully!"}) 
        })
    },
    updateTask: async (req, res)=>{
        const taskId = req.params.id
        const q = "UPDATE dashboard.task SET  `desc`=? , `to`=?, `date`=? where id =?"

        const values = [
            req.body.desc,
            req.body.to,
            req.body.date
        ]
        database.query(q, [...values, taskId], (err, data)=>{
            if(err) return res.json({message: err.message})
        
            return res.json({message: "Data has been updated successfully!"}) 
        })
    },
    postTask: async (req,res)=>{
        const q = "INSERT INTO dashboard.task (`name`,`desc`,`to`, `date`) VALUE (?) "
        const values = [
            req.body.name,
            req.body.desc,
            req.body.to,
            req.body.date
        ]

        database.query(q, [values], (err, data)=> {
            if(err) return res.json({message: err.message})
        
            return res.json({message: "Data has been posted successfully!"})
        })
    },
}