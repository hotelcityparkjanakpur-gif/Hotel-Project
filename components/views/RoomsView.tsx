import React from 'react';
import { ROOMS } from '../../constants.ts';
import { RoomStatus } from '../../types.ts';

const getStatusColor = (status: RoomStatus): string => {
  switch (status) {
    case RoomStatus.Available:
      return 'bg-green-100 text-green-800 border-green-300';
    case RoomStatus.Occupied:
      return 'bg-blue-100 text-blue-800 border-blue-300';
    case RoomStatus.Cleaning:
      return 'bg-yellow-100 text-yellow-800 border-yellow-300';
    case RoomStatus.OutOfOrder:
        return 'bg-red-100 text-red-800 border-red-300';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-300';
  }
};

export const RoomsView: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Room Status Overview</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            {ROOMS.map(room => (
                <div key={room.id} className={`p-4 rounded-lg border-l-4 shadow-sm cursor-pointer hover:shadow-lg transition-shadow ${getStatusColor(room.status)}`}>
                    <div className="font-bold text-lg">{room.number}</div>
                    <div className="text-sm">{room.type}</div>
                    <div className="text-xs font-semibold mt-2 uppercase">{room.status}</div>
                </div>
            ))}
        </div>
    </div>
  );
};