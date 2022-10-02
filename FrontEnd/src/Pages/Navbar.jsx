import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaThLarge} from 'react-icons/fa'
import {FaTasks} from 'react-icons/fa'
import {RiTeamLine} from 'react-icons/ri'

const Navbar = () => {
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
        <h6>mario@dev</h6>
        <button className="btn btn-sm btn-warning text-white">Sign Out</button>
      </div>
    </div>
  )
}

export default Navbar
