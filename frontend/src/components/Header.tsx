import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <motion.header 
      className="bg-gradient-to-r from-blue-100/80 via-purple-50/80 to-cyan-100/80 backdrop-blur-sm border-b-2 border-blue-200 sticky top-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="relative">
                <BookOpen className="h-8 w-8 text-blue-600" />
                <Sparkles className="h-4 w-4 text-pink-500 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Lectomate
                </h1>
                <p className="text-sm bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-medium">AI-Powered Lecture Generator</p>
              </div>
            </motion.div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              <>
                <Link to="/features" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Features
                </Link>
                <Link to="/how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">
                  How It Works
                </Link>
                <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                  About
                </Link>
                <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Contact
                </Link>
              </>
            ) : (
              <>
                <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Home
                </Link>
                <Link to="/features" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Features
                </Link>
                <Link to="/how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">
                  How It Works
                </Link>
                <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                  About
                </Link>
                <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Contact
                </Link>
                <Link to="/upload" className="btn-primary text-sm px-4 py-2">
                  Get Started
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
