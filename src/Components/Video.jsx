import React from 'react';

const VideoPlayer = () => {
  return (
    <video-lean
   data-video-src="Volk-into.mp4"
   data-video-poster="">
    <video
        src="Volk-into.mp4"
        poster=""
        aria-hidden="true"
        playsInline
   
        muted
        autoPlay
        loop
        style={{ width: '98%', height: '95vh', objectFit: 'cover' }}></video>
</video-lean>
  );
};

export default VideoPlayer;
