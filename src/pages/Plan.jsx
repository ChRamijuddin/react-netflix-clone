import React from 'react'
import './Plan.css'
const Plan = ({data}) => {
  return (
    <div className='planScreen'>
        <h4 style={{marginTop:"20px",paddingLeft:"20px"}}>Renewal date: 05/05/2023</h4>
         {
            data.map((item)=>{
                return(
                    <div className="planScreen_plan">
                        <div className="planScreen_info">
                            <h5>{item.name}</h5>
                            <h4>{item.description}</h4>
                        </div>  
                        {
                            item?.active=="true" ? (
                                 <button style={{backgroundColor:"gray"}}>Subscribe</button>
                            ) : (<button>Subscribe</button>)
                        }
                    </div>
                )
            })
         }
    </div>
  )
}

export default Plan
