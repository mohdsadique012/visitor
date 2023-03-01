import React, { useEffect } from 'react'
import Aos from 'aos'
import "./DigitalSystem.css"
function Digitalsysytem() {
    useEffect(()=>{
        Aos.init({offset: 250});
      },[])
  return (
    <>
    <div className='digital-flex-column digital'>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        <div className='digital-main'>
            <h1 data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" className='digital-color'>How digital visitor management systems work</h1>
        </div>
        
        <div className='digital-flex-row'>
            <div data-aos="fade-right" data-aos-duration="1500"className='digital-flex-column digital-box'>
               
                <h2 className='digital-h'>A visitor signs in on a tabletor computer</h2>
                <h3 className='digital-para'>When a visitor arrives, they enter their name and details, snap a photo, and digitally sign documents.</h3>
            </div>

            <div data-aos="fade-up" data-aos-duration="1500" className='digital-flex-column digital-box'>
            
            <h2 className='digital-h'>The employee gets notified about their guest</h2>
            <h3 className='digital-para'>The visitor management system automatically alerts the correct employee that their guest has arrived.</h3>
        </div>
           <div data-aos="fade-left" data-aos-duration="1500" className='digital-flex-column digital-box'>
               
                <h2 className='digital-h'>The employee greets their visitor</h2>
                <h3 className='digital-para'>The employee knows who to greet in the lobby, making awkward meetings a thing of the past.</h3>
            </div>
         
        </div>
    </div>
    
    </>
  )
}

export default Digitalsysytem