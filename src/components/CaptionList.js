import React from 'react';
import '../CaptionList.css';

const CaptionList = ({ captions }) => {
  return (
    <div className="caption-list-container">
      <ul className="caption-list">
        {captions.map((caption, index) => (
          <li key={index} className="caption-item">{caption}</li>
        ))}
      </ul>
    </div>
  );
};

export default CaptionList;