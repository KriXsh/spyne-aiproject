import React, { useState } from 'react';
import '../VideoForm.css';

const VideoForm = ({ onSubmit }) => {
  const [videoUrl, setVideoUrl] = useState('');
  const [captions, setCaptions] = useState('');
  const [timestamps, setTimestamps] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ videoUrl, captions, timestamps });
  };

  return (
    <form onSubmit={handleSubmit} className="video-form">
      <label htmlFor="videoUrl" className="form-label">Video URL:</label>
      <input type="text" id="videoUrl" value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} className="form-input" />

      <label htmlFor="captions" className="form-label">Captions:</label>
      <textarea id="captions" value={captions} onChange={(e) => setCaptions(e.target.value)} className="form-textarea" />

      <label htmlFor="timestamps" className="form-label">Timestamps:</label>
      <textarea id="timestamps" value={timestamps} onChange={(e) => setTimestamps(e.target.value)} className="form-textarea" />

      <button type="submit" className="form-button">Add Captions</button>
    </form>
  );
};

export default VideoForm;
