import React from 'react'
import { useState } from 'react'
import useUser from '../Hooks/useUser'

const Register = ({close, open}) => {
    const {postUser, error, user, setError} = useUser()

    const [regForm, setRegForm] = useState({
        username:"",
        email:"",
        password:""
    })

    const handleChange = (e) =>{
        
        const {name, value} = e.target

        setRegForm(prev=>{
            return{
                ...prev,
                [name]:value
            }
        })
        
    }

    function handleSubmit(e){
        e.preventDefault()
        postUser(regForm)
        if(!error){
          close()
        }
    }

  return (
    <div className='register' >
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" className='form-label'>Username: </label>
        <input type="text" name="username" id="username"  className='form-control' value={regForm.username} onChange={handleChange} required={true}/>
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" className='form-control' value={regForm.email} onChange={handleChange}/>
        <label htmlFor="email" className='form-label'>Password: </label>
        <input type="password" name="password" id="password" className='form-control' value={regForm.password} onChange={handleChange} required={true}/>
        <div className="btn-grp">
            <button className='button signup'>Register</button>
        </div>
        {error && <p className="err">{error}</p>}
        {user && <p className='success'>Successful!</p>}
        
      </form>
    </div>
  )
}

export default Register