import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    console.log('src ===>', src);
    // Validate the URL before initializing the player
    try {
      new URL(src);
    } catch (urlError) {
      console.error('Invalid URL passed to video.js:', src, urlError);
      return;
    }
    if (videoRef.current) {
      playerRef.current = videojs(videoRef.current, {
        controls: true,
        autoplay: false,
        preload: 'auto',
        sources: [{
          src: src,
          type: 'application/x-mpegURL'
        }]
      });
      playerRef.current.ready(() => {
        console.log('Player is ready');
        playerRef.current.src({
          src: src,
          type: 'application/x-mpegURL'
        });
      });
      return () => {
        if (playerRef.current) {
          playerRef.current.dispose();
        }
      };
    }
  }, [src]);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-default-skin" />
    </div>
  );
};

export default VideoPlayer;