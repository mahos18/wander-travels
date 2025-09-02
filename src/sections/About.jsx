import React from 'react'
import { FlipLink } from '../components/FlipLinks'

const About = () => {
  return (
    <div id='ranch' className="main h-[100vh] w-[100%] bg-[#EFE5D7] flex flex-col  items-center justify-center ">
      <div className="content1 text-center lg:px-20 h-[40vh] flex flex-col justify-center gap-5">
        <div className="heading  ">WHAT LIVES HERE</div>
        <div className="text-wrapper text-[1.5em] lg:text-[2em] font-bold lg:px-25">Travel is more than a destination — it’s a feeling of freedom.Open skies. Endless roads waiting to be explored. </div>
      </div>
      <div className="content2 text-xl text-center h-[50vh] w-[30vw] relative flex items-start justify-center ">
        <div className="imagediv1 absolute  h-[40%] w-[170%] lg:h-[90%] lg:w-full bg-red-500 rounded-xl rotate-[-8deg] overflow-hidden">
          <img src="/images/2 (3).jpg" alt="cover" className="h-full w-full object-cover" />
        </div>
        <div className="imagediv3 absolute  h-[40%] w-[170%] lg:h-[90%] lg:w-full bg-red-300 rounded-xl rotate-[-3deg] overflow-hidden">
          <img src="/images/2 (2).jpg" alt="cover" className="h-full w-full object-cover" />
        </div>
        <div className="imagediv2 absolute  h-[40%] w-[170%] lg:h-[90%] lg:w-full bg-red-400 rounded-xl rotate-[3deg] overflow-hidden">
          <img src="/images/2 (1).jpg" alt="cover" className="h-full w-full object-cover" />
        </div>
      </div>

    </div>
  )
}

export default About
