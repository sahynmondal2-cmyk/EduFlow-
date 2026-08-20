import { batches } from '../data/batches';
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
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${isFull ? 'bg-red-500/20 text-red-500' : 'bg-green-500/20 text-green-500'}`}>
                  {isFull ? 'Full' : `${b.seats - b.enrolled} Seats Left`}
                </span>
              </div>
              <div className="text-sm text-muted space-y-2 mb-4">
                <p><strong>Course:</strong> {course?.title}</p>
                <p><strong>Faculty:</strong> {fac?.name}</p>
                <p><strong>Starts:</strong> {b.startDate}</p>
                <p><strong>Timing:</strong> {b.timing} ({b.days})</p>
                <p><strong>Mode:</strong> {b.mode}</p>
              </div>
              <button disabled={isFull} className={`w-full py-2 rounded-lg font-bold transition ${isFull ? 'bg-white/5 text-white/20 cursor-not-allowed' : 'bg-primary/20 text-primary hover:bg-primary/30'}`}>
                {isFull ? 'No Seats Available' : 'Apply for Batch'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}