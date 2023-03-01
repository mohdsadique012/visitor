import React, { useEffect } from 'react'
import Aos from 'aos'
import "./Feature.css"
import Images1 from "./Images/feature-image1.jpg"
import Images2 from "./Images/feature-image2jpg.jpg"
import Images3 from "./Images/feature-image3.jpg"

function Features() {
  useEffect(()=>{
    Aos.init();
  },[])

  return (
   <>
     <div className='feature-flex-column fbg'>
     <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
           <div className='feature-title'><h1 className='feature-title-h' data-aos="flip-left"
           data-aos-easing="ease-out-cubic"
            data-aos-duration="1500">FEATURE OF VISITOR MANAGEMENT </h1></div>
            <div className='feature-flex-row feature-box'>
                    <div data-aos="fade-down-right"  data-aos-duration="1500"  className='feature-p-box'>
                        <img data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                         data-aos-duration="1500" src={Images1} className="feature-img"/>
                    </div>
                    <div className='feature-p-box'>
                     <h2 data-aos="flip-left"
                     data-aos-easing="ease-out-cubic"
                      data-aos-duration="1500">Reason Title 1</h2>
                    <p  data-aos="fade-down-left"  data-aos-duration="1500" className='feature-p'>Visitor Management System is a tool that helps the organization to keep track of the visitors visiting them. Important data of visitors or clients can be helpful to the organization in the Future.Visitor Management Software helps the organization to create or modify its visitor policies. </p>
                    <p  data-aos="fade-up-left"  data-aos-duration="1500" className='feature-p'>  Ex. Some organizations only take the name and contact details of the visitor, on the other hand, some organizations ask for the photo id of the visitor for records.The visitor management system is helpful not in just corporate offices but also in buildings, warehouses, factories, valet parking, and more different industries.</p>
                    </div>
            </div>


            <div className='feature-flex-row feature-box'>
                   
                    <div  className='feature-p-box'>
                        <h2 data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                         data-aos-duration="1500">Reason Title 2</h2>
                        <p  data-aos="fade-down-right"  data-aos-duration="1500" className='feature-p'>Visitor Management System is a tool that helps the organization to keep track of the visitors visiting them. Important data of visitors or clients can be helpful to the organization in the Future.Visitor Management Software helps the organization to create or modify its visitor policies. </p>
                        <p data-aos="fade-up-right"  data-aos-duration="1500" className='feature-p'>  Ex. Some organizations only take the name and contact details of the visitor, on the other hand, some organizations ask for the photo id of the visitor for records.The visitor management system is helpful not in just corporate offices but also in buildings, warehouses, factories, valet parking, and more different industries.</p>
                    </div>
                    <div data-aos="fade-down-left"  data-aos-duration="1500"  className='feature-p-box'>
                    <img data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                     data-aos-duration="1500" src={Images2} className="feature-img" />
                </div>
            </div>


            <div className='feature-flex-row feature-box'>
                    <div data-aos="fade-down-right"  data-aos-duration="1500"  className='feature-p-box'>
                        <img data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                         data-aos-duration="1500" src={Images3} className="feature-img"/>
                    </div>
                   
                    <div  className='feature-p-box'>
                    <h2 data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                     data-aos-duration="1500">Reason Title 3</h2>
                    <p   data-aos="fade-down-left"  data-aos-duration="1500" className='feature-p'>Visitor Management System is a tool that helps the organization to keep track of the visitors visiting them. Important data of visitors or clients can be helpful to the organization in the Future.Visitor Management Software helps the organization to create or modify its visitor policies. </p>
                    <p   data-aos="fade-up-left"  data-aos-duration="1500" className='feature-p'>  Ex. Some organizations only take the name and contact details of the visitor, on the other hand, some organizations ask for the photo id of the visitor for records.The visitor management system is helpful not in just corporate offices but also in buildings, warehouses, factories, valet parking, and more different industries.</p>
                    </div>
            </div>
     </div>

   
   </>
  )
}

export default Features