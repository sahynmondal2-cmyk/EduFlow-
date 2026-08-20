import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, MoreVertical, Download } from 'lucide-react';
import { students as studentsData } from '../../data/students';

const Students = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const filteredStudents = studentsData.filter((student) => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          student.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || student.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-6 md:p-8 space-y-6 bg-background min-h-screen text-text">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold text-white">Students</h1>
          <p className="text-muted mt-1">Manage all enrolled students</p>
        </div>
        <button className="flex items-center space-x-2 bg-surface border border-white/10 hover:border-gray-500 px-4 py-2 rounded-lg transition-colors">
          <Download className="w-4 h-4" />
          <span>Export CSV</span>
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-surface rounded-xl border border-white/10 overflow-hidden"
      >
        <div className="p-4 border-b border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              type="text"
              placeholder="Search students..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-black/20 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <Filter className="w-4 h-4 text-muted" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="bg-black/20 border border-white/10 rounded-lg py-2 px-3 text-sm focus:outline-none focus:border-primary transition-colors"
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-black/20 border-b border-white/10">
              <tr>
                <th className="px-6 py-4 text-sm font-medium text-muted">Name</th>
                <th className="px-6 py-4 text-sm font-medium text-muted">Course</th>
                <th className="px-6 py-4 text-sm font-medium text-muted">Join Date</th>
                <th className="px-6 py-4 text-sm font-medium text-muted">Status</th>
                <th className="px-6 py-4 text-sm font-medium text-muted text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-medium text-white">{student.name}</span>
                      <span className="text-sm text-muted">{student.email}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-white/80">{student.course}</td>
                  <td className="px-6 py-4 text-white/80">{student.joinDate}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      student.status === 'Active' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-muted hover:text-white transition-colors">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredStudents.length === 0 && (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center text-muted">
                    No students found matching your criteria.
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

export default Students;