import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const UserGrowthChart = React.memo(({ data }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <LineChart width={400} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        {/* Line for total users */}
        <Line type="monotone" dataKey="totalUsers" stroke="#8884d8" />
        {/* Line for active users */}
        <Line type="monotone" dataKey="activeUsers" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
});

export default UserGrowthChart;