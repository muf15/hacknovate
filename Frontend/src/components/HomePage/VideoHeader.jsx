import React from 'react';


const VideoHeader = () => {
  return (
    <div className="font-sans">
      {/* Header */}
   
      {/* Hero Section */}
      <div className="relative w-screen h-[85vh] sm:h-[90vh] lg:h-screen overflow-hidden" 
         style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', width: '100vw' }}>
      <video 
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src="../src/assets/Video1.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent"></div>

      <div className="relative flex flex-col items-center justify-center h-full text-center px-4 sm:px-8 text-white">
        <div className="text-sm text-gray-300 mb-4">
          <span className="hover:text-gray-100 cursor-pointer">Home</span>
          <span className="mx-2">/</span>
          <span>Contact</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
        Swasthya Sync : Where Technology Heals,  <br/> AI Empowers, and Health Records Simplify!
        </h1>

        <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl">
        स्वास्थ्यं विज्ञानसंयुक्तं भविष्यस्य पथः!" <br/> "Health united with technology, the path to the future!"
        </p>


        <div className="mt-6">
          <button className="bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out">
            Start Your Health Journey
          </button>
        </div>
      </div>
    </div>

      {/* Appointment Section */}
     
      {/* Welcome Section */}
     
    </div>
  );
};

export default VideoHeader;