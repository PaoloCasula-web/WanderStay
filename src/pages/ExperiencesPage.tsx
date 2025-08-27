import React, { useState } from 'react';
import { Plus, Heart, MessageCircle, Share2, MapPin, Calendar, Camera, Filter } from 'lucide-react';

interface Experience {
  id: number;
  title: string;
  author: string;
  authorAvatar: string;
  location: string;
  date: string;
  image: string;
  description: string;
  likes: number;
  comments: number;
  tags: string[];
  liked: boolean;
}

const ExperiencesPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'following' | 'trending'>('all');
  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: 1,
      title: 'Sunrise hike in the Swiss Alps',
      author: 'Alex Chen',
      authorAvatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      location: 'Interlaken, Switzerland',
      date: '2 days ago',
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Woke up at 4 AM to catch the sunrise from the top of Harder Kulm. The view was absolutely breathtaking! The golden light hitting the snow-capped peaks was something I\'ll never forget. My host Hans recommended this spot and even lent me his hiking boots. This is what travel is all about - creating memories that last a lifetime.',
      likes: 142,
      comments: 23,
      tags: ['hiking', 'sunrise', 'mountains', 'photography'],
      liked: false
    },
    {
      id: 2,
      title: 'Cooking pasta with Nonna in Rome',
      author: 'Sarah Kim',
      authorAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      location: 'Rome, Italy',
      date: '1 week ago',
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'My host\'s grandmother taught me how to make authentic Roman carbonara from scratch. No cream, no garlic - just eggs, pecorino, guanciale, and love! She didn\'t speak English and I don\'t speak Italian, but food is a universal language. We laughed, we cooked, we ate until we couldn\'t move. Pure magic! 🍝',
      likes: 98,
      comments: 15,
      tags: ['cooking', 'culture', 'food', 'italy'],
      liked: true
    },
    {
      id: 3,
      title: 'Northern lights camping adventure',
      author: 'Mike Johnson',
      authorAvatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      location: 'Tromsø, Norway',
      date: '3 weeks ago',
      image: 'https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Spent three nights camping under the Arctic sky waiting for the aurora. On the second night, nature put on the most incredible light show I\'ve ever seen. Green curtains of light dancing across the star-filled sky. My host Erik, a local Sami guide, shared stories of his ancestors while we warmed up by the fire.',
      likes: 207,
      comments: 31,
      tags: ['aurora', 'camping', 'arctic', 'adventure'],
      liked: false
    },
    {
      id: 4,
      title: 'Tea ceremony in a Kyoto garden',
      author: 'Emma Wilson',
      authorAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      location: 'Kyoto, Japan',
      date: '1 month ago',
      image: 'https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-temple-161401.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'My host Yuki invited me to participate in a traditional tea ceremony in her family\'s private garden. Every movement had meaning, every gesture told a story. The ceremony lasted two hours, but it felt like minutes. I learned that it\'s not about the tea - it\'s about mindfulness, respect, and connection.',
      likes: 76,
      comments: 12,
      tags: ['culture', 'tea', 'meditation', 'japan'],
      liked: true
    },
    {
      id: 5,
      title: 'Surfing lessons at sunrise in Bali',
      author: 'Carlos Rodriguez',
      authorAvatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      location: 'Canggu, Bali',
      date: '2 months ago',
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Never thought I\'d be able to surf, but my host Made was an incredible teacher. Started at 5:30 AM to catch the perfect waves and avoid the crowds. By the end of the week, I was riding waves like I\'d been doing it for years! The Balinese hospitality is unmatched - they treat you like family from day one.',
      likes: 134,
      comments: 18,
      tags: ['surfing', 'ocean', 'lessons', 'bali'],
      liked: false
    }
  ]);

  const toggleLike = (experienceId: number) => {
    setExperiences(experiences.map(exp => 
      exp.id === experienceId 
        ? { 
            ...exp, 
            liked: !exp.liked, 
            likes: exp.liked ? exp.likes - 1 : exp.likes + 1 
          }
        : exp
    ));
  };

  const filteredExperiences = experiences.filter(exp => {
    if (filter === 'following') return exp.author === 'Alex Chen'; // Mock following
    if (filter === 'trending') return exp.likes > 100;
    return true;
  });

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Travel Experiences</h1>
          <p className="text-gray-600 mt-2">Share and discover amazing travel stories</p>
        </div>
        <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105 flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Share Experience</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-1">
            <Filter className="w-5 h-5 text-gray-600" />
            <span className="font-medium text-gray-900">Filter by:</span>
          </div>
          
          <div className="flex space-x-2">
            {[
              { id: 'all', label: 'All Posts', count: experiences.length },
              { id: 'following', label: 'Following', count: 1 },
              { id: 'trending', label: 'Trending', count: 3 }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as 'all' | 'following' | 'trending')}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                  filter === tab.id
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Experiences Feed */}
      <div className="space-y-8">
        {filteredExperiences.map((experience) => (
          <article key={experience.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            {/* Author Header */}
            <div className="p-6 pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img 
                    src={experience.authorAvatar} 
                    alt={experience.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{experience.author}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{experience.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <button className="text-gray-400 hover:text-gray-600 p-2">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Experience Image */}
            <div className="relative">
              <img 
                src={experience.image} 
                alt={experience.title}
                className="w-full h-64 sm:h-80 object-cover"
              />
              <div className="absolute top-4 left-4">
                <div className="bg-black bg-opacity-50 text-white px-3 py-1 rounded-full flex items-center space-x-1">
                  <Camera className="w-4 h-4" />
                  <span className="text-sm font-medium">Experience</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">{experience.title}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{experience.description}</p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {experience.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-6">
                  <button 
                    onClick={() => toggleLike(experience.id)}
                    className={`flex items-center space-x-2 transition-colors ${
                      experience.liked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${experience.liked ? 'fill-current' : ''}`} />
                    <span className="font-medium">{experience.likes}</span>
                  </button>
                  
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-medium">{experience.comments}</span>
                  </button>
                </div>

                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors text-sm">
                  Read More
                </button>
              </div>
            </div>
          </article>
        ))}

        {filteredExperiences.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Camera className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No experiences found</h3>
            <p className="text-gray-600 mb-6">
              {filter === 'following' ? "You're not following anyone yet." : 
               filter === 'trending' ? "No trending experiences right now." :
               "No experiences shared yet."}
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-2 px-6 rounded-lg transition-all">
              Share Your First Experience
            </button>
          </div>
        )}

        {/* Load More */}
        {filteredExperiences.length > 0 && (
          <div className="text-center py-8">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-8 rounded-lg transition-colors">
              Load More Experiences
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperiencesPage;