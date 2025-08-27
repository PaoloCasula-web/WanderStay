import React, { useState } from 'react';
import { Plus, Edit, Eye, Users, Star, Calendar, MapPin, Wifi, Car, Coffee, Trash2 } from 'lucide-react';

const HostingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'active' | 'pending' | 'archived'>('active');

  const hostings = [
    {
      id: 1,
      title: 'Cozy Downtown Loft',
      location: 'San Francisco, CA',
      status: 'active',
      maxGuests: 3,
      rating: 4.9,
      reviews: 47,
      totalGuests: 156,
      amenities: ['wifi', 'kitchen', 'parking'],
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Beautiful loft in the heart of downtown SF with amazing city views.',
      nextGuest: {
        name: 'Sarah Johnson',
        dates: 'Dec 15-18, 2024',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
      }
    },
    {
      id: 2,
      title: 'Suburban Family Home',
      location: 'Palo Alto, CA',
      status: 'active',
      maxGuests: 5,
      rating: 4.7,
      reviews: 23,
      totalGuests: 78,
      amenities: ['wifi', 'kitchen', 'parking', 'laundry'],
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Spacious family home perfect for travelers with children.',
      nextGuest: null
    },
    {
      id: 3,
      title: 'Artist Studio Apartment',
      location: 'Berkeley, CA',
      status: 'pending',
      maxGuests: 2,
      rating: null,
      reviews: 0,
      totalGuests: 0,
      amenities: ['wifi', 'kitchen'],
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Creative space for artistic travelers in vibrant Berkeley.',
      nextGuest: null
    }
  ];

  const amenityIcons = {
    wifi: Wifi,
    kitchen: Coffee,
    parking: Car,
    laundry: Users
  };

  const filteredHostings = hostings.filter(hosting => {
    if (activeTab === 'active') return hosting.status === 'active';
    if (activeTab === 'pending') return hosting.status === 'pending';
    if (activeTab === 'archived') return hosting.status === 'archived';
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Hostings</h1>
          <p className="text-gray-600 mt-2">Manage your accommodation listings</p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Add New Hosting</span>
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-blue-100 rounded-full">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">234</p>
              <p className="text-sm text-gray-600">Total Guests</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-green-100 rounded-full">
              <Star className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">4.8</p>
              <p className="text-sm text-gray-600">Avg Rating</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-orange-100 rounded-full">
              <Calendar className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">89%</p>
              <p className="text-sm text-gray-600">Occupancy Rate</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-purple-100 rounded-full">
              <MapPin className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">3</p>
              <p className="text-sm text-gray-600">Active Listings</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-8">
            {[
              { id: 'active', label: 'Active', count: 2 },
              { id: 'pending', label: 'Pending', count: 1 },
              { id: 'archived', label: 'Archived', count: 0 }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'active' | 'pending' | 'archived')}
                className={`py-4 px-2 border-b-2 font-medium text-sm flex items-center space-x-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span>{tab.label}</span>
                {tab.count > 0 && (
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    activeTab === tab.id 
                      ? 'bg-blue-100 text-blue-600' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Hostings List */}
      <div className="space-y-6">
        {filteredHostings.map((hosting) => (
          <div key={hosting.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              {/* Image */}
              <div className="md:w-80 h-48 md:h-auto">
                <img 
                  src={hosting.image} 
                  alt={hosting.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{hosting.title}</h3>
                    <div className="flex items-center space-x-1 text-gray-600 mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>{hosting.location}</span>
                    </div>
                    <p className="text-gray-700 text-sm">{hosting.description}</p>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                      <Edit className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="text-center bg-gray-50 p-3 rounded-lg">
                    <p className="font-semibold text-lg text-gray-900">{hosting.maxGuests}</p>
                    <p className="text-xs text-gray-600">Max Guests</p>
                  </div>
                  
                  {hosting.rating && (
                    <div className="text-center bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-center justify-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="font-semibold text-lg text-gray-900">{hosting.rating}</span>
                      </div>
                      <p className="text-xs text-gray-600">{hosting.reviews} reviews</p>
                    </div>
                  )}
                  
                  <div className="text-center bg-gray-50 p-3 rounded-lg">
                    <p className="font-semibold text-lg text-gray-900">{hosting.totalGuests}</p>
                    <p className="text-xs text-gray-600">Total Guests</p>
                  </div>
                  
                  <div className="text-center bg-gray-50 p-3 rounded-lg">
                    <div className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      hosting.status === 'active' 
                        ? 'bg-green-100 text-green-800'
                        : hosting.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {hosting.status.charAt(0).toUpperCase() + hosting.status.slice(1)}
                    </div>
                    <p className="text-xs text-gray-600 mt-1">Status</p>
                  </div>
                </div>

                {/* Amenities */}
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-sm text-gray-600 font-medium">Amenities:</span>
                  <div className="flex space-x-2">
                    {hosting.amenities.map((amenity) => {
                      const Icon = amenityIcons[amenity as keyof typeof amenityIcons];
                      return Icon ? (
                        <div key={amenity} className="p-1 bg-gray-100 rounded">
                          <Icon className="w-4 h-4 text-gray-600" />
                        </div>
                      ) : null;
                    })}
                  </div>
                </div>

                {/* Next Guest */}
                {hosting.nextGuest && (
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="flex items-center space-x-3">
                      <img 
                        src={hosting.nextGuest.avatar} 
                        alt={hosting.nextGuest.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">Upcoming Guest</p>
                        <p className="text-sm text-gray-600">{hosting.nextGuest.name} • {hosting.nextGuest.dates}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {filteredHostings.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No {activeTab} hostings</h3>
            <p className="text-gray-600 mb-6">
              {activeTab === 'active' ? "You don't have any active hostings yet." : 
               activeTab === 'pending' ? "No hostings are pending approval." :
               "No archived hostings found."}
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
              Add Your First Hosting
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HostingsPage;