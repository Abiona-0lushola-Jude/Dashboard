import React from 'react'
import FileBase64 from 'react-file-base64'

const EditTeam = ({form, action, submit}) => {
  return (
    <form onSubmit={submit}>

        <h3>Edit Your Profile</h3>
        <label htmlFor="name" className='form-label py-2'>Name of Team member:</label>
        <input type="text"  className='form-control py-2' 
        name="name" 
        id="name" 
        placeholder='Surname Firstname Lastname'
        required={true}
        value={form.name}
        onChange={action}
        />
        <label htmlFor="name" className='form-label py-2'>Title:</label>
        <input type="text"  className='form-control py-2' 
        name="title" 
        id="title" 
        placeholder='Your post/position in the company'
        value={form.title}
        onChange={action}
        required={true}
        />
        <label htmlFor="desc" className='form-label py-2'>Short Description: </label>
        <textarea 
        name="desc" id="desc" 
        className='form-control py-2'
        placeholder='Short note about yourself'
        value={form.desc}
        onChange={action}
        ></textarea>
        
        <button className='btn btn-lg bg-secondary mt-4 text-white'>Save</button>
    </form>
  )
}

export default EditTeam
