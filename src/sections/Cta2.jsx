import React from 'react'
import Video from '../components/Video'


const Cta2 = () => {
  return (
    <div id='cta2' className="main  h-[100vh] min-h-[100vh] w-[100%] bg-[#EFE5D7] text-white flex items-center justify-center z-[1]">
      <div className="container  h-[96vh]   h-[96vh]   w-[98%]  rounded-3xl relative z-[2]" >

        <Video source="/bg3.mp4"/>
        <div className="hero  w-[50%]  h-[100%] w-full flex flex-col justify-center items-center  z-[10]">
          <i className=" star ri-gemini-fill    lg:text-[1.9em] "></i>
          <div className="title  text-center text-[2em] lg:text-[3em]  font-bold ">TRAVEL REIMAGINED  </div>
          <div className="sub-title text-[1em] text-center">Moments that stay, journeys that inspire. </div>
          
        </div>
      </div>
    </div>
  )
}

export default Cta2
