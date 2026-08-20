import React from 'react';
import { motion } from 'framer-motion';
import { notices } from '../data/notices';
import { Calendar, Bell, AlertTriangle, FileText, CalendarDays, BookOpen } from 'lucide-react';

const getCategoryIcon = (category) => {
  switch (category) {
    case 'Holiday': return <CalendarDays className="text-pink-500" size={24} />;
    case 'Exam': return <FileText className="text-purple-500" size={24} />;
    case 'Assignment': return <BookOpen className="text-blue-500" size={24} />; // Wait, BookOpen not imported, use FileText or similar
    case 'Important': return <AlertTriangle className="text-orange-500" size={24} />;
    default: return <Bell className="text-green-500" size={24} />;
  }
};

const getCategoryColor = (category) => {
  switch (category) {
    case 'Holiday': return 'bg-pink-500/10 text-pink-500 border-pink-500/20';
    case 'Exam': return 'bg-purple-500/10 text-purple-500 border-purple-500/20';
    case 'Assignment': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
    case 'Important': return 'bg-orange-500/10 text-orange-500 border-orange-500/20';
    default: return 'bg-green-500/10 text-green-500 border-green-500/20';
  }
};

const Notices = () => {
  return (
    <div className="min-h-screen bg-background text-text py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Notice <span className="text-accent">Board</span></h1>
          <p className="text-muted">Stay updated with the latest announcements, schedules, and important information.</p>
        </div>

        <div className="space-y-4">
          {notices.map((notice, index) => (
            <motion.div 
              key={notice.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-surface border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-colors flex flex-col md:flex-row gap-6 items-start md:items-center"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-background border border-white/10">
                {getCategoryIcon(notice.category)}
              </div>
              
              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(notice.category)}`}>
                    {notice.category}
                  </span>
                  <div className="flex items-center text-muted text-sm gap-1">
                    <Calendar size={14} />
                    <span>{new Date(notice.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{notice.title}</h3>
                <p className="text-muted text-sm">{notice.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notices;