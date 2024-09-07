import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RevenueDistributionChart = React.memo(({ data, onClick }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          onClick={(data, index) => onClick(data.name)}
        >
          {/* Map data to Pie chart cells */}
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
});

export default RevenueDistributionChart;