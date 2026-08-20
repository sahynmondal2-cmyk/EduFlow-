import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Calendar, CheckCircle, XCircle } from 'lucide-react';

const data = [
  { month: 'Jan', attendance: 95 },
  { month: 'Feb', attendance: 88 },
  { month: 'Mar', attendance: 92 },
  { month: 'Apr', attendance: 100 },
  { month: 'May', attendance: 85 },
  { month: 'Jun', attendance: 90 },
];

const Attendance = () => {
  return (
    <div className="p-6 text-text-text">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold mb-2">Attendance Dashboard</h1>
        <p className="text-muted">Monitor your class presence and trends.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { label: 'Overall Attendance', value: '91.6%', icon: Calendar, color: 'text-primary' },
          { label: 'Classes Attended', value: '110', icon: CheckCircle, color: 'text-secondary' },
          { label: 'Classes Missed', value: '10', icon: XCircle, color: 'text-accent' },
        ].map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-surface p-6 rounded-xl border border-white/10 flex items-center space-x-4"
          >
            <div className={`p-3 rounded-lg bg-white/5 ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-muted text-sm">{stat.label}</p>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-surface p-6 rounded-xl border border-white/10"
        >
          <h3 className="text-xl font-bold mb-6">Monthly Trend</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" domain={[0, 100]} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111625', borderColor: '#374151', color: '#F8FAFC' }}
                  itemStyle={{ color: '#6366F1' }}
                />
                <Line type="monotone" dataKey="attendance" stroke="#6366F1" strokeWidth={3} dot={{ r: 4, fill: '#8B5CF6' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-surface p-6 rounded-xl border border-white/10"
        >
          <h3 className="text-xl font-bold mb-6">Attendance by Month (Bar)</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" domain={[0, 100]} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111625', borderColor: '#374151', color: '#F8FAFC' }}
                  cursor={{ fill: '#1F2937' }}
                />
                <Bar dataKey="attendance" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Attendance;