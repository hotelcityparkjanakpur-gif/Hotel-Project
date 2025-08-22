import React from 'react';
import { GUESTS } from '../../constants.ts';

export const GuestsView: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
       <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold text-gray-800">Guest Directory</h3>
         <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors shadow">
                Add New Guest
            </button>
        </div>
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm text-gray-600">Guest</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm text-gray-600">Contact</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm text-gray-600">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    {GUESTS.map((guest, index) => (
                        <tr key={guest.id} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50`}>
                            <td className="text-left py-3 px-4">
                                <div className="flex items-center">
                                    <img className="w-10 h-10 rounded-full mr-4" src={guest.avatarUrl} alt={guest.name} />
                                    <div>
                                        <div className="font-semibold">{guest.name}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="text-left py-3 px-4">
                                <div>{guest.email}</div>
                                <div className="text-sm text-gray-500">{guest.phone}</div>
                            </td>
                            <td className="text-left py-3 px-4">
                                <button className="text-primary hover:text-blue-700 font-semibold">View Details</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  );
};