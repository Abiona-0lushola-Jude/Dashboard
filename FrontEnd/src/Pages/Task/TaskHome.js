import React from 'react'
import TaskForm from './TaskForm'
import TaskList from './TaskList'

const TaskHome = () => {
  return (
    <div>
      <h1>Task Page</h1>
      <div className="row container-md">
        <div className='col-8 team-home'>
          <TaskList />
        </div>
        <div className='col-4'>
          <TaskForm />
        </div>
      </div>
      
    </div>
  )
}

export default TaskHome
