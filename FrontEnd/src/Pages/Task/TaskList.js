import React from 'react'
import { useTask } from '../Hooks/useTask'
import TaskCard from './TaskCard'

const TaskList = ( {update}) => {

    const {GetAllTask, task,loading, error} = useTask()
    GetAllTask()

  return (
    <div className='team-list'>
      {loading? 'Loading': task.map(element=> {
        return(
            <TaskCard key={element.id} task={element} update={update}/>
        )
      })}
    </div>
  )
}

export default TaskList
