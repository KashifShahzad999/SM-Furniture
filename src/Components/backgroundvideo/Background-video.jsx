// VideoBackground.js
import React, { useEffect } from 'react';
import '../../Components/main.css';

const VideoBackground = () => {
  useEffect(() => {
    const video = document.getElementById('backgroundVideo');
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
  }, []);

  return (
    <div className="video-container">
      <video id="backgroundVideo" className="video" autoPlay loop muted>
        <source src="/assets/bgvideo/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Other content goes here */}
    </div>
  );
};

export default VideoBackground;
