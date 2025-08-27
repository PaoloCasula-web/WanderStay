import React from 'react';
import { Search, MapPin, Users, Star, TrendingUp, Globe2 } from 'lucide-react';

type Page = 'home' | 'profile' | 'hostings' | 'messages' | 'experiences' | 'search';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const featuredHosts = [
    {
      id: 1,
      name: 'Maria Santos',
      location: 'Barcelona, Spain',
      rating: 4.9,
      reviews: 156,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      hostImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      speciality: 'Local foodie tours'
    },
    {
      id: 2,
      name: 'Kenji Nakamura',
      location: 'Tokyo, Japan',
      rating: 4.8,
      reviews: 203,
      image: 'https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-temple-161401.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      hostImage: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      speciality: 'Cultural experiences'
    },
    {
      id: 3,
      name: 'Emma Thompson',
      location: 'London, UK',
      rating: 4.9,
      reviews: 89,
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      hostImage: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      speciality: 'Art & history walks'
    }
  ];

  const recentExperiences = [
    {
      id: 1,
      title: 'Sunrise hike in the Swiss Alps',
      author: 'Alex Chen',
      location: 'Interlaken, Switzerland',
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      likes: 142
    },
    {
      id: 2,
      title: 'Cooking pasta with Nonna in Rome',
      author: 'Sarah Kim',
      location: 'Rome, Italy',
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      likes: 98
    },
    {
      id: 3,
      title: 'Northern lights camping adventure',
      author: 'Mike Johnson',
      location: 'Tromsø, Norway',
      image: 'https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      likes: 207
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Travel Like a Local
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
              Connect with amazing hosts worldwide, share authentic experiences, and create unforgettable memories
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onNavigate('search')}
                className="bg-white text-blue-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                <Search className="inline-block w-5 h-5 mr-2" />
                Find Your Next Adventure
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105">
                Become a Host
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">2.1M+</h3>
              <p className="text-gray-600">Travelers Hosted</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">190+</h3>
              <p className="text-gray-600">Countries Available</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">4.8/5</h3>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe2 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">127K</h3>
              <p className="text-gray-600">Active Hosts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Hosts Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Amazing Hosts
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover unique places to stay and experiences with these top-rated hosts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredHosts.map((host) => (
              <div key={host.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className="relative h-48">
                  <img 
                    src={host.image} 
                    alt={host.location}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-semibold text-sm">{host.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <img 
                      src={host.hostImage} 
                      alt={host.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">{host.name}</h3>
                      <p className="text-gray-600 text-sm">{host.location}</p>
                    </div>
                  </div>
                  <p className="text-blue-600 font-medium text-sm mb-2">{host.speciality}</p>
                  <p className="text-gray-600 text-sm">{host.reviews} reviews</p>
                  <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Experiences Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Recent Adventures
              </h2>
              <p className="text-xl text-gray-600">
                See what fellow travelers have been up to
              </p>
            </div>
            <button 
              onClick={() => onNavigate('experiences')}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center space-x-2"
            >
              <TrendingUp className="w-5 h-5" />
              <span>View All</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentExperiences.map((experience) => (
              <div key={experience.id} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all transform hover:-translate-y-1">
                <div className="relative h-48">
                  <img 
                    src={experience.image} 
                    alt={experience.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{experience.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">by {experience.author}</p>
                  <p className="text-gray-500 text-sm mb-4">{experience.location}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-red-500">
                      <span>❤️</span>
                      <span className="text-sm font-medium">{experience.likes}</span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-400 to-red-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Join our community of travelers and hosts. Create memories that last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate('search')}
              className="bg-white text-orange-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Start Traveling
            </button>
            <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-orange-600 transition-all transform hover:scale-105">
              Become a Host
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;