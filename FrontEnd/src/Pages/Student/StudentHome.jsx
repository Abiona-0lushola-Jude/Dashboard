import React from 'react'
import useStudents from '../Hooks/useStudents'
import StudentList from './StudentList'
const StudentHome = () => {

    const {GetAllStudent, loading, error, students} = useStudents()
    GetAllStudent()
  return (
    <div>
      <h1>All Student</h1>
      {loading ? "Loading" : students.map(student=> {
        return(
          <StudentList key={student.id} students={student} />
        )
      })}
      
    </div>
  )
}

export default StudentHome
