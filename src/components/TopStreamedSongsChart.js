import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const TopStreamedSongsChart = React.memo(({ data }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <BarChart width={400} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="song" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="streams" fill="#8884d8" barSize={20} />
      </BarChart>
    </div>
  );
});

export default TopStreamedSongsChart;