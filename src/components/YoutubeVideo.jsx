import React from 'react';
import YouTube from 'react-youtube';

const YoutubeEmbed = () => {
  const videoId = 'u31qwQUeGuM'; // Extract the video ID from the YouTube URL

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="video-container" aria-label="Embedded YouTube Video">
          <YouTube videoId={videoId} opts={opts} aria-label="Embedded YouTube Video" />
        </div>
  );
};

export default YoutubeEmbed;
