import React from 'react';
import { StatCard } from '../StatCard.tsx';
import { OccupancyChart } from '../OccupancyChart.tsx';
import { BookingTable } from '../BookingTable.tsx';
import { BOOKINGS, OCCUPANCY_DATA, REVENUE_DATA } from '../../constants.ts';
import { RevenueChart } from '../RevenueChart.tsx';
import { CheckInIcon, CheckOutIcon, RevenueIcon, OccupancyIcon } from '../icons/Icons.tsx';

export const DashboardView: React.FC = () => {
  const upcomingBookings = BOOKINGS.filter(b => b.status === 'Confirmed' || b.status === 'Pending').slice(0, 5);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
            title="Today's Check-ins" 
            value="14" 
            change="+5%" 
            icon={<CheckInIcon />}
            changeType="increase" 
        />
        <StatCard 
            title="Today's Check-outs" 
            value="8" 
            change="-2%" 
            icon={<CheckOutIcon />}
            changeType="decrease" 
        />
        <StatCard 
            title="Room Occupancy" 
            value="85%" 
            change="+1.2%" 
            icon={<OccupancyIcon />}
            changeType="increase"
        />
        <StatCard 
            title="Today's Revenue" 
            value="$12,450" 
            change="+8%" 
            icon={<RevenueIcon />}
            changeType="increase" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Weekly Occupancy Rate</h3>
          <OccupancyChart data={OCCUPANCY_DATA} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Monthly Revenue</h3>
          <RevenueChart data={REVENUE_DATA} />
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Upcoming Arrivals</h3>
        <BookingTable bookings={upcomingBookings} />
      </div>
    </div>
  );
};