import React from 'react'
import TeamForm from './TeamForm'
import TeamList from './TeamList'
import EditTeam from './EditTeam'
import { useState } from 'react'
import useTeam from '../Hooks/useTeam'

const TeamHome = () => {

  const {GetAllTeam, team, updateTeam:updating} = useTeam()
  GetAllTeam()

  const [open, setOpen] = useState(null)

  const [editTeam, setEditTeam] =useState ({
    name:"",
    title:"",
    desc:"",
    teamId:""
  })

  const handleChange = (e) =>{
    const {name, value, type, checked} = e.target

    setEditTeam(prev=>{
        return{
            ...prev,
            [name]:type === "checkbok" ? checked : value
        }
    })
}



// fynction to submit the editted form to the database
  function handleSubmit(e){
    toClose()
    e.preventDefault()

    updating(editTeam.teamId, editTeam)
    // console.log(editTeam)
  }

  function updateTeam(id){
    toOpen()
     team.map((el)=> el.id === id ? setEditTeam(prev=> {
       return{
         ...prev,
         name: el.name,
         title:el.title,
         desc:el.desc,
         teamId:id
       }
     }) : el)
   }


// this is used to open the edit component
   function toOpen(){
    setOpen(true)
   }


  //  Here is a function to close edit componet
   function toClose(){
    setOpen(false)
   }

  return (
    <div>
      <h1>Welcome to Team Page</h1>
      <div className="row container-md">
        <div className="col-8 team-home">
          <div >
            <TeamList pick={updateTeam}/>
          </div>
        </div>
        <div className="col-4">
         {!open && <TeamForm />}
         {open && <EditTeam form={editTeam} action={handleChange} submit={handleSubmit} />}
        </div>
      </div>
    </div>
  )
}

export default TeamHome
