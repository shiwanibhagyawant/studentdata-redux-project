import React from 'react'
import { Outlet,NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <nav>
       <div className="nav-item">
          <a href="/">React Handson7 using Redux</a>
          <ul>
            <li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to='/'><i class="fa-solid fa-house"></i>&nbsp;&nbsp;Home</NavLink></li>
            <li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to='/student'><i class="fa-solid fa-user"></i>&nbsp;&nbsp;Student</NavLink></li>
            <li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to='/contact'><i class="fa-solid fa-address-book"></i>&nbsp;&nbsp;Contact</NavLink></li>
          </ul>
       </div>
    </nav>
    <Outlet />
    </>
  )
}
export default Navbar