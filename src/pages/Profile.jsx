import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Save, Camera } from 'lucide-react';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'Alex Johnson',
    email: 'alex.j@example.com',
    phone: '+91 9876543210',
    address: '123 Edu Lane, Tech Park',
    bio: 'Computer Science Enthusiast',
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const savedProfile = localStorage.getItem('studentProfile');
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem('studentProfile', JSON.stringify(profile));
    setIsEditing(false);
  };

  return (
    <div className="p-6 text-text-text max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 flex justify-between items-end"
      >
        <div>
          <h1 className="text-3xl font-bold mb-2">Student Profile</h1>
          <p className="text-muted">Manage your personal information.</p>
        </div>
        {!isEditing ? (
          <button 
            onClick={() => setIsEditing(true)}
            className="bg-surface border border-white/10 hover:border-primary-[#6366F1] px-4 py-2 rounded-lg transition-colors"
          >
            Edit Profile
          </button>
        ) : (
          <button 
            onClick={handleSave}
            className="bg-primary hover:bg-opacity-90 px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
          >
            <Save className="w-4 h-4" />
            <span>Save Changes</span>
          </button>
        )}
      </motion.div>

      <div className="bg-surface rounded-xl border border-white/10 overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-primary-[#6366F1] to-secondary-[#8B5CF6]"></div>
        
        <div className="px-8 pb-8 relative">
          <div className="flex justify-between items-end -mt-16 mb-8">
            <div className="relative group">
              <div className="w-32 h-32 bg-white/5 rounded-full border-4 border-surface-[#111625] overflow-hidden">
                <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(profile.name)}&background=22D3EE&color=fff&size=200`} alt="Profile" className="w-full h-full object-cover" />
              </div>
              {isEditing && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera className="w-8 h-8 text-white" />
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-muted mb-1 flex items-center"><User className="w-4 h-4 mr-2" /> Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={profile.name} 
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white disabled:opacity-70 disabled:bg-white/5 focus:outline-none focus:border-primary-[#6366F1] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-muted mb-1 flex items-center"><Mail className="w-4 h-4 mr-2" /> Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  value={profile.email} 
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white disabled:opacity-70 disabled:bg-white/5 focus:outline-none focus:border-primary-[#6366F1] transition-colors"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-muted mb-1 flex items-center"><Phone className="w-4 h-4 mr-2" /> Phone Number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  value={profile.phone} 
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white disabled:opacity-70 disabled:bg-white/5 focus:outline-none focus:border-primary-[#6366F1] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-muted mb-1 flex items-center"><MapPin className="w-4 h-4 mr-2" /> Address</label>
                <input 
                  type="text" 
                  name="address" 
                  value={profile.address} 
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white disabled:opacity-70 disabled:bg-white/5 focus:outline-none focus:border-primary-[#6366F1] transition-colors"
                />
              </div>
            </div>
            
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm text-muted mb-1">Bio</label>
              <textarea 
                name="bio" 
                value={profile.bio} 
                onChange={handleChange}
                disabled={!isEditing}
                rows="3"
                className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white disabled:opacity-70 disabled:bg-white/5 focus:outline-none focus:border-primary-[#6366F1] transition-colors resize-none"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;