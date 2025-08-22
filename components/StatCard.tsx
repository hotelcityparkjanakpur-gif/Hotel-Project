
import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  changeType: 'increase' | 'decrease';
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon, changeType }) => {
  const changeColor = changeType === 'increase' ? 'text-green-500' : 'text-red-500';
  const bgColor = changeType === 'increase' ? 'bg-green-100' : 'bg-red-100';

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between hover:shadow-xl transition-shadow duration-300">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-3xl font-bold text-gray-800 mt-1">{value}</p>
        <p className={`text-xs mt-2 ${changeColor}`}>
          <span className={`font-semibold ${bgColor} px-2 py-1 rounded-full`}>{change}</span> vs last week
        </p>
      </div>
      <div className="text-primary opacity-20 text-5xl">
        {icon}
      </div>
    </div>
  );
};
