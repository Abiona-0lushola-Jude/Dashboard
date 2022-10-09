import axios from 'axios'
import {useState, useEffect, useContext} from 'react'
import { StudentContext } from '../Contexts/StudentContext'


export default function useStudents() {

    const [loading, setLoading] = useState(true)
    const [students, setStudent] = useContext(StudentContext)
    const [error, setError] = useState('')



    const GetAllStudent = ()=> {
        useEffect(()=>{
            axios.get('http://localhost:6001/students')
            .then(res => {
                setLoading(false)
                setStudent(res.data)
                setError('')
            })
            .catch(err=>{
                setLoading(false)
                setStudent([])
                setError("Error has occured!!!")
            })
        }, [])
    }

    const deleteStudent = (value) =>{
        axios.delete(`http://localhost:6001/students/${value}`)
        .then(res=> {
            setLoading(false)
            setStudent(students.filter((student)=> student.id !== value))
            // setTodo(todo.filter((task)=> task.id !== id))
            setError('')
        })
        .catch(err=>{
            setLoading(false)
            setStudent([])
            setError("Cannot delete data!")
        })
    }

    const postStudent = (post) =>{
        axios.post('http://localhost:6001/students', post)
        .then(res=> {
            setLoading(false)
            setStudent(prev=>{
                return [
                    ...prev,
                    post
                ]
            })
            setError('')
        })
        .catch(err=>{
            setLoading(false)
            setStudent([])
            setError("Student cannot be posted")
        })
    }


    const updateStudent = (id, post) =>{
        axios.put(`http://localhost:6001/students/${id}`, post)
        .then(res=> {
            setLoading(false)
            setStudent(students.map((el) => el.id === id ? {...el, completed: post.completed} : el))
            setError('')
        })
        .catch(err=>{
            setLoading(false)
            setStudent([])
            setError("Student cannot be posted")
        })
    }

  return { GetAllStudent, loading, error, students, deleteStudent, postStudent, updateStudent} 
}
