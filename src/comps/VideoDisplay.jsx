import React, { useState } from 'react';
import axios from 'axios';
import VideoPlayer from './VideoPlayer';

const VideoDisplay = () => {
  const [videoId, setVideoId] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  const handleInputChange = (e) => {
    setVideoId(e.target.value);
  };

  const handleFetchVideo = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/videos/${videoId}`, {
        responseType: 'blob'
      });
      console.log('response ===>', response.data);

      if (response.data instanceof Blob) {
        const hlsUrl = URL.createObjectURL(response.data);
        console.log('hls url ===>', hlsUrl);
        setVideoUrl(hlsUrl);
      } else {
        console.error('Response is not a Blob:', response.data);
      }
    } catch (error) {
      console.error('Error fetching video:', error);
    }
  };

  return (
    <div>
      <input type="text" value={videoId} onChange={handleInputChange} placeholder="Enter video ID" />
      <button onClick={handleFetchVideo}>Fetch Video</button>
      {videoUrl && <VideoPlayer src={videoUrl} />}
    </div>
  );
};

export default VideoDisplay;