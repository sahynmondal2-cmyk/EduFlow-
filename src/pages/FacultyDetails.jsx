import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { faculty } from '../data/faculty';
import { ArrowLeft, BookOpen, Award, Users, Star, GraduationCap } from 'lucide-react';

const FacultyDetails = () => {
  const { id } = useParams();
  const member = faculty.find(f => f.id === id);

  if (!member) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center text-text">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Faculty not found</h2>
          <Link to="/faculty" className="text-primary hover:underline flex items-center justify-center gap-2">
            <ArrowLeft size={20} /> Back to Faculty
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-text py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/faculty" className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-8">
          <ArrowLeft size={20} />
          <span>Back to Faculty</span>
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-surface rounded-2xl border border-white/10 overflow-hidden"
        >
          <div className="md:flex">
            <div className="md:w-1/3 bg-black/20 p-8 flex flex-col items-center justify-center border-r border-white/10">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/30 shadow-[0_0_30px_rgba(99,102,241,0.2)] mb-6">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h2 className="text-2xl font-bold text-center">{member.name}</h2>
              <p className="text-accent font-medium text-center mt-2">{member.subject}</p>
            </div>
            
            <div className="md:w-2/3 p-8">
              <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">Professional Overview</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-background p-4 rounded-xl border border-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <GraduationCap className="text-primary" size={24} />
                    <span className="text-muted text-sm">Qualifications</span>
                  </div>
                  <p className="font-semibold">{member.qualifications}</p>
                </div>

                <div className="bg-background p-4 rounded-xl border border-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="text-secondary" size={24} />
                    <span className="text-muted text-sm">Experience</span>
                  </div>
                  <p className="font-semibold">{member.experience}</p>
                </div>

                <div className="bg-background p-4 rounded-xl border border-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="text-accent" size={24} />
                    <span className="text-muted text-sm">Students Taught</span>
                  </div>
                  <p className="font-semibold">{member.students.toLocaleString()}+</p>
                </div>

                <div className="bg-background p-4 rounded-xl border border-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <Star className="text-yellow-400" size={24} />
                    <span className="text-muted text-sm">Rating</span>
                  </div>
                  <p className="font-semibold">{member.rating} / 5.0</p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <button className="bg-[#6366F1] hover:bg-[#4F46E5] text-white px-6 py-3 rounded-lg font-medium transition-colors w-full sm:w-auto">
                  Enroll in {member.name}'s Courses
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FacultyDetails;