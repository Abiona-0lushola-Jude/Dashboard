import React from 'react'
import useUser from '../Hooks/useUser'
import { userContext } from '../Contexts/UserContext'
import { useContext } from 'react'
import { useState } from 'react'

const Signout = () => {
    const [name] = useContext(userContext)
    const {signOut, loading, user, error} = useUser()

    const[form, setForm] = useState({
        username: name.username,
        password:""
    })

 function handleChange(e){
    const {name, value} = e.target
    setForm(prev=>{
        return{
            ...prev,
            [name]: value
        }
    })
 }


    function handleSubmit(e){
        e.preventDefault()
        signOut(form)
        window.location.reload()
    }
  return (
    <form className='login sign' onSubmit={handleSubmit}>
        <h5>Your account will be deleted if form is submitted.</h5>
        <label htmlFor="password">Enter account password: </label>
        <input type="password" name="password" id="password" className='form-control my-3'
        value={form.password} onChange={handleChange} />
        <button type="submit" className='bttn'>Submit</button>
        {/* {user &&  <p className='sign-success'>you are deleted</p>} */}
        {error && <p className='sign-err'>error has occurred</p>}
    </form>
  )
}

export default Signout
