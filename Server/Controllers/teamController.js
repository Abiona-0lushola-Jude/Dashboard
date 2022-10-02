const database = require('../Mysql/Database')

module.exports= {
    getAllTeam: async (req, res)=>{
            const q = await "SELECT * FROM dashboard.team"
            database.query(q, (err, data)=>{
                if(err) return res.json({message: err.message})
        
                return res.json(data)    
            })
    },
    deleteTeam: async (req, res)=> {
        const taskId = req.params.id
        const q  = await "DELETE FROM dashboard.team where id = ? "

        database.query(q, [taskId], (err, data)=>{
            if(err) return res.json({message: err.message})
        
            return res.json({message: "Data has been deleted successfully!"}) 
        })
    },
    updateTeam: async (req, res)=>{
        const taskId = req.params.id
        const q = "UPDATE dashboard.team SET `name`=? , `title`=? , `desc`=?, `image`=? where id =?"

        const values = [
            req.body.name,
            req.body.title,
            req.body.desc,
            req.body.image
        ]
        database.query(q, [...values, taskId], (err, data)=>{
            if(err) return res.json({message: err.message})
        
            return res.json({message: "Data has been updated successfully!"}) 
        })
    },
    postTeam: async (req,res)=>{
        const q = "INSERT INTO dashboard.team (`name`,`title`,`desc`, `image`) VALUE (?) "
        const values = [
            req.body.name,
            req.body.title,
            req.body.desc,
            req.body.image
        ]

        database.query(q, [values], (err, data)=> {
            if(err) return res.json({message: err.message})
        
            return res.json({message: "Data has been posted successfully!"})
        })
    },

}