import React from 'react'
import experience from './data/experience.json'


export const Expericence = () => {
  return (
   <>
   <div className="container ex" id='experience'>
    <h1>EXPERIENCE</h1>
    {
      experience.map((data)=>{
        return(
         <>  
         <div key={data.id} className='ex-items text-center my-5'
         data-aos="zoom-in"
    data-aos-duration="1000"
         >
          <div className="left">
           <img src={`/assets/${data.imageSrc}`} alt="" />
          </div>
          <div className="right">
            <h2>{data.role}</h2>
            <h4>
              <span  style={{ color:"yellowgreen" }}>
                {data.starData} 
                 {" "} 
                {data.endDate} {" "}
                {data.location}</span>

            </h4>
            <h5 style={{ color:"yellowgreen" }}>{data.experiences[0]}</h5>
            <h5 style={{ color:"yellowgreen" }}>{data.experiences[1]}</h5>
          </div>
          </div>
        </>
        )
       
      })
    }

   </div>
   </>
  )
}
