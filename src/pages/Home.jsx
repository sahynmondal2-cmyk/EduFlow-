import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users, BookOpen, Trophy, Star, CheckCircle, Play } from 'lucide-react';
import { courses } from '../data/courses';

const stats = [
  { label: 'Active Students', value: '10K+', icon: <Users className="w-6 h-6 text-primary" /> },
  { label: 'Expert Faculty', value: '50+', icon: <Trophy className="w-6 h-6 text-secondary" /> },
  { label: 'Premium Courses', value: '100+', icon: <BookOpen className="w-6 h-6 text-accent" /> },
  { label: 'Success Rate', value: '98%', icon: <Star className="w-6 h-6 text-yellow-400" /> },
];

const features = [
  'Interactive Live Classes',
  '1-on-1 Mentorship',
  'Comprehensive Study Material',
  '24/7 Doubt Resolution',
];

export default function Home() {
  const featuredCourses = courses.slice(0, 8);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-bg to-bg" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-primary/20 text-primary mb-8 text-sm font-medium"
            >
              <span className="flex h-2 w-2 rounded-full bg-primary animate-ping" />
              Next-Gen Learning Platform
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold text-text tracking-tight mb-8"
            >
              Unlock Your Potential with{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                EduFlow
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-text/70 mb-12 max-w-2xl mx-auto"
            >
              Join the most comprehensive edtech platform. Master modern skills with industry experts, interactive courses, and a community of ambitious learners.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/courses"
                className="px-8 py-4 bg-primary text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] hover:-translate-y-1 w-full sm:w-auto justify-center"
              >
                Explore Courses <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 bg-surface text-text rounded-xl font-semibold border border-surface flex items-center gap-2 hover:bg-surface/80 transition-all hover:-translate-y-1 w-full sm:w-auto justify-center"
              >
                <Play className="w-5 h-5 text-secondary" /> Watch Demo
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-text/60"
            >
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  {feature}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-surface bg-background/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-surface/50 border border-surface hover:bg-surface transition-colors"
              >
                <div className="mb-4 p-3 rounded-full bg-background shadow-inner">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-text mb-1">{stat.value}</h3>
                <p className="text-sm text-text/60 font-medium uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-text mb-4"
              >
                Featured <span className="text-primary">Courses</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-text/70 max-w-2xl"
              >
                Discover our most popular programs designed by industry experts to accelerate your career.
              </motion.p>
            </div>
            <Link 
              to="/courses" 
              className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              View all courses <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {featuredCourses.map((course) => (
              <motion.div
                key={course.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-surface rounded-2xl overflow-hidden border border-surface group flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 text-xs font-semibold bg-background/80 backdrop-blur-sm text-text rounded-full border border-surface">
                      {course.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-secondary bg-secondary/10 px-2 py-1 rounded-md">
                      {course.level}
                    </span>
                    <div className="flex items-center gap-1 text-yellow-400 text-sm font-medium">
                      <Star className="w-4 h-4 fill-current" /> {course.rating}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-text mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  
                  <p className="text-sm text-text/60 mb-4 line-clamp-2 flex-grow">
                    {course.description}
                  </p>
                  
                  <div className="pt-4 border-t border-surface flex items-center justify-between mt-auto">
                    <span className="text-xl font-bold text-text">{course.price}</span>
                    <Link 
                      to={`/courses/${course.id}`}
                      className="text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-1"
                    >
                      Details <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-10 text-center md:hidden">
            <Link 
              to="/courses" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              View all courses <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Start Learning?</h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of students who are already learning and growing with EduFlow.
              </p>
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-bold hover:bg-surface transition-all hover:scale-105 shadow-xl"
              >
                Join Now for Free <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}