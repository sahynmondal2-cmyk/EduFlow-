import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, ChevronRight, Plus } from 'lucide-react';
import { batches } from '../../data/batches';

const Batches = () => {
  return (
    <div className="p-6 md:p-8 space-y-6 bg-background min-h-screen text-text">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Batches</h1>
          <p className="text-muted mt-1">Manage student batches and schedules</p>
        </div>
        <button className="flex items-center space-x-2 bg-[#6366F1] hover:bg-[#4F46E5] px-4 py-2 rounded-lg transition-colors font-medium">
          <Plus className="w-4 h-4" />
          <span>New Batch</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {batches.map((batch, index) => (
          <motion.div
            key={batch.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-surface rounded-xl border border-white/10 p-6 flex flex-col hover:border-gray-600 transition-colors group cursor-pointer"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-bold">{batch.id}</h3>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                    batch.status === 'Ongoing' ? 'bg-green-500/10 text-green-400' : 'bg-blue-500/10 text-blue-400'
                  }`}>
                    {batch.status}
                  </span>
                </div>
                <p className="text-muted text-sm mt-1">{batch.course}</p>
              </div>
              <div className="p-2 bg-black/20 rounded-lg group-hover:bg-[#6366F1]/10 transition-colors">
                <ChevronRight className="w-4 h-4 text-muted group-hover:text-primary" />
              </div>
            </div>

            <div className="mt-4 space-y-4">
              <div className="flex items-center space-x-3 text-sm text-white/80">
                <Calendar className="w-4 h-4 text-muted" />
                <span>Starts: {batch.startDate}</span>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted flex items-center"><Users className="w-4 h-4 mr-1"/> Enrollment</span>
                  <span className="text-gray-200">{batch.enrolled} / {batch.capacity}</span>
                </div>
                <div className="w-full bg-black/20 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${(batch.enrolled/batch.capacity) > 0.8 ? 'bg-orange-500' : 'bg-[#6366F1]'}`}
                    style={{ width: `${(batch.enrolled / batch.capacity) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Batches;