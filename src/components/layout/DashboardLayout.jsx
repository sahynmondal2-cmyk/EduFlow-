import { Outlet, Navigate } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';
import { useAppContext } from '../../context/AppContext';

export default function DashboardLayout({ role }) {
  const { user } = useAppContext();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Mobile sidebar placeholder/hidden on mobile by default in DashboardSidebar */}
      <DashboardSidebar />
      <div className="flex-1 w-full overflow-x-hidden md:ml-64 p-4 md:p-8 mt-16 md:mt-0">
        <Outlet />
      </div>
    </div>
  );
}
