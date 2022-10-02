import React from 'react'
import { useState } from 'react'
import FileBase64 from 'react-file-base64'
import useTeam from '../Hooks/useTeam'

const TeamForm = () => {

    const {postTeam} = useTeam()

    const [teamForm, setTeamForm] = useState({
        name:"",
        title:"",
        desc:"",
        image:"",
    })

    const handleChange = (e) =>{
        const {name, value, type, checked} = e.target
        setTeamForm(prev=>{
            return{
                ...prev,
                [name]:type === "checkbok" ? checked : value
            }
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        postTeam(teamForm)
        // console.log(teamForm.image)
    }
    
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name" className='form-label py-2'>Name of Team member:</label>
        <input type="text"  className='form-control py-2' 
        name="name" 
        id="name" 
        placeholder='Surname Firstname Lastname'
        value={teamForm.name}
        onChange={handleChange}
        required={true}
        />
        <label htmlFor="name" className='form-label py-2'>Title:</label>
        <input type="text"  className='form-control py-2' 
        name="title" 
        id="title" 
        placeholder='Your post/position in the company'
        value={teamForm.title}
        onChange={handleChange}
        required={true}
        />
        <label htmlFor="desc" className='form-label py-2'>Short Description: </label>
        <textarea 
        name="desc" id="desc" 
        className='form-control py-2'
        placeholder='Short note about yourself'
        value={teamForm.desc}
        onChange={handleChange}
        ></textarea>

        <label htmlFor="name" className='form-label py-2'>Image(not more than 10kb): </label>
        <FileBase64
        multiple={ false }
        className='form-control'
        onDone={({base64})=> setTeamForm(prev=> {
            return{
                ...prev,
                image:base64
            }
        })} />
        
        <button className='btn btn-lg bg-secondary mt-4 text-white'>Add Member</button>
    </form>
  )
}

export default TeamForm
