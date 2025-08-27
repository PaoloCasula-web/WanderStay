import React from 'react';
import { Home, User, Building2, MessageSquare, Camera, Search, X, MapPin } from 'lucide-react';

type Page = 'home' | 'profile' | 'hostings' | 'messages' | 'experiences' | 'search';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, currentPage, onNavigate }) => {
  const menuItems = [
    { id: 'home', label: 'Discover', icon: Home },
    { id: 'search', label: 'Find Hosts', icon: Search },
    { id: 'hostings', label: 'My Hostings', icon: Building2 },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'experiences', label: 'Experiences', icon: Camera },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  const handleItemClick = (pageId: Page) => {
    onNavigate(pageId);
    onClose();
  };

  return (
    <>
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:static lg:inset-0`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">WanderStay</h1>
          </div>
          <button 
            onClick={onClose}
            className="lg:hidden p-1 rounded-md hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6">
          <ul className="space-y-2 px-4">
            {menuItems.map((item) => {
              const isActive = currentPage === item.id;
              const Icon = item.icon;
              
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleItemClick(item.id as Page)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                      isActive 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105' 
                        : 'text-gray-700 hover:bg-gray-100 hover:scale-102'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom Section */}
        <div className="p-6 border-t border-gray-200">
          <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-4">
            <h3 className="font-semibold text-orange-800 mb-2">Become a Host</h3>
            <p className="text-sm text-orange-700 mb-3">Share your space and connect with travelers worldwide</p>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md transition-colors">
              Start Hosting
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;