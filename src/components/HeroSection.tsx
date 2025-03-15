import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-green-400 text-white min-h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 opacity-10"></div>
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Clean Home, <br />
              <span className="text-blue-100">Healthy Living</span>
            </h1>
            <p className="text-xl mb-8 text-blue-50">
              Eco-friendly cleaning products that are tough on dirt but gentle on your family and the planet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/products" 
                  className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg inline-flex items-center"
                >
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/about" 
                  className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Cleaning Products" 
                className="rounded-lg shadow-2xl"
              />
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="flex items-center">
                  <div className="bg-green-500 rounded-full p-2 mr-3">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-800 font-semibold">100% Eco-Friendly</p>
                    <p className="text-gray-600 text-sm">Safe for your family</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;