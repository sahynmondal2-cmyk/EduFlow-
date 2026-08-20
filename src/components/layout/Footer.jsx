import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                EduFlow
              </span>
            </Link>
            <p className="text-sm text-text/70 mb-4">
              Empowering students worldwide with premium EdTech solutions, comprehensive courses, and top-tier faculty.
            </p>
            <div className="flex space-x-4">
              {/* social icons removed */}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text uppercase tracking-wider mb-4">Platform</h3>
            <ul className="space-y-3">
              <li><Link to="/courses" className="text-sm text-text/70 hover:text-primary transition-colors">Browse Courses</Link></li>
              <li><Link to="/faculty" className="text-sm text-text/70 hover:text-primary transition-colors">Our Faculty</Link></li>
              <li><Link to="/batches" className="text-sm text-text/70 hover:text-primary transition-colors">Upcoming Batches</Link></li>
              <li><Link to="/notices" className="text-sm text-text/70 hover:text-primary transition-colors">Notice Board</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-text/70 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-text/70 hover:text-primary transition-colors">Contact</Link></li>
              <li><a href="#" className="text-sm text-text/70 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-text/70 hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text uppercase tracking-wider mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-text/70">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>123 Innovation Drive, Tech City, TC 10010</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-text/70">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-text/70">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>support@eduflow.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-surface flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text/50">
            &copy; {new Date().getFullYear()} EduFlow Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-text/50">
            Designed with <span className="text-red-500">♥</span> for education.
          </div>
        </div>
      </div>
    </footer>
  );
}
