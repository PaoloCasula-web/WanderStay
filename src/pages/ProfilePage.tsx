import React, { useState } from 'react';
import { MapPin, Star, Calendar, MessageSquare, Edit, Camera, Award, Globe, Languages } from 'lucide-react';

interface User {
  name: string;
  avatar: string;
  location: string;
  isHost: boolean;
  joinDate: string;
  reviews: number;
  rating: number;
}

interface ProfilePageProps {
  user: User;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ user }) => {
  const [activeTab, setActiveTab] = useState<'about' | 'reviews' | 'photos'>('about');

  const hostingStats = {
    totalGuests: 127,
    responseRate: '98%',
    responseTime: '< 1 hour',
    acceptanceRate: '89%'
  };

  const reviews = [
    {
      id: 1,
      author: 'Sarah Johnson',
      authorAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      rating: 5,
      date: '2 weeks ago',
      text: 'Alex was an amazing host! The place was exactly as described and he gave great local recommendations. Would definitely stay again!'
    },
    {
      id: 2,
      author: 'Marco Rodriguez',
      authorAvatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      rating: 5,
      date: '1 month ago',
      text: 'Great experience! Alex is very welcoming and knowledgeable about the city. His place is comfortable and clean.'
    },
    {
      id: 3,
      author: 'Emma Wilson',
      authorAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      rating: 4,
      date: '2 months ago',
      text: 'Had a wonderful time staying with Alex. He made me feel right at home and showed me some hidden gems in the city.'
    }
  ];

  const photos = [
    'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  ];

  const languages = ['English (Fluent)', 'Spanish (Conversational)', 'Mandarin (Native)'];
  const interests = ['Photography', 'Hiking', 'Cooking', 'Art', 'Music', 'Technology'];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Profile Header */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
          {/* Avatar */}
          <div className="relative">
            <img 
              src={user.avatar} 
              alt={user.name}
              className="w-32 h-32 rounded-full object-cover shadow-lg"
            />
            <button className="absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow-lg transition-colors">
              <Camera className="w-4 h-4" />
            </button>
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{user.name}</h1>
                <div className="flex items-center justify-center lg:justify-start space-x-4 text-gray-600">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{user.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Joined {user.joinDate}</span>
                  </div>
                </div>
              </div>
              <button className="mt-4 lg:mt-0 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors flex items-center space-x-2">
                <Edit className="w-4 h-4" />
                <span>Edit Profile</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-center space-x-1 text-yellow-500 mb-1">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="font-bold text-lg text-gray-900">{user.rating}</span>
                </div>
                <p className="text-sm text-gray-600">Rating</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="font-bold text-lg text-gray-900">{user.reviews}</p>
                <p className="text-sm text-gray-600">Reviews</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="font-bold text-lg text-gray-900">{hostingStats.totalGuests}</p>
                <p className="text-sm text-gray-600">Guests Hosted</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="font-bold text-lg text-gray-900">{hostingStats.responseRate}</p>
                <p className="text-sm text-gray-600">Response Rate</p>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full flex items-center space-x-1">
                <Award className="w-3 h-3" />
                <span>Superhost</span>
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full flex items-center space-x-1">
                <Globe className="w-3 h-3" />
                <span>Local Expert</span>
              </span>
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
                Verified Host
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col space-y-3">
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center space-x-2">
              <MessageSquare className="w-4 h-4" />
              <span>Message</span>
            </button>
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors">
              View Hosting
            </button>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Tab Navigation */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-8">
            {[
              { id: 'about', label: 'About', icon: Globe },
              { id: 'reviews', label: 'Reviews', icon: Star },
              { id: 'photos', label: 'Photos', icon: Camera }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'about' | 'reviews' | 'photos')}
                  className={`py-4 px-2 border-b-2 font-medium text-sm flex items-center space-x-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-8">
          {activeTab === 'about' && (
            <div className="space-y-8">
              {/* Bio */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">About Me</h3>
                <p className="text-gray-700 leading-relaxed">
                  Hey there! I'm Alex, a software engineer and travel enthusiast based in San Francisco. 
                  I love meeting people from different cultures and sharing stories about our adventures. 
                  When I'm not coding, you can find me exploring new hiking trails, trying out local restaurants, 
                  or capturing the city's beauty through photography.
                  <br /><br />
                  As a host, I believe in creating authentic experiences for my guests. I'll be happy to share 
                  my favorite local spots, recommend hidden gems, and help you discover the real San Francisco 
                  beyond the tourist attractions. My place is your home away from home!
                </p>
              </div>

              {/* Languages */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                  <Languages className="w-5 h-5" />
                  <span>Languages</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((language, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {language}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <span key={index} className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hosting Stats */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Hosting Statistics</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-gray-900">{hostingStats.totalGuests}</p>
                    <p className="text-sm text-gray-600">Total Guests</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-gray-900">{hostingStats.responseRate}</p>
                    <p className="text-sm text-gray-600">Response Rate</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-gray-900">{hostingStats.responseTime}</p>
                    <p className="text-sm text-gray-600">Response Time</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-gray-900">{hostingStats.acceptanceRate}</p>
                    <p className="text-sm text-gray-600">Acceptance Rate</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-900">Reviews ({reviews.length})</h3>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold text-lg">{user.rating}</span>
                  <span className="text-gray-600">({user.reviews} reviews)</span>
                </div>
              </div>
              
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <div className="flex items-start space-x-4">
                      <img 
                        src={review.authorAvatar} 
                        alt={review.author}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold text-gray-900">{review.author}</h4>
                          <div className="flex items-center space-x-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <p className="text-gray-700">{review.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'photos' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Photos ({photos.length})</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {photos.map((photo, index) => (
                  <div key={index} className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <img 
                      src={photo} 
                      alt={`Photo ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;