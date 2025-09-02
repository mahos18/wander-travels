import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FlipLink } from './FlipLinks';



export default function CTA_button() {
    const starRef=useRef();
    
    const handleHover=()=>{
        gsap.to(starRef.current,{
        rotate:360,
        duration:0.5
    });
    }   
    const handleLeave = ()=>{
        gsap.to(starRef.current,{
        rotate:0,
        duration:0.5
        })
    }
    
  return (
    <div>
      <div className="cta-button bg-[#171411] cursor-pointer text-white  flex items-center rounded-xl text-sm my-2 p-3 px-6  gap-3 justify-between"
      onMouseEnter={handleHover} 
      onMouseLeave={handleLeave}
      href="#"
      >
      {/* <SplitText 
      text="Book a visit"    
      /> */}
      book A Visit
      <i ref={starRef}    className=" ri-road-map-line"></i>
      </div>
    </div>
  )
}
