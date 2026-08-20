import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, TrendingUp, Award, Clock } from 'lucide-react';
import { courses } from '../data/courses';

const StudentDashboard = () => {
  const stats = [
    { label: 'Overall Progress', value: '78%', icon: TrendingUp, color: 'text-primary' },
    { label: 'Attendance', value: '92%', icon: Calendar, color: 'text-accent' },
    { label: 'Current Streak', value: '14 Days', icon: Award, color: 'text-secondary' }
  ];

  const activeCourses = courses ? courses.slice(0, 3) : [];

  return (
    <div className="p-6 text-text-text">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold mb-2">Welcome back, Alex! 👋</h1>
        <p className="text-muted">Here's an overview of your learning progress.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-surface p-6 rounded-xl border border-white/10 flex items-center space-x-4"
          >
            <div className={`p-3 rounded-lg bg-opacity-10 bg-gray-700 ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-muted text-sm">{stat.label}</p>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <h2 className="text-xl font-bold mb-4">Active Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeCourses.map((course, idx) => (
          <motion.div 
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + idx * 0.1 }}
            className="bg-surface rounded-xl border border-white/10 overflow-hidden hover:border-primary-[#6366F1] transition-colors"
          >
            <div className="h-32 bg-white/5 overflow-hidden relative">
              {course.image && <img src={course.image} alt={course.title} className="w-full h-full object-cover opacity-60" />}
              <div className="absolute top-2 right-2 bg-primary text-xs px-2 py-1 rounded">
                {course.level}
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
              <div className="flex items-center text-sm text-muted mb-4 space-x-4">
                <span className="flex items-center"><BookOpen className="w-4 h-4 mr-1" /> {course.duration}</span>
              </div>
              <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                <div className="bg-primary h-full" style={{ width: `${Math.floor(Math.random() * 60) + 20}%` }}></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;