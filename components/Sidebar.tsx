import React from 'react';
import type { ViewType } from '../App.tsx';
import { DashboardIcon, BookingsIcon, GuestsIcon, RoomsIcon, SettingsIcon, LogoutIcon } from './icons/Icons.tsx';

interface SidebarProps {
  activeView: ViewType;
  setActiveView: (view: ViewType) => void;
}

const NavItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => (
  <li
    onClick={onClick}
    className={`
      flex items-center p-3 my-1 rounded-lg cursor-pointer transition-colors duration-200
      ${isActive
        ? 'bg-blue-600 text-white shadow-md'
        : 'text-gray-300 hover:bg-blue-800 hover:text-white'
      }
    `}
  >
    {icon}
    <span className="ml-4 font-medium">{label}</span>
  </li>
);


export const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView }) => {
  const navItems: { id: ViewType; label: string; icon: React.ReactNode }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
    { id: 'bookings', label: 'Bookings', icon: <BookingsIcon /> },
    { id: 'guests', label: 'Guests', icon: <GuestsIcon /> },
    { id: 'rooms', label: 'Rooms', icon: <RoomsIcon /> },
  ];

  return (
    <aside className="w-64 bg-primary text-white flex flex-col shadow-lg">
      <div className="flex items-center justify-center h-20 border-b border-blue-700">
        <h1 className="text-2xl font-bold tracking-wider">ZENITH</h1>
      </div>
      <nav className="flex-1 px-4 py-4">
        <ul>
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              isActive={activeView === item.id}
              onClick={() => setActiveView(item.id)}
            />
          ))}
        </ul>
      </nav>
      <div className="px-4 py-4 border-t border-blue-700">
        <ul>
          <NavItem
            icon={<SettingsIcon />}
            label="Settings"
            isActive={false}
            onClick={() => { /* Handle settings navigation */ }}
          />
          <NavItem
            icon={<LogoutIcon />}
            label="Logout"
            isActive={false}
            onClick={() => { /* Handle logout */ }}
          />
        </ul>
      </div>
    </aside>
  );
};