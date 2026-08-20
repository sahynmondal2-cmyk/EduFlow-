import { useState, useEffect } from 'react';
import { Search, X, Book, Users, Calendar, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { courses } from '../../data/courses';
import { faculty } from '../../data/faculty';
import { batches } from '../../data/batches';
import { notices } from '../../data/notices';

export default function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isOpen) return null;

  const lowerQuery = query.toLowerCase();
  
  const filteredCourses = query ? courses.filter(c => c.title.toLowerCase().includes(lowerQuery) || c.category.toLowerCase().includes(lowerQuery)).slice(0, 3) : [];
  const filteredFaculty = query ? faculty.filter(f => f.name.toLowerCase().includes(lowerQuery) || f.subject.toLowerCase().includes(lowerQuery)).slice(0, 3) : [];
  const filteredBatches = query ? batches.filter(b => b.name.toLowerCase().includes(lowerQuery)).slice(0, 3) : [];
  const filteredNotices = query ? notices.filter(n => n.title.toLowerCase().includes(lowerQuery)).slice(0, 3) : [];

  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false);
    setQuery('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-24 bg-background/80 backdrop-blur-sm p-4">
      <div className="w-full max-w-2xl bg-surface border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center px-4 py-4 border-b border-white/10">
          <Search className="text-muted w-5 h-5 mr-3" />
          <input
            type="text"
            className="flex-1 bg-transparent border-none text-white focus:ring-0 placeholder-muted text-lg outline-none"
            placeholder="Search courses, faculty, batches..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <button onClick={() => setIsOpen(false)} className="text-muted hover:text-white transition p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-2">
          {!query && (
            <div className="p-8 text-center text-muted">
              <p>Type to search across the platform</p>
            </div>
          )}

          {query && filteredCourses.length === 0 && filteredFaculty.length === 0 && filteredBatches.length === 0 && filteredNotices.length === 0 && (
            <div className="p-8 text-center text-muted">
              <p>No results found for "{query}"</p>
            </div>
          )}

          {filteredCourses.length > 0 && (
            <div className="mb-4">
              <h3 className="px-3 text-xs font-semibold text-muted uppercase tracking-wider mb-2">Courses</h3>
              {filteredCourses.map(course => (
                <button
                  key={course.id}
                  onClick={() => handleNavigate(`/courses/${course.id}`)}
                  className="w-full text-left px-3 py-2 flex items-center space-x-3 rounded-lg hover:bg-white/5 transition"
                >
                  <Book className="w-4 h-4 text-primary" />
                  <div>
                    <div className="text-sm font-medium text-white">{course.title}</div>
                    <div className="text-xs text-muted">{course.category}</div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {filteredFaculty.length > 0 && (
            <div className="mb-4">
              <h3 className="px-3 text-xs font-semibold text-muted uppercase tracking-wider mb-2">Faculty</h3>
              {filteredFaculty.map(f => (
                <button
                  key={f.id}
                  onClick={() => handleNavigate(`/faculty/${f.id}`)}
                  className="w-full text-left px-3 py-2 flex items-center space-x-3 rounded-lg hover:bg-white/5 transition"
                >
                  <Users className="w-4 h-4 text-secondary" />
                  <div>
                    <div className="text-sm font-medium text-white">{f.name}</div>
                    <div className="text-xs text-muted">{f.subject}</div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {filteredBatches.length > 0 && (
            <div className="mb-4">
              <h3 className="px-3 text-xs font-semibold text-muted uppercase tracking-wider mb-2">Batches</h3>
              {filteredBatches.map(b => (
                <button
                  key={b.id}
                  onClick={() => handleNavigate('/batches')}
                  className="w-full text-left px-3 py-2 flex items-center space-x-3 rounded-lg hover:bg-white/5 transition"
                >
                  <Calendar className="w-4 h-4 text-accent" />
                  <div>
                    <div className="text-sm font-medium text-white">{b.name}</div>
                    <div className="text-xs text-muted">Starts: {b.startDate}</div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {filteredNotices.length > 0 && (
            <div className="mb-4">
              <h3 className="px-3 text-xs font-semibold text-muted uppercase tracking-wider mb-2">Notices</h3>
              {filteredNotices.map(n => (
                <button
                  key={n.id}
                  onClick={() => handleNavigate('/notices')}
                  className="w-full text-left px-3 py-2 flex items-center space-x-3 rounded-lg hover:bg-white/5 transition"
                >
                  <Bell className="w-4 h-4 text-yellow-500" />
                  <div>
                    <div className="text-sm font-medium text-white">{n.title}</div>
                    <div className="text-xs text-muted">{n.category}</div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
