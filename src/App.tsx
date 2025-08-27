import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import HostingsPage from './pages/HostingsPage';
import MessagesPage from './pages/MessagesPage';
import ExperiencesPage from './pages/ExperiencesPage';
import SearchPage from './pages/SearchPage';

type Page = 'home' | 'profile' | 'hostings' | 'messages' | 'experiences' | 'search';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState({
    name: 'Alex Chen',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    location: 'San Francisco, CA',
    isHost: true,
    joinDate: '2022',
    reviews: 47,
    rating: 4.9
  });

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'profile':
        return <ProfilePage user={user} />;
      case 'hostings':
        return <HostingsPage />;
      case 'messages':
        return <MessagesPage />;
      case 'experiences':
        return <ExperiencesPage />;
      case 'search':
        return <SearchPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)}
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />
      
      <div className="flex-1 flex flex-col">
        <Header 
          user={user}
          onMenuClick={() => setIsSidebarOpen(true)}
          onNavigate={setCurrentPage}
        />
        
        <main className="flex-1 overflow-auto">
          {renderPage()}
        </main>
        
        <Footer />
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default App;