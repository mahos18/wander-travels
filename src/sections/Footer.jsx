import React from 'react'
import CTA_button from '../components/CTA_button'

const Footer = () => {
  return (
    <div className="main  lg:h-[100vh] h-[70vh] w-[100%] bg-[#EFE5D7] text-white flex items-end lg: justify-evenly z-[1] ">
    <div className="footer-container h-[100%] w-[95%] p-auto  text-black">
      <div className="footer-part1 min-h-[60%] lg:h-[60%] w-[100%]  flex lg:flex-row flex-col lg:gap-10 py-auto">
        <div className="grid1  h-[40%] w-[100%]   lg:h-[100%] lg:w-[60%] flex flex-col justify-evenly gap-5 ">
            <h1 className='font1 text-[1.3em] lg:text-[2em]'>We welcome kindred spirits. Whether you're looking for silence, space, or simply a change in pace — Wander is open.</h1>
            <div className="button w-[50%] lg:w-[20%]">
              <CTA_button/>  
            </div>
            <div className="copywritetags font1 text-[0.9em]"> Copyright <i class="ri-copyright-line"></i> <br /> Developed by <a href='#' className='font1-500 '>Soham Lohote</a></div>
        </div>

        <div className="grid2  mt-10 lg:mt-0 min-h-[40%] w-[100%]  lg:h-[100%] lg:w-[40%]  flex flex-col py-auto ">
          <div className="address  h-[50%] flex flex-col justify-evenly">
            <h1 className='text-[0.9em]'>Address</h1>
            <p  className=' text-[1.2em] lg:text-[1.5em] font1-500'>Ranch — 1847 Dusty Creek RoadFredericksburg, TX 78624United States</p>
          </div>
          <div className="contact mt-10 lg:mt-0 h-[50%] flex flex-col justify-evenly">
            <h1 className='text-[0.9em]'>Phone</h1>
            <p className=' text-[1.2em] lg:text-[1.5em] font1'>+91 7777017777</p>
          </div>
        </div>

      </div>
      <div className="footer-part2 lg:mt-0 mt-10 h-[10%] w-[100%] flex lg:px-20 ">
        <p className='text-[4em] lg:text-[11em]'>
          WANDER <i className=" star ri-gemini-fill  text-[0.4em] lg:text-[0.5em] "></i>
        </p>
      </div>
    </div>
    </div>
  )
}

export default Footer
