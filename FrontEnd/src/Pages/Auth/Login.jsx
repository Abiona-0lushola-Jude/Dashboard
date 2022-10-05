import React, {useState} from 'react'
import useUser from '../Hooks/useUser'
import { useNavigate } from 'react-router-dom'

const Login = ({close}) => {
  const navigate = useNavigate()

  const {loginUser, error, user, setError} = useUser()

    const [logForm, setLogForm] = useState({
        username:"",
        password:""
    })

    const handleChange = (e) =>{
        
        const {name, value} = e.target

        setLogForm(prev=>{
            return{
                ...prev,
                [name]:value
            }
        })
        
    }

    const username = !user ? "loading" : user


      async function handleSubmit(e){

        e.preventDefault()
        await loginUser(logForm)
        if(error === null){
          return close()
        }
        navigate('/')
    }

    

  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" className='form-label'>Username: </label>
        <input type="text" name="username" id="username"  className='form-control' value={logForm.username} onChange={handleChange} required={true}/>
        <label htmlFor="email" className='form-label'>Password: </label>
        <input type="password" name="password" id="password" className='form-control' value={logForm.password} onChange={handleChange} required={true}/>
        <div className="btn-grp">
          <button className='button login-btn'>Login</button>
        </div>
        {error && <p className="err">{error}</p>}
      </form>
    </div>
  )
}

export default Login
