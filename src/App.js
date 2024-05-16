import React, { useState } from 'react';
import VideoForm from './components/VideoForm';
import VideoPlayer from './components/VideoPlayer';
import CaptionList from './components/CaptionList';

function App() {
  const [videoUrl, setVideoUrl] = useState('');
  const [captions, setCaptions] = useState([]);
  const [timestamps, setTimestamps] = useState([]);

  const handleSubmit = ({ videoUrl, captions, timestamps }) => {
    setVideoUrl(videoUrl);
    setCaptions(captions.split('\n'));
    setTimestamps(timestamps.split('\n').map(parseFloat));
  };

  return (
    <div>
      <h1>Video Caption App</h1>
      <VideoForm onSubmit={handleSubmit} />
      {videoUrl && <VideoPlayer videoUrl={videoUrl} />}
      {captions.length > 0 && <CaptionList captions={captions} />}
    </div>
  );
}

export default App;
