import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Shield, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState('student'); // 'student' or 'admin'
  const [formData, setFormData] = useState({
    identifier: '', // Email or Student ID
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real app, call login context here
    if (loginType === 'student') {
      navigate('/student-dashboard');
    } else {
      navigate('/admin');
    }
  };

  const demoStudentLogin = () => {
    // In a real app, call login context with demo student credentials
    navigate('/student-dashboard');
  };

  const demoAdminLogin = () => {
    // In a real app, call login context with demo admin credentials
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-background text-text flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">
            EduFlow
          </h1>
          <p className="text-muted">Sign in to your account</p>
        </div>

        <div className="bg-surface rounded-2xl p-8 border border-white/5 shadow-xl">
          {/* Toggle Login Type */}
          <div className="flex bg-background p-1 rounded-lg mb-8">
            <button
              onClick={() => setLoginType('student')}
              className={`flex-1 flex items-center justify-center py-2 rounded-md text-sm font-medium transition-colors ${
                loginType === 'student' 
                  ? 'bg-surface text-white shadow' 
                  : 'text-muted hover:text-white'
              }`}
            >
              <User className="w-4 h-4 mr-2" />
              Student
            </button>
            <button
              onClick={() => setLoginType('admin')}
              className={`flex-1 flex items-center justify-center py-2 rounded-md text-sm font-medium transition-colors ${
                loginType === 'admin' 
                  ? 'bg-surface text-white shadow' 
                  : 'text-muted hover:text-white'
              }`}
            >
              <Shield className="w-4 h-4 mr-2" />
              Admin
            </button>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-muted mb-1">
                {loginType === 'student' ? 'Email or Student ID' : 'Admin Email'}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-muted" />
                </div>
                <input
                  type="text"
                  name="identifier"
                  value={formData.identifier}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-lg bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent transition-all"
                  placeholder={loginType === 'student' ? "Enter your email or ID" : "admin@eduflow.edu"}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-muted mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-muted" />
                </div>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-lg bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-white/10 bg-white/5 text-primary focus:ring-[#6366F1] mr-2" />
                <span className="text-muted ml-2">Remember me</span>
              </label>
              <a href="#" className="text-accent hover:text-[#06b6d4]">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#6366F1] hover:bg-[#8B5CF6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6366F1] transition-colors"
            >
              Sign In
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-surface text-muted">Quick Access</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3">
              <button
                onClick={demoStudentLogin}
                className="w-full flex items-center justify-center py-2.5 px-4 border border-white/10 rounded-lg shadow-sm text-sm font-medium text-white/80 bg-white/5 hover:bg-white/10 transition-colors"
              >
                <User className="h-4 w-4 mr-2 text-accent" />
                Use Demo Student Account
              </button>
              <button
                onClick={demoAdminLogin}
                className="w-full flex items-center justify-center py-2.5 px-4 border border-white/10 rounded-lg shadow-sm text-sm font-medium text-white/80 bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Shield className="h-4 w-4 mr-2 text-secondary" />
                Use Demo Admin Account
              </button>
            </div>
          </div>
        </div>
        
        <p className="mt-8 text-center text-sm text-muted">
          Don't have an account?{' '}
          <a href="/admission" className="font-medium text-primary hover:text-secondary">
            Apply for Admission
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;