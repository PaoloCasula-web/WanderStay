import React from 'react';
import { MapPin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">WanderStay</h3>
            </div>
            <p className="text-sm text-gray-400">
              Connecting travelers with local hosts worldwide. Share experiences, create memories, explore authentic cultures.
            </p>
            <div className="flex items-center space-x-1 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for travelers</span>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Safety</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trust & Verification</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Support links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community Guidelines</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Report Issue</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bug Bounty</a></li>
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GDPR Compliance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessibility</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright and version */}
            <div className="text-sm text-gray-400">
              <p>© {currentYear} WanderStay, Inc. All rights reserved.</p>
              <p className="mt-1">Version 2.1.4 | Last updated: December 2024</p>
            </div>

            {/* Social links and app info */}
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-400">All systems operational</span>
              </div>
              <div className="text-gray-400">
                <span className="text-blue-400 font-medium">127,543</span> active hosts
              </div>
              <div className="text-gray-400">
                <span className="text-green-400 font-medium">2.1M+</span> travelers hosted
              </div>
            </div>
          </div>

          {/* Additional info */}
          <div className="mt-4 pt-4 border-t border-gray-800 text-xs text-gray-500 flex flex-wrap justify-center md:justify-start space-x-4">
            <span>🌍 Available in 190+ countries</span>
            <span>🔒 SSL secured</span>
            <span>⭐ 4.8/5 average rating</span>
            <span>🏆 Best Travel App 2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;