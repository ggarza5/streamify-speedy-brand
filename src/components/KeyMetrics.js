import React from 'react';

const KeyMetrics = React.memo(({ metrics }) => {
  return (
    <div className="key-metrics grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {/* Display each metric in a styled card */}
      <div className="card bg-white shadow-md rounded-lg p-4">Total Users: {metrics.totalUsers}</div>
      <div className="card bg-white shadow-md rounded-lg p-4">Active Users: {metrics.activeUsers}</div>
      <div className="card bg-white shadow-md rounded-lg p-4">Total Streams: {metrics.totalStreams}</div>
      <div className="card bg-white shadow-md rounded-lg p-4">Revenue: ${metrics.revenue}</div>
      <div className="card bg-white shadow-md rounded-lg p-4">Top Artist: {metrics.topArtist}</div>
    </div>
  );
});

export default KeyMetrics;