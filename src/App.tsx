import { useState } from "react";
import "./App.css";
import VideoUpload from "./comps/VideoUpload";
import VideoPlayer from "./comps/VideoPlayer";
import VideoDisplay from "./comps/VideoDisplay";

function App() {
  const [, setVideoSrc] = useState("");

  const handleVideoUpload = (src: any) => {
    setVideoSrc(src);
  };

  return (
    <>
      <div>
        <h1>Video Upload and Playback</h1>
        <VideoUpload onUpload={handleVideoUpload} />
        <VideoDisplay />
        {/* {videoSrc && <VideoPlayer src={videoSrc} />} */}
      </div>
      {/* <div>
        <h1>Video Upload and Display</h1>
        <VideoUpload />
        <VideoDisplay />
      </div>
      {videoSrc && (
        <video src={videoSrc} controls controlsList="nodownload"></video>
      )} */}
    </>
  );
}

export default App;
