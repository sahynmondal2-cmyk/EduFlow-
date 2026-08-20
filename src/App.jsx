import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PublicLayout from './components/layout/PublicLayout';
import DashboardLayout from './components/layout/DashboardLayout';

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

import GlobalSearch from './components/common/GlobalSearch';

function ProtectedRoute({ children, role }) {
  const { user } = useAppContext();
  if (!user) return <Navigate to="/login" replace />;
  if (role && user.role !== role) return <Navigate to="/" replace />;
  return children;
}

function App() {
  return (
    <BrowserRouter>
      <GlobalSearch />
      <Routes>
        {/* Public Routes with Navbar & Footer */}
        <Route element={<PublicLayout />}>
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
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Student Dashboard Routes without Navbar/Footer */}
        <Route element={<DashboardLayout role="student" />}>
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/student/profile" element={<Profile />} />
          <Route path="/student/assignments" element={<Assignments />} />
          <Route path="/student/attendance" element={<Attendance />} />
          <Route path="/student/fees" element={<Fees />} />
          <Route path="/student/results" element={<Results />} />
        </Route>
        
        {/* Admin Dashboard Routes without Navbar/Footer */}
        <Route path="/admin" element={<DashboardLayout role="admin" />}>
          <Route index element={<AdminDashboard />} />
          <Route path="students" element={<Students />} />
          <Route path="courses" element={<AdminCourses />} />
          <Route path="batches" element={<AdminBatches />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
