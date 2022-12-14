import React from 'react'
import { useTask } from '../Hooks/useTask'

const TaskCard = ({task, update}) => {

    const {deleteTask} = useTask()

  return (
    <div className='team-card border'>
      <div>
          <h4>To: {task.to}</h4>
          <p className='desc'>Desc: {task.desc}</p>
          <p className='date'>Due Date: {task.date}</p>
          <p className='by'>By: {task.name}</p>
          <div className="btn-grouping">
          <button className='btn btn-sm btn-secondary' onClick={() => update(task.id)}>Update</button>
          <button className='btn btn-sm btn-danger' onClick={()=> deleteTask(task.id)}>Delete</button>
        </div>
      </div>
      
    </div>
  )
}

export default TaskCard
