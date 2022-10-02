const express = require("express")
const router = express.Router()
const team = require('../Controllers/teamController')


// getting all team members
router.get('/team', team.getAllTeam)

// updating one member
router.put('/team/:id', team.updateTeam)

// posting a new member
router.post('/team', team.postTeam)

// delteing a member
router.delete('/team/:id', team.deleteTeam)


module.exports = router