import React from 'react'
import {StudentContext} from '../Contexts/StudentContext'
import BarLoader from 'react-spinners/BarLoader'
import BeatLoader from 'react-spinners/BeatLoader'
import { teamContext } from '../Contexts/TeamContext'
import { taskContext } from '../Contexts/TaskContext'
import { useContext } from 'react'

const NumberPage = () => {

    const [team] = useContext(teamContext)
    const [students] = useContext(StudentContext)
    const [task] = useContext(taskContext)


    const taskLength = !task? "Loading" : task.length

    localStorage.setItem('message', taskLength)
  return (
    <div className='num row'>
        <div className="col border num-card my-4">
            <h5>Number of Team members:</h5>
            <h1>{!team? <BarLoader /> : team.length} <sub>members</sub></h1>
        </div>
        <div className="col border num-card my-4">
            <h5>Number of Students in the record:</h5>
            <h1>{!students? <BeatLoader /> : students.length} <sub>Students</sub></h1>
        </div>
        <div className="col border num-card my-4">
            <h5>Number of Tasks available:</h5>
            <h1>{taskLength} <sub>task</sub></h1>
        </div>
      
    </div>
  )
}

export default NumberPage
