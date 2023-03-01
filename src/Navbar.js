import React from 'react'
import  "./Navbar.css"
import Imagetdi from './image/TDI_LOGO-removebg-preview.png'
function Navbar() {
  return (
    <>
      <div className='navbar'>
            <div  className='navbar-box1'>
              <img className='nav-img' src={Imagetdi}/>
            </div>
            <div className='navbar-box2'>
                <p className='title2'>Home</p>
                <p className='title2'>About</p>
                <p className='title2'>Contact us</p>
            </div>
          
      </div>
    </>
  )
}

export default Navbar