import React from 'react';
import type { Booking } from '../types.ts';
import { BookingStatus } from '../types.ts';

interface BookingTableProps {
  bookings: Booking[];
}

const getStatusBadgeClass = (status: BookingStatus) => {
  switch (status) {
    case BookingStatus.Confirmed:
      return 'bg-blue-100 text-blue-800';
    case BookingStatus.Pending:
      return 'bg-yellow-100 text-yellow-800';
    case BookingStatus.Cancelled:
      return 'bg-red-100 text-red-800';
    case BookingStatus.CheckedIn:
      return 'bg-green-100 text-green-800';
    case BookingStatus.CheckedOut:
      return 'bg-gray-200 text-gray-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const BookingTable: React.FC<BookingTableProps> = ({ bookings }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100 border-b border-gray-200">
          <tr>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm text-gray-600">Guest</th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm text-gray-600">Dates</th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm text-gray-600">Room</th>
            <th className="text-center py-3 px-4 uppercase font-semibold text-sm text-gray-600">Status</th>
            <th className="text-right py-3 px-4 uppercase font-semibold text-sm text-gray-600">Amount</th>
            <th className="text-center py-3 px-4 uppercase font-semibold text-sm text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {bookings.map((booking, index) => (
            <tr key={booking.id} className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition-colors`}>
              <td className="text-left py-4 px-4">
                <div className="flex items-center">
                  <img className="w-10 h-10 rounded-full mr-4 object-cover" src={booking.guest.avatarUrl} alt={booking.guest.name} />
                  <div>
                    <div className="font-semibold">{booking.guest.name}</div>
                    <div className="text-xs text-gray-500">{booking.guest.email}</div>
                  </div>
                </div>
              </td>
              <td className="text-left py-4 px-4">
                <div>Check-in: {booking.checkIn}</div>
                <div>Check-out: {booking.checkOut}</div>
              </td>
              <td className="text-left py-4 px-4">
                <div className="font-semibold">Room {booking.roomNumber}</div>
                <div className="text-sm text-gray-500">{booking.roomType}</div>
              </td>
              <td className="text-center py-4 px-4">
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusBadgeClass(booking.status)}`}>
                  {booking.status}
                </span>
              </td>
              <td className="text-right py-4 px-4 font-semibold">${booking.totalAmount.toFixed(2)}</td>
              <td className="text-center py-4 px-4">
                 <button className="text-primary hover:text-blue-700 font-semibold text-sm">Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};