// src/components/VideoUpload.js

import React, { useState } from 'react';
import axios from 'axios';

const VideoUpload = () => {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('video[file]', file);

    try {
      const response = await axios.post('http://localhost:3000/videos', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>File:</label>
        <input type="file" onChange={handleFileChange} />
      </div>
      <button type="submit">Upload Video</button>
    </form>
  );
};

export default VideoUpload;


// import React, { useState } from 'react';
// import axios from 'axios';

// const VideoUpload = () => {
//   const [file, setFile] = useState(null);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('video[file]', file);

//     try {
//       const response = await axios.post('http://localhost:3000/videos', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log('Video uploaded successfully:', response.data);
//     } catch (error) {
//       console.error('Error uploading video:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="file" onChange={handleFileChange} />
//       <button type="submit">Upload Video</button>
//     </form>
//   );
// };

// export default VideoUpload;