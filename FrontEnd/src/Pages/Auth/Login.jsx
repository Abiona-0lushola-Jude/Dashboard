import React from 'react'

const Login = () => {
  return (
    <div className='login'>
      <form>
        <label htmlFor="username" className='form-label'>Username: </label>
        <input type="text" name="username" id="username"  className='form-control'/>
        <label htmlFor="email" className='form-label'>Password: </label>
        <input type="password" name="password" id="password" className='form-control' />
        <p className="login-info">If you have not register, click sign up</p>
        <button className='btn btn-lg' >Login</button>
      </form>
    </div>
  )
}

export default Login
