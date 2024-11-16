import React, { useState, useEffect } from 'react';
import VideoPlayer from './Components/Video'; 
import Dashboard from './Components/Dashboard'; 

function App() {
  const [isVideoCompleted, setIsVideoCompleted] = useState(false);

  useEffect(() => {
    
    const videoTimeout = setTimeout(() => {
      setIsVideoCompleted(true); 
    }, 12000); 

    
    return () => clearTimeout(videoTimeout);
  }, []);

  return (
    <div className="mt-[2%]">
      {!isVideoCompleted ? (
        <VideoPlayer /> 
      ) : (
        <Dashboard /> 
      )}
    </div>
  );
}

export default App;
