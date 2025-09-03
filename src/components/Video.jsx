import React from 'react';

const Video = ({source}) => {
  return (
    <div className="h-full w-full absolute -z-[1]">
      <video 
        className="h-full w-full object-cover rounded-3xl" 
        autoPlay 
        loop 
        muted 
        playsInline
        
      >
        <source src={source}  type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
