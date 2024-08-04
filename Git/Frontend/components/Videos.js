// Video.js
import React from 'react';

const Video = ({ videoId, title }) => (
  <div className="video-container">
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${videoId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title}
    ></iframe>
  </div>
);

export default Video;
