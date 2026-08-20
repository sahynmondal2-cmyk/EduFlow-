import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Layers, TrendingUp, DollarSign, Activity } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const stats = [
  { title: "Total Students", value: "2,405", icon: Users, color: "text-primary" },
  { title: "Active Courses", value: "12", icon: BookOpen, color: "text-secondary" },
  { title: "Active Batches", value: "8", icon: Layers, color: "text-accent" },
  { title: "Total Revenue", value: "$45,231", icon: DollarSign, color: "text-[#10B981]" },
];

const revenueData = [
  { name: 'Jan', revenue: 4000 },
  { name: 'Feb', revenue: 3000 },
  { name: 'Mar', revenue: 5000 },
  { name: 'Apr', revenue: 4500 },
  { name: 'May', revenue: 6000 },
  { name: 'Jun', revenue: 5500 },
];

const enrollmentsData = [
  { name: 'Jan', enrollments: 120 },
  { name: 'Feb', enrollments: 150 },
  { name: 'Mar', enrollments: 180 },
  { name: 'Apr', enrollments: 200 },
  { name: 'May', enrollments: 250 },
  { name: 'Jun', enrollments: 220 },
];

const AdminDashboard = () => {
  return (
    <div className="p-6 md:p-8 space-y-8 bg-background min-h-screen text-text">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center"
      >
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Admin Dashboard
          </h1>
          <p className="text-muted mt-1">Overview of your platform's performance</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-surface p-6 rounded-xl border border-white/10 flex items-center space-x-4"
          >
            <div className={`p-4 rounded-lg bg-black/20 ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-muted text-sm">{stat.title}</p>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-surface p-6 rounded-xl border border-white/10"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold">Revenue Growth</h3>
            <TrendingUp className="text-[#10B981] w-5 h-5" />
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#111625', borderColor: '#374151', color: '#F8FAFC' }}
                />
                <Line type="monotone" dataKey="revenue" stroke="#6366F1" strokeWidth={3} dot={{ r: 4 }} />
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
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold">New Enrollments</h3>
            <Activity className="text-accent w-5 h-5" />
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={enrollmentsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#111625', borderColor: '#374151', color: '#F8FAFC' }}
                  cursor={{ fill: '#1f2937' }}
                />
                <Bar dataKey="enrollments" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;