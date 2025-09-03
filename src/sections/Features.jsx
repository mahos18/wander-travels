import React from 'react'

const Features = () => {
  return (
    <div id='features' className="featurecard min-h-screen w-[100%] bg-[#EFE5D7] flex flex-col gap-5 justify-center items-center pt-5 py-10">
      <div className="page-head  h-[12vh] lg:h-[25vh] w-[80vw] lg:w-[50vw]  text-center flex flex-col justify-between ">
        <h2 className='font1'>the Things That Still Matter</h2>
        <h1 className='font2 lg:text-[2em] font-weight-200'>Wander invites you to slow down — to move with purpose, to remember what life feels like when it breathes with meaning.</h1>
      </div>


      <div className="featurecard min-h-[50vh] lg:h-[90vh] w-[95vw] lg:w-[80vw]  m-5 p-5 grid grid-cols-1 lg:grid-cols-2  rounded-xl ">
        <div className="featureimg  h-[25vh] w-full lg:h-[100%] lg:w-[1/2] overflow-hidden rounded-2xl">
          <img src="/images/mountain.jpg" alt="cover" className="h-full w-full object-cover" />
        </div>
        <div className="featurecontent   lg:h-[100%] lg:w-[100%] flex  flex-row items-center justify-center ">
            <div className="text-wrapper  m-15 flex flex-col items-center justify-end">
              <h1 className='text-[2.5em] main '>THE LAND </h1>
              <img src="/images/divider.png" className='scale-[0.7]' alt="________" />
              <p className='text-[1.1em] text-center '>From mountains that breathe silence to coasts that sing with waves — the land carries stories older than time.</p>
            </div> 
        </div>
      </div>

      <div className="featurecard min-h-[50vh] lg:h-[90vh] w-[95vw] lg:w-[80vw]  m-5 p-5 grid grid-cols-1 lg:grid-cols-2  rounded-xl">
        <div className="featureimg lg:hidden flex h-[25vh] w-full lg:h-[100%] lg:w-[1/2] overflow-hidden rounded-2xl">
          <img src="/images/spirit.jpg" alt="cover" className="h-full w-full object-cover" />
        </div>
        <div className="featurecontent   lg:h-[100%] lg:w-[100%] flex  flex-row items-center justify-center px-2">
            <div className="text-wrapper  m-15 flex flex-col items-center justify-end">
              <h1 className='text-[2.5em] main '>THE SPIRIT </h1>
              <img src="/images/divider.png" className='scale-[0.7]' alt="________" />
              <p className='text-[1.1em] text-center '>Every journey is more than miles traveled. It’s the spirit of discovery — finding yourself while finding the world.</p>
            </div> 
        </div>
        <div className="featureimg lg:flex hidden h-[25vh] w-full lg:h-[100%] lg:w-[1/2] overflow-hidden rounded-2xl">
          <img src="/images/spirit.jpg" alt="cover" className="h-full w-full object-cover" />
        </div>
      </div>

      <div className="featurecard min-h-[50vh] lg:h-[90vh] w-[95vw] lg:w-[80vw]  m-5 p-5 grid grid-cols-1 lg:grid-cols-2  rounded-xl ">
        <div className="featureimg  h-[25vh] w-full lg:h-[100%] lg:w-[1/2] overflow-hidden rounded-2xl">
          <img src="/images/vision.jpg" alt="cover" className="h-full w-full object-cover" />
        </div>
        <div className="featurecontent   lg:h-[100%] lg:w-[100%] flex flex-row items-center justify-center  ">
            <div className="text-wrapper  m-15 flex flex-col items-center justify-center">
              <h1 className='text-[2.2em] main '>THE VISION </h1>
              <img src="/images/divider.png" className='scale-[0.7]' alt="________" />
              <p className='text-[1.1em] text-center '>A future of travel that is mindful, modern, and meaningful. Where journeys connect people, places, and purpose.</p>
            </div> 
        </div>
      </div>
    </div>
  )
}

export default Features
