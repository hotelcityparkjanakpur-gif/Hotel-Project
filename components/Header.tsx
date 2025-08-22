import React from 'react';
import { SearchIcon, BellIcon } from './icons/Icons.tsx';

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="flex items-center justify-between h-20 px-8 bg-white border-b border-gray-200 shadow-sm">
      <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
      <div className="flex items-center space-x-6">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <button className="relative text-gray-500 hover:text-primary transition-colors">
          <BellIcon />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-white text-xs items-center justify-center">3</span>
          </span>
        </button>
        <div className="flex items-center space-x-3">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://picsum.photos/id/237/100/100"
            alt="User avatar"
          />
          <div>
            <div className="font-semibold text-gray-900">Admin User</div>
            <div className="text-xs text-gray-500">Hotel Manager</div>
          </div>
        </div>
      </div>
    </header>
  );
};