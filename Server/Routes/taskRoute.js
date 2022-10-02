const express = require("express")
const router = express.Router()
const task = require('../Controllers/taskController')

// Getting all Task
router.get('/task', task.getAllTask)

// Deleting a Task
router.delete('/task/:id', task.deleteTask)

// upadting a task
router.put('/task/:id', task.updateTask)

// posting/adding a task
router.post('/task', task.postTask)

module.exports = router