import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaThLarge} from 'react-icons/fa'
import {FaTasks} from 'react-icons/fa'
import {RiTeamLine} from 'react-icons/ri'
import { userContext } from './Contexts/UserContext'
import { useContext } from 'react'

const Navbar = () => {
  
  const [user] = useContext(userContext)
  const username = !user ? "": user.username
  return (
    <div className='nav-list'>
      <div className="nav-top">
        <NavLink to='/' className='menu'>
          <FaThLarge />
          <p className='menu-text'>Dashboard</p> 
        </NavLink>
        <NavLink to='/task' className='menu'>
          <FaTasks />
          <p className='menu-text'>Tasks</p> 
          </NavLink>
        <NavLink to='/team' className='menu'>
          <RiTeamLine />
           <p className='menu-text'>Members</p> 
          </NavLink>
        <NavLink to='/message' className='menu'>

            <p className='menu-text'>Message</p> 
          </NavLink>
        <NavLink to='/students' className='menu'>

            <p className='menu-text'>Students</p> 
        </NavLink>
      </div>
      
      <div className="nav-below">
        {username && 
        <>
        <h6 className='name'>{username}</h6>
        <button className="logout bttn btn-lg">Sign Out</button>
        </>
        }
      </div>
    </div>
  )
}

export default Navbar
