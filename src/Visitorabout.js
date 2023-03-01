import React, { useEffect } from 'react'
import Aos from 'aos'
import "./Visitor.css"
import Typewriter from "typewriter-effect"
import Images from "./Images/vector.png"

function Visitorabout() {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
 <>

 <div className='vistor'>
 <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        <div data-aos-duration="2000" data-aos="fade-down-right" className='visitor-img'>
             <img data-aos="flip-left"
             data-aos-easing="ease-out-cubic"
              data-aos-duration="1500" src={Images} />
        </div>
        <div className='visitor-abvout'>
             
            <h1 className='visitor-title'>
            <Typewriter 
            options={{
              strings : ["VISITOR MANAGEMENT SYSTEM" ,"VISITOR MANAGEMENT SYSTEM"],
              autoStart: true,
              loop:true,
            }}
            />
            </h1>
            <p  data-aos="fade-down-left"  data-aos-duration="1500"><h2 className='visitor-about-colour'>Visitor management is any process that helps an organization keep track of the people that visit their location. Policies can vary by organization, facility type, industry,<span className='visitor-para'>or geographic location.</span> </h2></p>
            <p data-aos="fade-up-left"  data-aos-duration="1500"><h2 className='visitor-about-colour'>For some organizations, simply collecting the visitor’s name is sufficient, but others have higher security requirements—like badges, legal documents,<span className='visitor-para'>employee escorts, and more.</span> 

            </h2></p>
        </div>

</div>
 </>
  )
}

export default Visitorabout