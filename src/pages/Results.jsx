import React from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { Award, TrendingUp, Target } from 'lucide-react';

const performanceData = [
  { term: 'Midterm 1', score: 75 },
  { term: 'Midterm 2', score: 82 },
  { term: 'Finals (Sem 1)', score: 88 },
  { term: 'Midterm 3', score: 85 },
  { term: 'Midterm 4', score: 91 },
  { term: 'Finals (Sem 2)', score: 94 },
];

const subjectSkills = [
  { subject: 'Physics', A: 90, fullMark: 100 },
  { subject: 'Math', A: 95, fullMark: 100 },
  { subject: 'Chemistry', A: 85, fullMark: 100 },
  { subject: 'Biology', A: 88, fullMark: 100 },
  { subject: 'English', A: 82, fullMark: 100 },
  { subject: 'History', A: 78, fullMark: 100 },
];

const Results = () => {
  return (
    <div className="p-6 text-text-text">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold mb-2">Performance Results</h1>
        <p className="text-muted">Analyze your academic progress and scores.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { label: 'Current CGPA', value: '8.9', icon: Award, color: 'text-secondary' },
          { label: 'Growth Trend', value: '+5.4%', icon: TrendingUp, color: 'text-primary' },
          { label: 'Best Subject', value: 'Math', icon: Target, color: 'text-accent' },
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
          <h3 className="text-xl font-bold mb-6">Score Trend</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366F1" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="term" stroke="#9CA3AF" fontSize={12} />
                <YAxis stroke="#9CA3AF" domain={[0, 100]} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111625', borderColor: '#374151', color: '#F8FAFC' }}
                />
                <Area type="monotone" dataKey="score" stroke="#6366F1" fillOpacity={1} fill="url(#colorScore)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-surface p-6 rounded-xl border border-white/10 flex flex-col items-center"
        >
          <h3 className="text-xl font-bold mb-2 self-start">Subject Mastery</h3>
          <div className="h-80 w-full max-w-md">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={subjectSkills}>
                <PolarGrid stroke="#374151" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#374151" />
                <Radar name="Student" dataKey="A" stroke="#22D3EE" fill="#22D3EE" fillOpacity={0.5} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111625', borderColor: '#374151', color: '#F8FAFC' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Results;