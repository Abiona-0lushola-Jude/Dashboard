import React, { useState } from 'react'
import useTeam from '../Hooks/useTeam'
import { useTask } from '../Hooks/useTask'

const TaskForm = () => {
     const {GetAllTeam, team,loading } = useTeam()
     const {postTask} = useTask()
        GetAllTeam()


    const [taskForm, setTaskForm]=useState({
        name:"",
        desc:"",
        to:"Everyone",
        date:""
    })



    const handleChange= (e) =>{
        const {name, value, type, checked} = e.target
        setTaskForm(prev=>{
            return{
                ...prev,
                [name]:type === "checkedbox" ? checked : value
            }
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        
        postTask(taskForm)
    }


  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name" className='form-label py-2'>Name of Assignee:</label>
        <input type="text"  className='form-control py-2' 
        name="name" 
        id="name" 
        value={taskForm.name}
        onChange={handleChange}
        required={true}
        />
        <label htmlFor="desc" className='form-label py-2'>Task Description: </label>
        <textarea 
        name="desc" id="desc" 
        className='form-control py-2'
        value={taskForm.desc}
        onChange={handleChange}
        required={true}
        ></textarea>
        <label htmlFor="name" className='form-label py-2'>To: </label>
        <select 
        name="to" id="to" 
        className='form-select py-2'
        value={taskForm.to}
        onChange={handleChange}
        required={true}
        >
            <option value="Everyone">Everyone</option>
            {loading ? 'Loading' : team.map(element=> {
                return(
                    
                    <option key={element.id} value={element.name}>{element.name}</option>
                )
            })}
              </select>
        <label htmlFor="date" className='form-label py-2'>Completed before/on: </label>
        <input type="date" 
        name="date" id="date" 
        className='form-control py-2' 
        value={taskForm.date}
        onChange={handleChange}
        required={true}
        />
        <button className='btn btn-lg bg-secondary mt-4 text-white'>Send Task</button>
    </form>
  )
}

export default TaskForm
