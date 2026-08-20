import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, ChevronRight, ChevronLeft, User, BookOpen, GraduationCap, FileCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Admission = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    course: '',
    mode: '',
    previousSchool: '',
    grade: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem('admissionData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
    localStorage.setItem('admissionData', JSON.stringify(newFormData));
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const validateStep = (currentStep) => {
    if (currentStep === 1) {
      return formData.firstName && formData.lastName && formData.email && formData.phone;
    }
    if (currentStep === 2) {
      return formData.course && formData.mode;
    }
    if (currentStep === 3) {
      return formData.previousSchool && formData.grade;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(3)) {
      setIsSubmitted(true);
      localStorage.removeItem('admissionData');
    }
  };

  const steps = [
    { number: 1, title: 'Personal', icon: User },
    { number: 2, title: 'Course', icon: BookOpen },
    { number: 3, title: 'Academic', icon: GraduationCap },
    { number: 4, title: 'Confirm', icon: FileCheck },
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background text-text py-20 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-surface p-8 rounded-2xl max-w-md w-full text-center border border-white/5"
        >
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Application Submitted!</h2>
          <p className="text-muted mb-8">
            Thank you for applying to EduFlow. We have received your application and will contact you shortly.
          </p>
          <button
            onClick={() => navigate('/')}
            className="bg-[#6366F1] hover:bg-[#8B5CF6] text-white px-6 py-3 rounded-lg font-medium transition-colors w-full"
          >
            Return to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-text py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Admission Application</h1>
          <p className="text-muted text-center">Join EduFlow and start your journey towards excellence.</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center relative">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-white/10 z-0"></div>
            <div 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-[#6366F1] z-0 transition-all duration-300"
              style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
            ></div>
            
            {steps.map((s) => (
              <div key={s.number} className="relative z-10 flex flex-col items-center">
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors duration-300 ${
                    step >= s.number 
                      ? 'bg-[#6366F1] border-primary text-white' 
                      : 'bg-surface border-white/20 text-muted'
                  }`}
                >
                  <s.icon className="w-5 h-5" />
                </div>
                <span className={`mt-2 text-sm font-medium ${step >= s.number ? 'text-text' : 'text-muted'}`}>
                  {s.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Form Container */}
        <motion.div 
          key={step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-surface rounded-2xl p-6 md:p-8 border border-white/5"
        >
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold mb-6 border-b border-white/10 pb-4">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-muted mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
                    placeholder="Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold mb-6 border-b border-white/10 pb-4">Course Selection</h2>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-muted mb-2">Desired Course</label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
                  >
                    <option value="">Select a course</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Business Administration">Business Administration</option>
                    <option value="Design & Arts">Design & Arts</option>
                    <option value="Engineering">Engineering</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted mb-2">Study Mode</label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className={`cursor-pointer border rounded-lg p-4 flex items-center justify-center transition-colors ${formData.mode === 'Full-time' ? 'border-primary bg-[#6366F1]/10' : 'border-white/10 hover:bg-white/5'}`}>
                      <input type="radio" name="mode" value="Full-time" checked={formData.mode === 'Full-time'} onChange={handleInputChange} className="hidden" />
                      <span>Full-time</span>
                    </label>
                    <label className={`cursor-pointer border rounded-lg p-4 flex items-center justify-center transition-colors ${formData.mode === 'Part-time' ? 'border-primary bg-[#6366F1]/10' : 'border-white/10 hover:bg-white/5'}`}>
                      <input type="radio" name="mode" value="Part-time" checked={formData.mode === 'Part-time'} onChange={handleInputChange} className="hidden" />
                      <span>Part-time</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold mb-6 border-b border-white/10 pb-4">Academic Background</h2>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-muted mb-2">Previous School / Institution</label>
                  <input
                    type="text"
                    name="previousSchool"
                    value={formData.previousSchool}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
                    placeholder="High School Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted mb-2">Latest Grade / GPA</label>
                  <input
                    type="text"
                    name="grade"
                    value={formData.grade}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
                    placeholder="e.g. 3.8 or A"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold mb-6 border-b border-white/10 pb-4">Confirm Details</h2>
              <div className="bg-background p-6 rounded-lg border border-white/5 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="block text-sm text-muted">Name</span>
                    <span className="font-medium">{formData.firstName} {formData.lastName}</span>
                  </div>
                  <div>
                    <span className="block text-sm text-muted">Email</span>
                    <span className="font-medium">{formData.email}</span>
                  </div>
                  <div>
                    <span className="block text-sm text-muted">Phone</span>
                    <span className="font-medium">{formData.phone}</span>
                  </div>
                  <div>
                    <span className="block text-sm text-muted">Course</span>
                    <span className="font-medium">{formData.course} ({formData.mode})</span>
                  </div>
                  <div className="col-span-2">
                    <span className="block text-sm text-muted">Academic Background</span>
                    <span className="font-medium">{formData.previousSchool} - Grade: {formData.grade}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 flex justify-between pt-6 border-t border-white/10">
            <button
              onClick={prevStep}
              disabled={step === 1}
              className={`flex items-center px-6 py-2 rounded-lg font-medium transition-colors ${
                step === 1 
                  ? 'opacity-50 cursor-not-allowed text-muted' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Back
            </button>
            
            {step < 4 ? (
              <button
                onClick={nextStep}
                disabled={!validateStep(step)}
                className={`flex items-center px-6 py-2 rounded-lg font-medium transition-colors ${
                  !validateStep(step)
                    ? 'bg-white/10 text-muted cursor-not-allowed'
                    : 'bg-[#6366F1] hover:bg-[#8B5CF6] text-white'
                }`}
              >
                Next
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="flex items-center px-6 py-2 bg-[#22D3EE] hover:bg-[#06b6d4] text-[#080B14] rounded-lg font-bold transition-colors"
              >
                Submit Application
                <Check className="w-5 h-5 ml-2" />
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Admission;