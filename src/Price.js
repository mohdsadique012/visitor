import React from 'react'
import "./Price.css"
function Price() {
  return (
    <>
    <div className="plan_section">
            <div className="plans" data-aos="fade-left" data-aos-duration="1500" data-aos-easing="ease-in-sine">
                <img src="image/3207949_40855-removebg-preview.png" alt="" className="plan_img" />
                <h2>Yearly Price Plan</h2>
            
                <div className="price">
                    <span className="first_tag "></span><br />
                    <br /><span className="secoend_tag ">Rs.  1200/-*</span>
                    <span className="third_tag-m ">per user/per year</span>
                </div>
                
            </div>
            <div className="plans" data-aos="fade-right" data-aos-duration="1500" data-aos-easing="ease-in-sine" >
                <img src="image/3207949_40855-removebg-preview.png" alt="" className="plan_img" />
                <h2>Lifetime Price Plan</h2>
            
                <div className="price">
                    <span className="first_tag "></span>
                    <span className="secoend_tag ">Rs.  35000/-*</span> <span className="third_tag ">lifetime validity</span>
                
                   
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Price