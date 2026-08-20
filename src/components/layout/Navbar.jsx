import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, BookOpen, Users, GraduationCap, Bell, Info, Mail, Zap } from 'lucide-react';

const navLinks = [
  { title: 'Courses', path: '/courses', icon: <BookOpen className="w-4 h-4" /> },
  { title: 'Faculty', path: '/faculty', icon: <Users className="w-4 h-4" /> },
  { title: 'Batches', path: '/batches', icon: <GraduationCap className="w-4 h-4" /> },
  { title: 'Notices', path: '/notices', icon: <Bell className="w-4 h-4" /> },
  { title: 'About', path: '/about', icon: <Info className="w-4 h-4" /> },
  { title: 'Contact', path: '/contact', icon: <Mail className="w-4 h-4" /> }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-surface/20 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                EduFlow
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                  location.pathname === link.path
                    ? 'bg-surface text-primary'
                    : 'text-text hover:bg-surface/50 hover:text-primary'
                }`}
              >
                {link.icon}
                {link.title}
              </Link>
            ))}
            <div className="ml-4 flex items-center gap-2">
              <Link to="/login" className="px-4 py-2 text-sm font-medium text-text hover:text-primary transition-colors">
                Login
              </Link>
              <Link to="/signup" className="px-4 py-2 text-sm font-medium bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-text hover:text-primary hover:bg-surface/50 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-surface/20 bg-background"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium flex items-center gap-3 ${
                    location.pathname === link.path
                      ? 'bg-surface text-primary'
                      : 'text-text hover:bg-surface/50 hover:text-primary'
                  }`}
                >
                  {link.icon}
                  {link.title}
                </Link>
              ))}
              <div className="pt-4 pb-2 border-t border-surface/20 flex flex-col gap-2 px-2">
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block text-center px-4 py-2 text-base font-medium text-text hover:text-primary transition-colors border border-surface rounded-lg"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setIsOpen(false)}
                  className="block text-center px-4 py-2 text-base font-medium bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
