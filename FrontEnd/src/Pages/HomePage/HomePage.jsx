import React from 'react'
import { useTask } from '../Hooks/useTask'
import LastTask from './LastTask'
import NumberPage from './NumberPage'
import RandomTeam from './RandomTeam'
import useStudent from '../Hooks/useStudents'

const HomePage = () => {

  const {GetAllStudent} = useStudent()
  GetAllStudent()

  // Here is the condition to get the last task inputed from the server
  const {GetAllTask, task, loading} = useTask()
  GetAllTask()
  const lastTask = loading ? "loading" : task[task.length -1]


  // Here is condtion for a random member in the team
  return (
    <div className='container-lg'>
      <div className="row">
        <div className="col-3">
          <div className="task-dash num-card">
            <h5 color='red'>Last Task By {lastTask.name}</h5>
            <LastTask task={lastTask}/>
          </div>
          <div className="dash-member mt-5 num-card border">
            <h5>Team Member</h5>
            <RandomTeam />
          </div>
        </div>
        <div className="col-6 border ">
          <h1>Chart of the students intake</h1>
        </div>
        <div className="col-3">
          <h3>Analysis</h3>
          <NumberPage />
        </div>
      </div>
    </div>
  )
}

export default HomePage
