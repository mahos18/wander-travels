import React from 'react'
import Video from '../components/Video'
import CTA_button from '../components/CTA_button'
import { useEffect, useRef } from 'react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Cta = () => {
  gsap.registerPlugin(ScrollTrigger);
  const aboutRef = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(
        ".main .video-container", // initial state
        { 
          scale: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top top",    // when section hits top
            end: "+=100%",       // scroll distance for animation
            scrub: 0.1,         // smooth animation while scrolling
            pin: true      
          }
        }
      )
    }, aboutRef)

    return () => ctx.revert()
  }, [])
  return (
    <>
      <div id='about' ref={aboutRef}  className="main h-screen w-[100%] bg-[#EFE5D7] flex  items-center justify-center z-[1] text-white">
        <div className="video-container h-[95vh]   lg:h-[96vh]   w-[95vw]  rounded-3xl relative z-[2] bg-red-300">
          <Video source="./cta1.mp4"/>
          <div className="text-wrapper h-[100%] flex flex-col  items-center  justify-center">
            <h1 className=' font-bold text-[4em] md:text-[9em]'>Breath</h1>
            <CTA_button/>
          </div>
        </div>
      </div>
    </>
    

  )
}

export default Cta
