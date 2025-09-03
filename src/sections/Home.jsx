import React from 'react'
import CTA_button from '../components/CTA_button'
import Video from '../components/Video'
import { FlipLink } from '../components/FlipLinks'
import { Link } from "react-scroll"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { useRef } from 'react'


const Home = () => {
  const navref=useRef();
  const navButtonref=useRef();
  const heroref=useRef();
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  
  useGSAP(()=>{
    const tl1=gsap.timeline()
    tl1.from(".container",{
      opacity:0,
      duration:1,
      delay:1
    })
    tl1.from(navref.current.children,{
      y:-50,
      opacity:0,
      duration:1,
      stagger:0.2
    },"2")
    tl1.from(navButtonref.current,{
      y:-50,
      opacity:0,
      duration:0.5,
    },"2")
    tl1.from(heroref.current.children,{
      scale:0.8,
      opacity:0,
      duration:0.6,
      stagger:0.2,
      pin:true
    })

  })


  return (
    <>  

        <div id='home' className="main  h-[100vh] lg:h-[100vh] w-[100%] bg-[#EFE5D7] text-white flex items-center justify-center z-[1]">
          <div className="container  h-[96%]   lg:h-[96%]   w-[98%]  rounded-3xl relative z-[2]" >
            <Video source="/bg2.mp4"/>
            <div className="navbar h-[10vh] w-[96vw] flex items-center lg:flex  justify-around lg:gap-100 z-[10] mt-5">
                <div ref={navref}className="nav-left  flex text-lg  lg:gap-6 justify-center items-center my-2 ">
                  <div  className="logo font-bold text-xl"><FlipLink href="#" >Wander</FlipLink></div>
                  <div  className="seperator hidden lg:flex">|</div>
                  <Link to="ranch" smooth={true} duration={500}   className='nav-links  cursor-pointer  hidden lg:flex'><FlipLink >Ranch Life</FlipLink></Link>
                  <Link to="about" smooth={true} duration={500}   className='nav-links cursor-pointer  hidden lg:flex'><FlipLink >about us</FlipLink></Link>
                  <Link to="features" smooth={true} duration={500}   className='nav-links cursor-pointer  hidden lg:flex'><FlipLink >Houses</FlipLink></Link>
                  <Link to="cta2" smooth={true} duration={500}  className='nav-links cursor-pointer  hidden lg:flex '><FlipLink >Direction</FlipLink></Link>
                </div>
                <CTA_button ref={navButtonref} />

            </div>
            <div ref={heroref}className="hero h-[60vh] w-[50%]  lg:h-[80vh] w-full flex flex-col justify-center items-center p-1 z-[10]">
              <i className=" star ri-gemini-fill    lg:text-[1.5em] "></i>
              <div className="title   text-[4em] lg:text-[5em] lg:text-[13em] font-bold ">Wander </div>
              <div className="sub-title text-[1em] text-center">Discover journeys that awaken your spirit.From hidden trails to modern escapes — travel reimagined.</div>
            </div>
          </div>


          
        </div>
    </>
  )
}

export default Home
