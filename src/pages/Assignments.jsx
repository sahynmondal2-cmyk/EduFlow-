import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { assignments } from '../data/assignments';
import { FileText, Clock, CheckCircle, Award } from 'lucide-react';

const Assignments = () => {
  const [filter, setFilter] = useState('All');

  const filteredAssignments = assignments.filter(a => {
    if (filter === 'All') return true;
    return a.status === filter;
  });

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Pending': return <Clock className="w-5 h-5 text-accent" />;
      case 'Submitted': return <CheckCircle className="w-5 h-5 text-primary" />;
      case 'Graded': return <Award className="w-5 h-5 text-secondary" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  return (
    <div className="p-6 text-text-text">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold mb-2">Assignments</h1>
          <p className="text-muted">Track and submit your coursework.</p>
        </div>
        
        <div className="flex space-x-2 bg-surface p-1 rounded-lg border border-white/10">
          {['All', 'Pending', 'Submitted', 'Graded'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === f 
                  ? 'bg-primary text-white' 
                  : 'text-muted hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="grid gap-4">
        {filteredAssignments.map((assignment, idx) => (
          <motion.div 
            key={assignment.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="bg-surface p-5 rounded-xl border border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-gray-600 transition-colors"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-lg bg-white/5">
                {getStatusIcon(assignment.status)}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{assignment.title}</h3>
                <div className="flex items-center text-sm text-muted mt-1 space-x-4">
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    Due: {new Date(assignment.dueDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 self-end md:self-auto">
              {assignment.status === 'Graded' && (
                <div className="text-right">
                  <span className="text-xs text-muted block">Score</span>
                  <span className="font-bold text-lg text-secondary">{assignment.score}/100</span>
                </div>
              )}
              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                assignment.status === 'Pending' ? 'bg-accent-[#22D3EE]/10 text-accent border-accent-[#22D3EE]/20' :
                assignment.status === 'Submitted' ? 'bg-primary/10 text-primary border-primary-[#6366F1]/20' :
                'bg-secondary-[#8B5CF6]/10 text-secondary border-secondary-[#8B5CF6]/20'
              }`}>
                {assignment.status}
              </span>
              {assignment.status === 'Pending' && (
                <button className="bg-primary hover:bg-opacity-90 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Submit
                </button>
              )}
            </div>
          </motion.div>
        ))}
        {filteredAssignments.length === 0 && (
          <div className="text-center py-12 text-muted bg-surface rounded-xl border border-white/10">
            <CheckCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No assignments found for this filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Assignments;