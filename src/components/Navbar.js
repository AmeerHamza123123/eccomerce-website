import React from 'react'

import { Link } from 'react-router-dom'
function Navbar(props) {
  return (
    <>
      <div className='navbar'>
        <ul className='navlinks'>
          <li><div className='div'><Link to='/'>Home</Link> </div></li>
          <li> <div className='div'><Link to="/about">About</Link> </div></li>
          <li> <div className='div'><Link to='/signin'>Contact</Link> </div></li>
          <li> <div className='div'><Link to='/feedback'>Feedback</Link> </div></li>
          <li> <div className='div'><Link to='/cart'>Cart</Link> </div></li>
          
          <div className={`modechange`}  >
            <input className="form-check-input bg-success " onClick={() => props.pric()} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" style={{ height: "10px" }} htmlFor="flexSwitchCheckDefault"></label>
          </div>
        </ul>
          
      </div>
          <div>
            <marquee width="60%" direction="right" >
            This is a sample scrolling text that has scrolls in the upper direction.This is a sample scrolling text that has scrolls in the upper
            </marquee>
            
        </div>
    </>
  )
}

export default Navbar
