import React from 'react';
import { motion } from 'framer-motion';
import { faculty } from '../data/faculty';
import { BookOpen, Award, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Faculty = () => {
  return (
    <div className="min-h-screen bg-background text-text py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 text-text">Our Expert <span className="text-primary">Faculty</span></h1>
          <p className="text-muted max-w-2xl mx-auto">Learn from the best educators who are passionate about sharing their knowledge and guiding you to success.</p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {faculty.map((member) => (
            <motion.div key={member.id} variants={itemVariants}>
              <Link to={`/faculty/${member.id}`} className="block h-full group">
                <div className="bg-surface rounded-xl overflow-hidden border border-white/10 hover:border-primary transition-all duration-300 h-full flex flex-col">
                  <div className="relative pt-6 px-6 flex justify-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-surface shadow-[0_0_15px_rgba(99,102,241,0.2)] group-hover:scale-105 transition-transform duration-300">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col items-center text-center">
                    <h3 className="text-xl font-bold mb-1 text-text group-hover:text-primary transition-colors">{member.name}</h3>
                    <p className="text-accent text-sm font-medium mb-4">{member.subject}</p>
                    
                    <div className="w-full grid grid-cols-2 gap-3 mt-auto pt-4 border-t border-white/10/50 text-sm">
                      <div className="flex items-center justify-center gap-1.5 text-muted">
                        <Award size={16} className="text-secondary" />
                        <span>{member.experience}</span>
                      </div>
                      <div className="flex items-center justify-center gap-1.5 text-muted">
                        <Star size={16} className="text-yellow-400" />
                        <span>{member.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Faculty;