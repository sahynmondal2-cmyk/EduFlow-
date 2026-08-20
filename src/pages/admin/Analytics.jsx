import React from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const studentGrowth = [
  { month: 'Jan', students: 1200 },
  { month: 'Feb', students: 1350 },
  { month: 'Mar', students: 1500 },
  { month: 'Apr', students: 1800 },
  { month: 'May', students: 2100 },
  { month: 'Jun', students: 2405 },
];

const courseDistribution = [
  { name: 'Web Dev', value: 400 },
  { name: 'Data Science', value: 300 },
  { name: 'UI/UX', value: 300 },
  { name: 'Mobile', value: 200 },
];

const COLORS = ['#6366F1', '#22D3EE', '#8B5CF6', '#10B981'];

const Analytics = () => {
  return (
    <div className="p-6 md:p-8 space-y-6 bg-background min-h-screen text-text">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-white">Platform Analytics</h1>
        <p className="text-muted mt-1">Detailed metrics and growth analysis</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2 bg-surface p-6 rounded-xl border border-white/10"
        >
          <h3 className="text-xl font-bold mb-6">Student Growth Over Time</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={studentGrowth}>
                <defs>
                  <linearGradient id="colorStudents" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366F1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
                <XAxis dataKey="month" stroke="#9ca3af" axisLine={false} tickLine={false} />
                <YAxis stroke="#9ca3af" axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111625', border: '1px solid #374151', borderRadius: '0.5rem' }}
                />
                <Area type="monotone" dataKey="students" stroke="#6366F1" strokeWidth={3} fillOpacity={1} fill="url(#colorStudents)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-surface p-6 rounded-xl border border-white/10"
        >
          <h3 className="text-xl font-bold mb-6">Course Distribution</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={courseDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {courseDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#111625', border: '1px solid #374151', borderRadius: '0.5rem' }} />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Analytics;