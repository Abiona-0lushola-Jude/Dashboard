import React from 'react'
import { useContext } from 'react'
import { userContext } from './Pages/Contexts/UserContext'

const TopNav = ( {login, signup} ) => {

  const [user, setUser] = useContext(userContext)

  function logout(){
    setUser(null)
  }

  return (
    <div className='top-nav'>
        {user && <h5>Welcome, {!user ? "" : user.username}</h5>}
      <div className="reg-btn">
        {user ? <button className="logout bttn" onClick={logout}>LogOut</button> :
        (
          <>
          <button className="bttn  login-btn" onClick={login}>Login</button>
          <button className="bttn signup" onClick={signup}>Register</button>
          </>
        )}
      </div>

    </div>
  )
}

export default TopNav
