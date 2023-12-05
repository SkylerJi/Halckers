import React from 'react';

const BackgroundVideo: React.FC = () => {
  return (
    <div className = "fixed w-full h-screen">
         <video autoPlay muted loop id="backgroundVideo" className="w-full h-full object-cover">
      
      <source src="/assets/images/Airstrike_T02.mp4" type="video/mp4" />

  
   
    Your browser does not support the video tag.
  </video>

    </div>
   
  );
};

export default BackgroundVideo;
