const express = require("express")
const router = express.Router()
const student = require('../Controllers/studentController')


// getting all students
router.get('/students', student.getAllStudent)

// upating a student
router.put('/students/:id', student.updateStudent)

// posting a student
router.post('/students', student.postStudent)

// deleting a student
router.delete('/students/:id', student.deleteStudent)

module.exports = router