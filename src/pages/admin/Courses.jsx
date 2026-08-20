import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Edit2, Trash2, X } from 'lucide-react';
import { courses as initialCourses } from '../../data/courses';

const Courses = () => {
  const [courses, setCourses] = useState(initialCourses);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCourse, setNewCourse] = useState({ title: '', instructor: '', duration: '', price: '' });

  const handleAddCourse = (e) => {
    e.preventDefault();
    const courseId = `C${Math.floor(Math.random() * 900) + 100}`;
    setCourses([...courses, { ...newCourse, id: courseId, students: 0 }]);
    setNewCourse({ title: '', instructor: '', duration: '', price: '' });
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 md:p-8 space-y-6 bg-background min-h-screen text-text">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Courses</h1>
          <p className="text-muted mt-1">Manage course catalog</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center space-x-2 bg-[#6366F1] hover:bg-[#4F46E5] px-4 py-2 rounded-lg transition-colors font-medium"
        >
          <Plus className="w-4 h-4" />
          <span>Add Course</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-surface rounded-xl border border-white/10 p-6 flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-xs font-semibold text-primary bg-[#6366F1]/10 px-2 py-1 rounded-full">
                  {course.id}
                </span>
                <h3 className="text-xl font-bold mt-2">{course.title}</h3>
              </div>
              <div className="flex space-x-2">
                <button className="text-muted hover:text-accent transition-colors"><Edit2 className="w-4 h-4" /></button>
                <button className="text-muted hover:text-red-400 transition-colors"><Trash2 className="w-4 h-4" /></button>
              </div>
            </div>
            
            <div className="mt-auto space-y-3 pt-4 border-t border-white/10/50">
              <div className="flex justify-between text-sm">
                <span className="text-muted">Instructor:</span>
                <span className="text-gray-200">{course.instructor}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted">Duration:</span>
                <span className="text-gray-200">{course.duration}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted">Price:</span>
                <span className="text-[#10B981] font-medium">{course.price}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted">Enrolled:</span>
                <span className="text-gray-200">{course.students}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add Course Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-surface border border-white/10 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl"
            >
              <div className="flex justify-between items-center p-6 border-b border-white/10">
                <h2 className="text-xl font-bold">Add New Course</h2>
                <button onClick={() => setIsModalOpen(false)} className="text-muted hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <form onSubmit={handleAddCourse} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-muted mb-1">Course Title</label>
                  <input required type="text" value={newCourse.title} onChange={e => setNewCourse({...newCourse, title: e.target.value})} className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-primary" placeholder="e.g. Advanced React" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted mb-1">Instructor</label>
                  <input required type="text" value={newCourse.instructor} onChange={e => setNewCourse({...newCourse, instructor: e.target.value})} className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-primary" placeholder="Instructor Name" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted mb-1">Duration</label>
                    <input required type="text" value={newCourse.duration} onChange={e => setNewCourse({...newCourse, duration: e.target.value})} className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-primary" placeholder="e.g. 12 Weeks" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted mb-1">Price</label>
                    <input required type="text" value={newCourse.price} onChange={e => setNewCourse({...newCourse, price: e.target.value})} className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-primary" placeholder="e.g. $499" />
                  </div>
                </div>
                <div className="pt-4 flex justify-end space-x-3">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 rounded-lg text-muted hover:text-white hover:bg-white/5 transition-colors">Cancel</button>
                  <button type="submit" className="px-4 py-2 bg-[#6366F1] hover:bg-[#4F46E5] text-white rounded-lg transition-colors">Create Course</button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Courses;