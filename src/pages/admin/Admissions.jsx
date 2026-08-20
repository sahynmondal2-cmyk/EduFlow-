import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MoreHorizontal } from 'lucide-react';
import { admissions } from '../../data/admissions';

const Admissions = () => {
  const [filter, setFilter] = useState('All');
  
  const filteredAdmissions = filter === 'All' 
    ? admissions 
    : admissions.filter(a => a.status === filter);

  return (
    <div className="p-6 md:p-8 space-y-6 bg-background min-h-screen text-text">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Admissions</h1>
          <p className="text-muted mt-1">Manage prospective student leads</p>
        </div>
      </div>

      <div className="flex space-x-2 pb-2 overflow-x-auto">
        {['All', 'New', 'Contacted', 'Enrolled'].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
              filter === status 
                ? 'bg-[#6366F1] text-white' 
                : 'bg-surface text-muted border border-white/10 hover:border-gray-600'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-surface rounded-xl border border-white/10 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-black/20 border-b border-white/10">
              <tr>
                <th className="px-6 py-4 text-sm font-medium text-muted">Lead Info</th>
                <th className="px-6 py-4 text-sm font-medium text-muted">Course Interest</th>
                <th className="px-6 py-4 text-sm font-medium text-muted">Date Applied</th>
                <th className="px-6 py-4 text-sm font-medium text-muted">Status</th>
                <th className="px-6 py-4 text-sm font-medium text-muted text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {filteredAdmissions.map((lead) => (
                <tr key={lead.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-medium text-white">{lead.name}</span>
                      <div className="flex items-center space-x-3 mt-1 text-xs text-muted">
                        <span className="flex items-center"><Mail className="w-3 h-3 mr-1" /> {lead.email}</span>
                        <span className="flex items-center"><Phone className="w-3 h-3 mr-1" /> {lead.phone}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-white/80">{lead.course}</td>
                  <td className="px-6 py-4 text-white/80">{lead.date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      lead.status === 'New' ? 'bg-purple-500/10 text-purple-400' :
                      lead.status === 'Contacted' ? 'bg-blue-500/10 text-blue-400' :
                      'bg-green-500/10 text-green-400'
                    }`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-muted hover:text-white transition-colors">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredAdmissions.length === 0 && (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center text-muted">
                    No leads found for this status.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default Admissions;