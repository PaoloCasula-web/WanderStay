import React, { useState } from 'react';
import { Search, MapPin, Filter, Star, Wifi, Car, Coffee, Users } from 'lucide-react';

const SearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    maxDistance: 50,
    minRating: 4.0,
    hostType: 'all',
    amenities: [] as string[]
  });

  const mockResults = [
    {
      id: 1,
      hostName: 'Maria Santos',
      hostImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      location: 'Barcelona, Spain',
      distance: '2.3 km from center',
      rating: 4.9,
      reviews: 156,
      description: 'Cozy apartment in the heart of Gothic Quarter. Perfect for exploring the city!',
      amenities: ['wifi', 'kitchen', 'parking'],
      maxGuests: 2,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      id: 2,
      hostName: 'Kenji Nakamura',
      hostImage: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      location: 'Tokyo, Japan',
      distance: '5.1 km from center',
      rating: 4.8,
      reviews: 203,
      description: 'Traditional Japanese home with modern amenities. Experience authentic culture!',
      amenities: ['wifi', 'laundry'],
      maxGuests: 3,
      image: 'https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-temple-161401.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      id: 3,
      hostName: 'Emma Thompson',
      hostImage: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      location: 'London, UK',
      distance: '1.8 km from center',
      rating: 4.9,
      reviews: 89,
      description: 'Victorian house near Hyde Park. Art galleries and museums nearby.',
      amenities: ['wifi', 'kitchen', 'parking', 'laundry'],
      maxGuests: 4,
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    }
  ];

  const amenityIcons = {
    wifi: Wifi,
    kitchen: Coffee,
    parking: Car,
    laundry: Users
  };

  const toggleAmenity = (amenity: string) => {
    setFilters(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Search Header */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Find Your Perfect Host</h1>
        
        {/* Search Bar */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Where do you want to go?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Search
          </button>
        </div>

        {/* Filters */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <h3 className="font-semibold text-gray-900">Filters</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Distance */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max Distance: {filters.maxDistance}km
              </label>
              <input
                type="range"
                min="1"
                max="100"
                value={filters.maxDistance}
                onChange={(e) => setFilters(prev => ({ ...prev, maxDistance: Number(e.target.value) }))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* Rating */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Min Rating: {filters.minRating}
              </label>
              <input
                type="range"
                min="1"
                max="5"
                step="0.1"
                value={filters.minRating}
                onChange={(e) => setFilters(prev => ({ ...prev, minRating: Number(e.target.value) }))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* Host Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Host Type</label>
              <select
                value={filters.hostType}
                onChange={(e) => setFilters(prev => ({ ...prev, hostType: e.target.value }))}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Hosts</option>
                <option value="superhost">Superhosts</option>
                <option value="new">New Hosts</option>
                <option value="local">Local Experts</option>
              </select>
            </div>

            {/* Amenities */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Amenities</label>
              <div className="flex flex-wrap gap-2">
                {Object.keys(amenityIcons).map((amenity) => (
                  <button
                    key={amenity}
                    onClick={() => toggleAmenity(amenity)}
                    className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                      filters.amenities.includes(amenity)
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {amenity}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Results */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">
            {mockResults.length} hosts found
          </h2>
          <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="relevance">Sort by Relevance</option>
            <option value="rating">Sort by Rating</option>
            <option value="distance">Sort by Distance</option>
            <option value="reviews">Sort by Reviews</option>
          </select>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {mockResults.map((result) => (
            <div key={result.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
              {/* Image */}
              <div className="relative h-48">
                <img 
                  src={result.image} 
                  alt={result.location}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-white rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-semibold text-sm">{result.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Host Info */}
                <div className="flex items-center space-x-3 mb-4">
                  <img 
                    src={result.hostImage} 
                    alt={result.hostName}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{result.hostName}</h3>
                    <div className="flex items-center space-x-1 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{result.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-sm mb-4">{result.description}</p>

                {/* Details */}
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span>{result.distance}</span>
                  <span>{result.reviews} reviews</span>
                  <span>Up to {result.maxGuests} guests</span>
                </div>

                {/* Amenities */}
                <div className="flex items-center space-x-2 mb-4">
                  {result.amenities.map((amenity) => {
                    const Icon = amenityIcons[amenity as keyof typeof amenityIcons];
                    return Icon ? (
                      <div key={amenity} className="p-1 bg-gray-100 rounded">
                        <Icon className="w-4 h-4 text-gray-600" />
                      </div>
                    ) : null;
                  })}
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                    Send Request
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg transition-colors">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center py-8">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-8 rounded-lg transition-colors">
            Load More Results
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;