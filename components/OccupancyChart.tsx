
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface OccupancyChartProps {
  data: { name: string; Occupancy: number }[];
}

export const OccupancyChart: React.FC<OccupancyChartProps> = ({ data }) => {
  return (
    <div style={{ width: '100%', height: 350 }}>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 5, right: 30, left: 0, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="name" stroke="#6b7280" />
          <YAxis unit="%" stroke="#6b7280" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #e0e0e0', 
              borderRadius: '0.5rem' 
            }}
          />
          <Legend />
          <Line type="monotone" dataKey="Occupancy" stroke="#1e40af" strokeWidth={3} activeDot={{ r: 8 }} dot={{r: 5}} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
