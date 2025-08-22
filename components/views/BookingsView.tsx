import React from 'react';
import { BookingTable } from '../BookingTable.tsx';
import { BOOKINGS } from '../../constants.ts';

export const BookingsView: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold text-gray-800">All Bookings</h3>
            <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors shadow">
                Add New Booking
            </button>
        </div>
      <BookingTable bookings={BOOKINGS} />
    </div>
  );
};