import React from 'react'
import CTA_button from '../components/CTA_button'
import Video from '../components/Video'
import { FlipLink } from '../components/FlipLinks'
import { Link } from "react-scroll"

const Home = () => {
  return (
    <>
        <div id='home' className="main  h-[100vh] lg:h-[100vh] w-[100%] bg-[#EFE5D7] text-white flex items-center justify-center z-[1]">
          <div className="container  h-[96%]   lg:h-[96%]   w-[98%]  rounded-3xl relative z-[2]" >
            <Video source="/bg2.mp4"/>
            <div className="navbar h-[10vh] w-[96vw] flex items-center lg:flex  justify-around lg:gap-100 z-[10] mt-5">
                <div className="nav-left  flex text-lg  lg:gap-6 justify-center items-center my-2 ">
                  <div className="logo font-bold text-xl"><FlipLink href="#" >Wander</FlipLink></div>
                  |
                  <Link to="ranch" smooth={true} duration={500}  className='nav-links  cursor-pointer  hidden lg:flex'><FlipLink >Ranch Life</FlipLink></Link>
                  <Link to="about" smooth={true} duration={500}  className='nav-links cursor-pointer  hidden lg:flex'><FlipLink >about us</FlipLink></Link>
                  <Link to="features" smooth={true} duration={500}  className='nav-links cursor-pointer  hidden lg:flex'><FlipLink >Houses</FlipLink></Link>
                  <Link to="cta2" smooth={true} duration={500} className='nav-links cursor-pointer  hidden lg:flex '><FlipLink >Direction</FlipLink></Link>
                  
                  
                </div>
                <CTA_button/>

            </div>
            <div className="hero h-[60vh] w-[50%]  lg:h-[80vh] w-full flex flex-col justify-center items-center p-1 z-[10]">
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
