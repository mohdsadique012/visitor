import React, { useEffect } from 'react'
import Aos from 'aos'
import "./TypeVisitor.css"
import { FaSchool } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import {FaShoppingBasket } from "react-icons/fa";
import Image1 from "./Images/school (1).png"
import Image2 from "./Images/store.png"
import Image3 from "./Images/hotel.png"
import Imagevc from "./Images/libraryy1.png"
import Imagefac from "./Images/vc-factory.png"
import Imagecom from "./Images/Company-Visitor-PNG-Clipart.png"
import Imagesal from "./Images/sal.png"
import Imagegov from "./Images/gov.png"

function TypeVisitor() {
   useEffect(()=>{
      Aos.init();
    },[])
  return (
    <>
    <div className='type-flex'>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
       <div className='type-title'> 
            <h1 data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" className='type-h'>Type Of Management</h1>
       </div>
       <div className='type-box type-pad'>
            <div data-aos="fade-left" data-aos-duration="1500" className='type-small'>
               <div data-aos="flip-right"
               data-aos-easing="ease-out-cubic"
               data-aos-duration="2000" className='type-title'><img src={Image1} className="type-image"/></div>
               <div className='type-title'><h3>SCHOOL MANAGEMENT</h3></div>
            </div> 
            <div data-aos="fade-left" data-aos-duration="1500" className='type-small'>
               <div data-aos="flip-right"
               data-aos-easing="ease-out-cubic"
               data-aos-duration="2000" className='type-title'><img src={Image3} className="type-image" /></div>
               <h3 className='type-title'>HOTEL MANAGEMENT</h3>
            </div> 
            <div  data-aos="fade-left" data-aos-duration="1500" className='type-small'>
            <div data-aos="flip-right"
             data-aos-easing="ease-out-cubic"
              data-aos-duration="2000" className='type-title'> <img src={Image2} className="type-image"/></div>
             <h3 className='type-title'>SHOP MANAGEMENT</h3>
     </div> 
     <div  data-aos="fade-left" data-aos-duration="1500" className='type-small'>
     <div data-aos="flip-right"
      data-aos-easing="ease-out-cubic"
       data-aos-duration="2000" className='type-title'> <img src={Imagevc} className="type-image"/></div>
      <h3 className='type-title'>LIBRARY</h3>
</div> 
            <div  data-aos="fade-left" data-aos-duration="1500" className='type-small'>
                <div data-aos="flip-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" className='type-title'> <img src={Imagegov} className="type-image"/></div>
                <h3 className='type-title'>GOVT DEPARTMENT</h3>
            </div> 
            <div  data-aos="fade-left" data-aos-duration="1500" className='type-small'>
            <div data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" className='type-title'> <img src={Imagesal} className="type-image"/></div>
            <h3 className='type-title'>SALONS
            </h3>
        </div> 
        <div  data-aos="fade-left" data-aos-duration="1500" className='type-small'>
              <div data-aos="flip-right"
               data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" className='type-title'> <img src={Image2} className="type-image"/></div>
               <h3 className='type-title'>CO-WORKING SPACE</h3>
       </div> 
       
       <div  data-aos="fade-left" data-aos-duration="1500" className='type-small'>
              <div data-aos="flip-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" className='type-title'> <img src={Imagecom} className="type-image"/></div>
                <h3 className='type-title'>COMPANIES</h3>
       </div> 
               <div  data-aos="fade-left" data-aos-duration="1500" className='type-small'>
                   <div data-aos="flip-right"
                    data-aos-easing="ease-out-cubic" 
                    data-aos-duration="2000" className='type-title'> <img src={Imagefac} className="type-image"/></div>
                    <h3 className='type-title'>FACTORY
                    </h3>
                  </div> 
 
            
       </div>
       
    
    </div>
    </>
  )
}

export default TypeVisitor