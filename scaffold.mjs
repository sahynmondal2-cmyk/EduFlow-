import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dirs = [
  'public/images',
  'src/assets',
  'src/components/layout',
  'src/components/common',
  'src/components/courses',
  'src/components/faculty',
  'src/components/students',
  'src/components/admissions',
  'src/components/dashboard',
  'src/pages/admin',
  'src/data',
  'src/context',
  'src/hooks',
  'src/utils',
];

dirs.forEach(dir => {
  fs.mkdirSync(path.join(__dirname, dir), { recursive: true });
});

const files = {
  'src/index.css': `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-[#080B14] text-[#F8FAFC] antialiased;
  }
}

.glass {
  @apply bg-[#111625]/80 backdrop-blur-md border border-white/10;
}
`,
  'tailwind.config.js': `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#080B14',
        surface: '#111625',
        primary: '#6366F1',
        secondary: '#8B5CF6',
        accent: '#22D3EE',
        text: '#F8FAFC',
        muted: '#94A3B8',
      }
    },
  },
  plugins: [],
}
`,
  'src/main.jsx': `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './context/AppContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
)
`,
  'src/App.jsx': `import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import Faculty from './pages/Faculty';
import FacultyDetails from './pages/FacultyDetails';
import Batches from './pages/Batches';
import Schedule from './pages/Schedule';
import Results from './pages/Results';
import Notices from './pages/Notices';
import Admission from './pages/Admission';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

import StudentDashboard from './pages/StudentDashboard';
import Profile from './pages/Profile';
import Assignments from './pages/Assignments';
import Attendance from './pages/Attendance';
import Fees from './pages/Fees';

import AdminDashboard from './pages/admin/AdminDashboard';
import Students from './pages/admin/Students';
import AdminCourses from './pages/admin/Courses';
import AdminBatches from './pages/admin/Batches';
import Admissions from './pages/admin/Admissions';
import Analytics from './pages/admin/Analytics';

import { useAppContext } from './context/AppContext';

function ProtectedRoute({ children, role }) {
  const { user } = useAppContext();
  if (!user) return <Navigate to="/login" />;
  if (role && user.role !== role) return <Navigate to="/" />;
  return children;
}

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Public */}
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/faculty/:id" element={<FacultyDetails />} />
            <Route path="/batches" element={<Batches />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/results" element={<Results />} />
            <Route path="/notices" element={<Notices />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />

            {/* Student */}
            <Route path="/student-dashboard" element={<ProtectedRoute role="student"><StudentDashboard /></ProtectedRoute>} />
            <Route path="/student/profile" element={<ProtectedRoute role="student"><Profile /></ProtectedRoute>} />
            <Route path="/student/assignments" element={<ProtectedRoute role="student"><Assignments /></ProtectedRoute>} />
            <Route path="/student/attendance" element={<ProtectedRoute role="student"><Attendance /></ProtectedRoute>} />
            <Route path="/student/fees" element={<ProtectedRoute role="student"><Fees /></ProtectedRoute>} />
            
            {/* Admin */}
            <Route path="/admin" element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>} />
            <Route path="/admin/students" element={<ProtectedRoute role="admin"><Students /></ProtectedRoute>} />
            <Route path="/admin/courses" element={<ProtectedRoute role="admin"><AdminCourses /></ProtectedRoute>} />
            <Route path="/admin/batches" element={<ProtectedRoute role="admin"><AdminBatches /></ProtectedRoute>} />
            <Route path="/admin/admissions" element={<ProtectedRoute role="admin"><Admissions /></ProtectedRoute>} />
            <Route path="/admin/analytics" element={<ProtectedRoute role="admin"><Analytics /></ProtectedRoute>} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
`,
  'src/context/AppContext.jsx': `import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const savedUser = localStorage.getItem('eduflow_user');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('eduflow_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('eduflow_user');
  };

  return (
    <AppContext.Provider value={{ user, login, logout }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
`,
  'src/components/layout/Navbar.jsx': `import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

export default function Navbar() {
  const { user, logout } = useAppContext();
  const navigate = useNavigate();

  return (
    <nav className="glass sticky top-0 z-50 p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-white">Edu<span className="text-primary">Flow</span></Link>
      <div className="space-x-4 hidden md:flex items-center">
        <Link to="/courses" className="hover:text-primary transition">Courses</Link>
        <Link to="/faculty" className="hover:text-primary transition">Faculty</Link>
        <Link to="/batches" className="hover:text-primary transition">Batches</Link>
        <Link to="/notices" className="hover:text-primary transition">Notices</Link>
        
        {user ? (
          <>
            <Link to={user.role === 'admin' ? '/admin' : '/student-dashboard'} className="hover:text-primary">Dashboard</Link>
            <button onClick={() => { logout(); navigate('/'); }} className="bg-red-500/10 text-red-500 px-4 py-2 rounded-lg hover:bg-red-500/20">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-primary transition">Login</Link>
            <Link to="/admission" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition">Enroll Now</Link>
          </>
        )}
      </div>
    </nav>
  )
}
`,
  'src/components/layout/Footer.jsx': `export default function Footer() {
  return (
    <footer className="bg-surface p-8 mt-12 border-t border-white/10 text-center text-muted">
      <p>&copy; 2026 EduFlow. All rights reserved.</p>
    </footer>
  )
}
`
};

const pages = [
  'Home', 'Courses', 'CourseDetails', 'Faculty', 'FacultyDetails', 
  'Batches', 'Schedule', 'Results', 'Notices', 'Admission', 
  'Contact', 'About', 'Login', 'NotFound',
  'StudentDashboard', 'Profile', 'Assignments', 'Attendance', 'Fees'
];

const adminPages = [
  'AdminDashboard', 'Students', 'Courses', 'Batches', 'Admissions', 'Analytics'
];

pages.forEach(p => {
  files[`src/pages/${p}.jsx`] = `export default function ${p}() {
  return <div className="p-8 text-center"><h1 className="text-3xl font-bold">${p} Page</h1></div>;
}`;
});

adminPages.forEach(p => {
  files[`src/pages/admin/${p}.jsx`] = `export default function ${p}() {
  return <div className="p-8 text-center"><h1 className="text-3xl font-bold">Admin ${p} Page</h1></div>;
}`;
});

for (const [filepath, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(__dirname, filepath), content);
}

console.log('Scaffolding complete!');
