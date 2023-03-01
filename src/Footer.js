import React from 'react'
import "./Footer.css"
import ImageLogo from "./Images/TDI LOGO.png"
import Imagedemo from "./Images/demo2.png"

function Footer() {
  return (
   <>
   <div className='footer'>
            <div className='footer-box-detail'>
                 <div className='footer-card'>
                    <span className='footer-p'> Powered by </span>
                     <img  className='footerimg' src={ImageLogo}/>
                    
                    <span className='footer-c'>Call for free demo</span>
                    <span className='footer-n'>+91-8751878878</span>
                 </div>
        

            
     
            <div className='footer-box-demo'>
                 <div className='footer-card-demo'>
                 <span> <button className="footer-button ftb1">Demo</button> <button className="footer-button ftb2">Download app</button>  </span>   
                 <img  className='footerimg-demo' src={Imagedemo}/>
                    
                 </div>
            </div>
       
            </div>

   </div>
   </>
  )
}

export default Footer