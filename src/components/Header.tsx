import React, { useState } from 'react';
import { Menu, Bell, Search, Globe } from 'lucide-react';

type Page = 'home' | 'profile' | 'hostings' | 'messages' | 'experiences' | 'search';

interface User {
  name: string;
  avatar: string;
  location: string;
  isHost: boolean;
  joinDate: string;
  reviews: number;
  rating: number;
}

interface HeaderProps {
  user: User;
  onMenuClick: () => void;
  onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ user, onMenuClick, onNavigate }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const notifications = [
    { id: 1, text: 'Sarah wants to stay at your place next week', time: '2 hours ago', unread: true },
    { id: 2, text: 'You have a new review from Mark', time: '1 day ago', unread: true },
    { id: 3, text: 'Your hosting request was accepted', time: '3 days ago', unread: false },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Search bar - hidden on mobile */}
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-80">
              <Search className="h-5 w-5 text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Search destinations, hosts, experiences..."
                className="bg-transparent flex-1 outline-none text-sm text-gray-700 placeholder-gray-500"
                onFocus={() => onNavigate('search')}
              />
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Language selector */}
            <button className="hidden sm:flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors">
              <Globe className="h-5 w-5" />
              <span className="text-sm font-medium">EN</span>
            </button>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 text-gray-400 hover:text-gray-500 transition-colors relative"
              >
                <Bell className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  2
                </span>
              </button>

              {/* Notifications dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <h3 className="font-semibold text-gray-900">Notifications</h3>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div key={notification.id} className={`px-4 py-3 hover:bg-gray-50 cursor-pointer ${notification.unread ? 'bg-blue-50' : ''}`}>
                        <p className="text-sm text-gray-800">{notification.text}</p>
                        <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 py-2 border-t border-gray-100">
                    <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                      View all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Profile */}
            <div className="relative">
              <button
                onClick={() => setShowProfile(!showProfile)}
                className="flex items-center space-x-3 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div className="hidden sm:block text-left">
                  <p className="text-sm font-medium text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.location}</p>
                </div>
              </button>

              {/* Profile dropdown */}
              {showProfile && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <img src={user.avatar} alt={user.name} className="h-12 w-12 rounded-full object-cover" />
                      <div>
                        <p className="font-semibold text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-600">{user.location}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            {user.isHost ? 'Host' : 'Traveler'}
                          </span>
                          <span className="text-xs text-gray-500">★ {user.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="py-2">
                    <button
                      onClick={() => {
                        onNavigate('profile');
                        setShowProfile(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      View Profile
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                      Account Settings
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                      Help Center
                    </button>
                    <div className="border-t border-gray-100 mt-2 pt-2">
                      <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition-colors">
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;