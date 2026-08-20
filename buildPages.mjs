import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pages = {
  'Courses.jsx': `import { useState } from 'react';
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
                <Link to={\`/courses/\${c.id}\`} className="text-primary hover:text-white transition">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`,
  'CourseDetails.jsx': `import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { faculty } from '../data/faculty';

export default function CourseDetails() {
  const { id } = useParams();
  const course = courses.find(c => c.id === id);
  
  if (!course) return <div className="p-8 text-center text-white">Course not found</div>;
  const instructor = faculty.find(f => f.id === course.instructor);

  return (
    <div className="min-h-screen">
      <div className="h-64 md:h-96 w-full relative">
        <img src={course.image} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80 flex items-center p-8">
          <div className="max-w-4xl">
            <span className="text-primary uppercase tracking-widest text-sm font-bold">{course.category}</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-2 mb-4">{course.title}</h1>
            <p className="text-xl text-muted mb-6">{course.description}</p>
            <Link to="/admission" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-bold text-lg">Enroll Now - {course.price}</Link>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto p-8 flex flex-col md:flex-row gap-12">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Curriculum</h2>
          <div className="space-y-4">
            {['Module 1: Introduction', 'Module 2: Core Concepts', 'Module 3: Advanced Topics'].map(m => (
              <div key={m} className="bg-surface p-4 rounded-lg border border-white/10">{m}</div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-80">
          <h2 className="text-2xl font-bold mb-4">Instructor</h2>
          {instructor && (
            <div className="bg-surface p-6 rounded-2xl border border-white/10 text-center">
              <img src={instructor.image} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-bold text-white">{instructor.name}</h3>
              <p className="text-muted">{instructor.qualifications}</p>
              <Link to={\`/faculty/\${instructor.id}\`} className="text-primary mt-4 inline-block hover:underline">View Profile</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}`,
  'Batches.jsx': `import { batches } from '../data/batches';
import { courses } from '../data/courses';
import { faculty } from '../data/faculty';

export default function Batches() {
  return (
    <div className="p-8 max-w-7xl mx-auto min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-white">Upcoming Batches</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {batches.map(b => {
          const course = courses.find(c => c.id === b.courseId);
          const fac = faculty.find(f => f.id === b.facultyId);
          const isFull = b.enrolled >= b.seats;
          
          return (
            <div key={b.id} className="bg-surface p-6 rounded-2xl border border-white/10">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">{b.name}</h3>
                <span className={\`px-3 py-1 rounded-full text-xs font-bold \${isFull ? 'bg-red-500/20 text-red-500' : 'bg-green-500/20 text-green-500'}\`}>
                  {isFull ? 'Full' : \`\${b.seats - b.enrolled} Seats Left\`}
                </span>
              </div>
              <div className="text-sm text-muted space-y-2 mb-4">
                <p><strong>Course:</strong> {course?.title}</p>
                <p><strong>Faculty:</strong> {fac?.name}</p>
                <p><strong>Starts:</strong> {b.startDate}</p>
                <p><strong>Timing:</strong> {b.timing} ({b.days})</p>
                <p><strong>Mode:</strong> {b.mode}</p>
              </div>
              <button disabled={isFull} className={\`w-full py-2 rounded-lg font-bold transition \${isFull ? 'bg-white/5 text-white/20 cursor-not-allowed' : 'bg-primary/20 text-primary hover:bg-primary/30'}\`}>
                {isFull ? 'No Seats Available' : 'Apply for Batch'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}`,
  'Schedule.jsx': `export default function Schedule() {
  return (
    <div className="p-8 max-w-7xl mx-auto min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-8">Timetable</h1>
      <div className="bg-surface p-8 rounded-2xl border border-white/10 flex items-center justify-center min-h-[400px]">
        <p className="text-muted text-xl">Interactive Schedule Calendar will be displayed here.</p>
      </div>
    </div>
  );
}`,
};

for (const [filename, content] of Object.entries(pages)) {
  fs.writeFileSync(path.join(__dirname, 'src/pages', filename), content);
}

console.log('Missing pages built successfully.');
