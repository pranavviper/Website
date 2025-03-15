import React from 'react';
import { Link } from 'react-router-dom';
import { Droplets, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Droplets className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold">RITS</span>
            </div>
            <p className="text-blue-100 mb-4">
              Eco-friendly cleaning solutions for a healthier home and planet.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-200 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-blue-100 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-blue-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-100 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=all-purpose" className="text-blue-100 hover:text-white transition-colors">
                  All-Purpose Cleaners
                </Link>
              </li>
              <li>
                <Link to="/products?category=kitchen" className="text-blue-100 hover:text-white transition-colors">
                  Kitchen Cleaners
                </Link>
              </li>
              <li>
                <Link to="/products?category=bathroom" className="text-blue-100 hover:text-white transition-colors">
                  Bathroom Cleaners
                </Link>
              </li>
              <li>
                <Link to="/products?category=floor" className="text-blue-100 hover:text-white transition-colors">
                  Floor Cleaners
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>info@cleanhouse.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1" />
                <span>123 Clean Street, Eco City, EC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-500 mt-8 pt-8 text-center text-blue-100">
          <p>&copy; {new Date().getFullYear()} Clean House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;