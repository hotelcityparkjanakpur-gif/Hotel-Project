import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar.tsx';
import { Header } from './components/Header.tsx';
import { DashboardView } from './components/views/DashboardView.tsx';
import { BookingsView } from './components/views/BookingsView.tsx';
import { GuestsView } from './components/views/GuestsView.tsx';
import { RoomsView } from './components/views/RoomsView.tsx';

export type ViewType = 'dashboard' | 'bookings' | 'guests' | 'rooms';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewType>('dashboard');

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <DashboardView />;
      case 'bookings':
        return <BookingsView />;
      case 'guests':
        return <GuestsView />;
      case 'rooms':
        return <RoomsView />;
      default:
        return <DashboardView />;
    }
  };
  
  const getHeaderTitle = () => {
    switch (activeView) {
      case 'dashboard':
        return 'Dashboard';
      case 'bookings':
        return 'Manage Bookings';
      case 'guests':
        return 'Guest Directory';
      case 'rooms':
        return 'Room Status';
      default:
        return 'Dashboard';
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 text-gray-800">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title={getHeaderTitle()} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4 md:p-8">
          {renderView()}
        </main>
      </div>
    </div>
  );
};

export default App;