import React from 'react'
import { useTask } from '../Hooks/useTask'
import useTeam from '../Hooks/useTeam'
import { taskContext } from '../Contexts/TaskContext'

const EditTask = ({form, action, submit}) => {
    const {team,loading, GetAllTeam} = useTeam()
    const { task, updateTask} = useTask()
    GetAllTeam()


  return (
    <form className='edit' onSubmit={submit}>
        <h5>Edit your task</h5>
        <label htmlFor="desc" className='form-label'>Desc: </label>
        <textarea name="desc" id="desc"  className='form-control' 
        value={form.desc} onChange={action}
        ></textarea>
        <label htmlFor="to" className='form-label'>To: </label>
        <select name="to" id="to" className='form-control' 
        value={form.to} 
        onChange={action}
        >
        <option value="Everyone">Everyone</option>
            {loading ? 'Loading' : team.map(element=> {
                return(
                    
                    <option key={element.id} value={element.name}>{element.name}</option>
                )
            })}
        </select>
        <label htmlFor="date" className='form-label'>Compeleted before/on: </label>
        <input type="date" name="date" id="date" className='form-control mb-3'
        value={form.date} 
        onChange={action} />
        <button type="submit" className='bttn'>Save</button>
    </form>
  )
}

export default EditTask
