import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Zap, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background text-text">
      {/* Hero Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#6366F1]/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Empowering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Next Generation</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted"
          >
            EduFlow is India's leading EdTech platform, dedicated to making quality education accessible, engaging, and affordable for everyone.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 bg-surface/50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-accent">Our Mission</h2>
            <p className="text-muted leading-relaxed text-lg">
              To democratize education by leveraging technology, bringing top-tier faculty and comprehensive resources to students regardless of their geographical location. We believe that every student deserves the opportunity to achieve their dreams.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-background p-6 rounded-2xl border border-white/10 text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">5M+</h3>
              <p className="text-muted text-sm">Students Enrolled</p>
            </div>
            <div className="bg-background p-6 rounded-2xl border border-white/10 text-center">
              <h3 className="text-4xl font-bold text-secondary mb-2">100+</h3>
              <p className="text-muted text-sm">Expert Faculty</p>
            </div>
            <div className="bg-background p-6 rounded-2xl border border-white/10 text-center">
              <h3 className="text-4xl font-bold text-accent mb-2">500+</h3>
              <p className="text-muted text-sm">Courses Available</p>
            </div>
            <div className="bg-background p-6 rounded-2xl border border-white/10 text-center">
              <h3 className="text-4xl font-bold text-pink-500 mb-2">4.8/5</h3>
              <p className="text-muted text-sm">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Our Core <span className="text-secondary">Values</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors">
              <Target className="text-primary mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-muted">We strive for excellence in everything we do, from our curriculum design to our teaching methodologies.</p>
            </div>
            <div className="bg-surface p-8 rounded-2xl border border-white/10 hover:border-[#22D3EE]/50 transition-colors">
              <Zap className="text-accent mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-muted">Embracing the latest technology to create interactive and engaging learning experiences.</p>
            </div>
            <div className="bg-surface p-8 rounded-2xl border border-white/10 hover:border-[#8B5CF6]/50 transition-colors">
              <Users className="text-secondary mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4">Community</h3>
              <p className="text-muted">Building a supportive environment where students can collaborate, learn, and grow together.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;