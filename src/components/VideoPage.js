// VideoPage.js
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './VideoPage.css';
import video1 from '../components/video1.mp4';

const VideoPage = () => {
  const [currentVideo, setCurrentVideo] = useState(video1);
  const [showThumbnails, setShowThumbnails] = useState(false);
  // IT WILL WORK ONLY FOR DOWNLOADED VIDEOS OF MP4 , WEB LINK WILL NOT WORK 
  const thumbnails = [
    'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD0SG0P-maEL18USKddIL616I4IWbHEETyw6T5ywl1bA&s',
    'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1650663213637-f2929acb090f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1650663213637-f2929acb090f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    // Add more thumbnail URLs as needed
  ];
  const videos = [
    'https://www.istockphoto.com/video/a-scrambled-jumbled-computer-program-code-listing-full-of-glitches-errors-and-gm1700440467-538647093?utm_source=pixabay&utm_medium=affiliate&utm_campaign=ADP_video_sponsored_P1&utm_content=https%3A%2F%2Fpixabay.com%2Fvideos%2Fsource-code-development-code-4733%2F&utm_term=source+code+development',
    'https://www.vecteezy.com/video/1785195-hacker-code-running-down',
    'https://www.youtube.com/watch?v=fFHyqhmnVfs',
    // All ARE Direct WEB Links 
  ];


  const handleVideoChange = (videoUrl) => {
    setCurrentVideo(videoUrl);
  };

  const thumbnailCircles = thumbnails.slice(0, 15); // Display only the first 15 thumbnails

  return (
    <div className="video-page">
      <ReactPlayer
        controls
        height="500"
        width="800"
        url={currentVideo}
        playing
        onMouseEnter={() => setShowThumbnails(true)}
        onMouseLeave={() => setShowThumbnails(false)}
      />

      {showThumbnails && (
        <div className="thumbnail-circles">
          {thumbnailCircles.map((thumbnail, index) => (
            <div
              key={index}
              className="thumbnail-circle"
              onClick={() => handleVideoChange(`https://www.example.com/video${index + 1}.mp4`)}
            >
              <img src={thumbnail} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoPage;
