import { useParams, Link } from 'react-router-dom';
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
              <Link to={`/faculty/${instructor.id}`} className="text-primary mt-4 inline-block hover:underline">View Profile</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}