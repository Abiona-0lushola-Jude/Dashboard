import React, { useState} from 'react'
import EditTask from './EditTask'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
import { useTask } from '../Hooks/useTask'

const TaskHome = () => {


  const [openEdit, setOpenEdit] = useState(null)

  const {GetAllTask,task, loading, updateTask:updating } = useTask()
  GetAllTask()

  const [editTask, setEditTask] = useState({
    desc:"",
    to:"",
    date:"",
    Taskid:""
  })

  function handleChange(e){
    const {name, value} = e.target

    setEditTask(prev=>{
        return{
            ...prev,
            [name]: value
        }
    })
}


function handleSubmit(e){
  e.preventDefault()


  updating(editTask.Taskid, editTask)
  closeEditTab()
}


  function updateTask(id){
   openEditTab()
    task.map((el)=> el.id === id ? setEditTask(prev=> {
      return{
        ...prev,
        desc: el.desc,
        to:el.to,
        date:el.date,
        Taskid:id
      }
    }) : el)
    

    return id
  }


  function openEditTab(){
    setOpenEdit(true)
  }

  function closeEditTab(){
    setOpenEdit(false)
  }


  return (
    <div>
      <h1>Task Page</h1>
      <div className="row container-md">
        <div className='col-8 team-home'>
          <TaskList update={updateTask} />
        </div>
        <div className='col-4'>
          {!openEdit && <TaskForm />}
          {openEdit && <EditTask form={editTask} action={handleChange} submit={handleSubmit} />}
        </div>
      </div>
      
    </div>
  )
}

export default TaskHome
