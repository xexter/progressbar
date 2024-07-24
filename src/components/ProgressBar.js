// src/components/ProgressBar.js
import React, { useState, useEffect } from 'react';
import './ProgressBar.css'; // Optional: for styling

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (progress < 100) {
      const timer = setInterval(() => {
        setProgress((prev) => Math.min(prev + 10, 100));
      }, 1000); // Increment progress every second

      return () => clearInterval(timer); // Cleanup on unmount
    } else {
      setLoading(false); // Set loading to false when complete
    }
  }, [progress]);

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }} />
      <div className="progress-text">
        {loading ? 'Loading...' : 'Complete'}
      </div>
    </div>
  );
};

export default ProgressBar;