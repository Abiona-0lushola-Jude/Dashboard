import React from 'react'
import useStudents from '../Hooks/useStudents'
import {RiDeleteBinLine} from 'react-icons/ri'
import {BsCheckLg} from 'react-icons/bs'

const StudentList = ({students}) => {
  


    const {deleteStudent, updateStudent} = useStudents()
   

 const btnColor = students.completed === 1 ? 'btn-success' : 'btn-secondary'
  async function handleClick(id){
    function check(){
       if(students.completed === 1){
        return students.completed = 0
      }else{
        return students.completed = 1
      }
    }
    await check()
    return updateStudent(id, students)

  }



  function handleDelete(id){
    deleteStudent(id)
  }

  return (
    <div className='border student'>
      <p>{students.name}</p>
      <p>{students.email}</p>
      <p>{students.phoneNumber}</p>
      <p>{students.duration}</p>
      <button className={`btn btnn btn-sm ${btnColor}`} onClick={() => handleClick(students.id)}>{students.completed === 1 && <BsCheckLg />} Completed</button>
      <button className='btn btnn btn-sm btn-danger' onClick={() => handleDelete(students.id)}><RiDeleteBinLine /> Delete</button>
    </div>
  )
}

export default StudentList
