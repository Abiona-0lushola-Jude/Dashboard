import  { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { taskContext } from '../Contexts/TaskContext'

export  function useTask() {

        const [loading, setLoading] = useState(true)
        const [task, setTask] = useContext(taskContext)
        const [error, setError] = useState('')

        const GetAllTask = ()=> {
            useEffect(()=>{
                axios.get('http://localhost:6001/task')
                .then(res => {
                    setLoading(false)
                    setTask(res.data)
                    setError('')
                })
                .catch(err=>{
                    setLoading(false)
                    setTask([])
                    setError("Error has occured!!!")
                })
            }, [])
        }
    
        const postTask = (post) => {
            axios.post('http://localhost:6001/task', post)
            .then(res=> {
                setLoading(false)
                setTask(prev=>{
                    return [
                        ...prev,
                        post
                    ]
                })
                setError('')
            })
            .catch(err=>{
                setLoading(false)
                setTask([])
                setError("Member cannot be posted")
            })
        }
    
    
        const deleteTask = (value)=> {
            axios.delete(`http://localhost:6001/task/${value}`)
            .then(res=> {
                setLoading(false)
                setTask(task.filter((element)=> element.id !== value))
                setError('')
            })
            .catch(err=>{
                setLoading(false)
                setTask([])
                setError("Cannot delete Member!")
            })
        }
     
        const updateTask = (id, post) => {
            axios.put(`http://localhost:6001/task/${id}`,post)
            .then(res=> {
                setLoading(false)
                setTask(task.map((el)=> el.id === id ? {...el,desc:post.desc, to:post.to, date:post.date}: el))
                setError('')
            })
            .catch(err=>{
                setLoading(false)
                setTask([])
                setError("Cannot delete Member!")
            })
        }



  return {loading, task, GetAllTask, postTask, deleteTask, updateTask, error}
}
