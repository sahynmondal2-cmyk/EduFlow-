import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-text py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Get in <span className="text-primary">Touch</span>
          </motion.h1>
          <p className="text-muted max-w-2xl mx-auto">Have questions about our courses or need support? We're here to help you on your learning journey.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-surface p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#6366F1]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Email Us</h3>
                    <p className="text-muted">support@eduflow.com</p>
                    <p className="text-muted">admissions@eduflow.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#22D3EE]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Call Us</h3>
                    <p className="text-muted">+91 1800 123 4567</p>
                    <p className="text-muted">Mon-Sat, 9am to 6pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#8B5CF6]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Visit Us</h3>
                    <p className="text-muted">EduFlow HQ, Tech Park<br />Koramangala, Bengaluru<br />Karnataka 560034</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-surface p-8 rounded-2xl border border-white/10"
          >
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-muted mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-muted mb-2">Message</label>
                <textarea 
                  rows="4" 
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="button"
                className="w-full bg-gradient-to-r from-primary to-[#8B5CF6] hover:from-[#4F46E5] hover:to-[#7C3AED] text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;