import React from 'react';

const BackgroundVideo: React.FC = () => {
  return (
    
    <video autoPlay muted loop id="backgroundVideo" className="fixed z-[-1] w-full h-screen object-cover">

        <source src="/assets/images/Airstrike_T02.mp4" type="video/mp4" />

   
     
      Your browser does not support the video tag.
    </video>
  );
};

export default BackgroundVideo;
