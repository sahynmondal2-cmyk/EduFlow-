import { useState } from 'react';
import { courses } from '../data/courses';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

export default function Courses() {
  const [query, setQuery] = useState('');
  const filtered = courses.filter(c => c.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="p-8 max-w-7xl mx-auto min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Explore Courses</h1>
      <div className="mb-8 flex space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-3 text-muted" size={20} />
          <input 
            className="w-full bg-surface border border-white/10 rounded-lg py-2 pl-10 pr-4 text-white"
            placeholder="Search courses..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map(c => (
          <div key={c.id} className="bg-surface rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition">
            <img src={c.image} alt={c.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <span className="text-xs text-primary font-bold uppercase tracking-wider">{c.category}</span>
              <h3 className="text-xl font-bold mt-2 mb-2">{c.title}</h3>
              <p className="text-muted text-sm mb-4 line-clamp-2">{c.description}</p>
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10">
                <span className="font-bold text-accent">{c.price}</span>
                <Link to={`/courses/${c.id}`} className="text-primary hover:text-white transition">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}