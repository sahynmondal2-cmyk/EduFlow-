import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import { 
  LayoutDashboard, BookOpen, Calendar, ClipboardList, 
  UserCheck, LineChart, CreditCard, Bell, User, LogOut,
  Users, Layers, GraduationCap, BarChart3, Settings, Menu, X
} from 'lucide-react';

export default function DashboardSidebar() {
  const { user, logout } = useAppContext();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const studentLinks = [
    { name: 'Overview', path: '/student-dashboard', icon: LayoutDashboard },
    { name: 'Assignments', path: '/student/assignments', icon: ClipboardList },
    { name: 'Attendance', path: '/student/attendance', icon: UserCheck },
    { name: 'Results', path: '/student/results', icon: LineChart },
    { name: 'Fees', path: '/student/fees', icon: CreditCard },
    { name: 'Profile', path: '/student/profile', icon: User },
  ];

  const adminLinks = [
    { name: 'Overview', path: '/admin', icon: LayoutDashboard },
    { name: 'Students', path: '/admin/students', icon: Users },
    { name: 'Courses', path: '/admin/courses', icon: Layers },
    { name: 'Batches', path: '/admin/batches', icon: BookOpen },
    { name: 'Admissions', path: '/admin/admissions', icon: GraduationCap },
    { name: 'Analytics', path: '/admin/analytics', icon: BarChart3 },
  ];

  const links = user?.role === 'admin' ? adminLinks : studentLinks;

  return (
    <>
      {/* Mobile Topbar */}
      <div className="md:hidden fixed top-0 left-0 w-full h-16 bg-surface border-b border-white/10 z-40 flex items-center justify-between px-4">
        <h2 className="text-xl font-bold text-white">Edu<span className="text-primary">Flow</span></h2>
        <button onClick={() => setIsOpen(!isOpen)} className="text-text hover:text-primary">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-screen w-64 bg-surface border-r border-white/10 p-4 flex flex-col z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="mb-8 px-4 hidden md:block">
          <h2 className="text-xl font-bold text-white">Edu<span className="text-primary">Flow</span> Portal</h2>
        </div>
        
        <nav className="flex-1 space-y-2 mt-16 md:mt-0 overflow-y-auto">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${isActive ? 'bg-primary/10 text-primary' : 'text-muted hover:bg-white/5 hover:text-white'}`}
              >
                <Icon size={20} />
                <span className="font-medium">{link.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto pt-4 border-t border-white/10">
          <button
            onClick={logout}
            className="flex items-center space-x-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 w-full transition-all"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
