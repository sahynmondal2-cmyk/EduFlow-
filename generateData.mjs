import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const courses = [
  { id: 'c1', title: 'JEE Advanced Mastery', category: 'Engineering', level: 'Advanced', duration: '12 Months', students: 1200, rating: 4.8, price: '$499', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&q=80', description: 'Comprehensive preparation for JEE Advanced with deep problem solving.', instructor: 'f1' },
  { id: 'c2', title: 'NEET Foundation & Plus', category: 'Medical', level: 'Intermediate', duration: '12 Months', students: 850, rating: 4.9, price: '$449', image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=500&q=80', description: 'Complete biology, physics and chemistry package for NEET aspirants.', instructor: 'f2' },
  { id: 'c3', title: 'Full Stack Web Development', category: 'IT/Software', level: 'Beginner', duration: '6 Months', students: 2300, rating: 4.7, price: '$299', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&q=80', description: 'Learn MERN stack from scratch and build production ready apps.', instructor: 'f3' },
  { id: 'c4', title: 'WBCS Target Batch', category: 'Civil Services', level: 'Intermediate', duration: '18 Months', students: 450, rating: 4.6, price: '$599', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&q=80', description: 'Targeted preparation for West Bengal Civil Services.', instructor: 'f4' },
  { id: 'c5', title: 'SSC CGL Tier 1 & 2', category: 'Government Jobs', level: 'Beginner', duration: '8 Months', students: 3000, rating: 4.5, price: '$199', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&q=80', description: 'Rigorous quantitative and reasoning prep for SSC.', instructor: 'f5' },
  { id: 'c6', title: 'Data Science & Machine Learning', category: 'IT/Software', level: 'Advanced', duration: '9 Months', students: 1100, rating: 4.8, price: '$699', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80', description: 'Master AI, ML and data science with Python and TensorFlow.', instructor: 'f6' },
  { id: 'c7', title: 'UPSC Civil Services Pre + Mains', category: 'Civil Services', level: 'Advanced', duration: '24 Months', students: 200, rating: 4.9, price: '$999', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&q=80', description: 'Intensive UPSC program with test series and answer writing.', instructor: 'f7' },
  { id: 'c8', title: 'Banking PO & Clerk', category: 'Government Jobs', level: 'Intermediate', duration: '6 Months', students: 1500, rating: 4.6, price: '$149', image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&q=80', description: 'Complete banking exam preparation.', instructor: 'f8' },
  { id: 'c9', title: 'Digital Marketing Masterclass', category: 'Marketing', level: 'Beginner', duration: '3 Months', students: 900, rating: 4.7, price: '$199', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80', description: 'Learn SEO, SEM, Social Media and Email marketing.', instructor: 'f9' },
  { id: 'c10', title: 'IELTS/TOEFL Prep', category: 'Language', level: 'Beginner', duration: '2 Months', students: 1800, rating: 4.9, price: '$129', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&q=80', description: 'Score band 8+ with our proven strategies.', instructor: 'f10' },
  { id: 'c11', title: 'CAT & MBA Entrance', category: 'Management', level: 'Advanced', duration: '12 Months', students: 600, rating: 4.7, price: '$399', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&q=80', description: 'Crack CAT with top percentiles.', instructor: 'f1' },
  { id: 'c12', title: 'Cloud Computing AWS/Azure', category: 'IT/Software', level: 'Intermediate', duration: '4 Months', students: 750, rating: 4.8, price: '$349', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&q=80', description: 'Get certified in AWS and Azure.', instructor: 'f3' },
  { id: 'c13', title: 'Cybersecurity Fundamentals', category: 'IT/Software', level: 'Beginner', duration: '5 Months', students: 400, rating: 4.6, price: '$299', image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=500&q=80', description: 'Learn ethical hacking and network security.', instructor: 'f6' },
  { id: 'c14', title: 'Graphic Design & UI/UX', category: 'Design', level: 'Beginner', duration: '6 Months', students: 1200, rating: 4.8, price: '$249', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&q=80', description: 'Figma, Adobe XD, and design principles.', instructor: 'f9' },
  { id: 'c15', title: 'Financial Accounting & Tally', category: 'Finance', level: 'Beginner', duration: '3 Months', students: 800, rating: 4.5, price: '$99', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80', description: 'Master corporate accounting.', instructor: 'f5' },
];

const faculty = [
  { id: 'f1', name: 'Dr. Ramesh Sen', subject: 'Physics & Mathematics', experience: '15 Years', qualifications: 'Ph.D in Physics, IIT Delhi', rating: 4.9, students: 5000, image: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { id: 'f2', name: 'Dr. Anjali Verma', subject: 'Biology', experience: '12 Years', qualifications: 'MBBS, MD', rating: 4.8, students: 4200, image: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { id: 'f3', name: 'Amitabh Sharma', subject: 'Computer Science', experience: '8 Years', qualifications: 'M.Tech, Ex-Google', rating: 4.7, students: 8000, image: 'https://randomuser.me/api/portraits/men/46.jpg' },
  { id: 'f4', name: 'Priya Das', subject: 'History & Polity', experience: '10 Years', qualifications: 'M.A. History, JNU', rating: 4.9, students: 3000, image: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { id: 'f5', name: 'Sandeep Mahesh', subject: 'Quantitative Aptitude', experience: '14 Years', qualifications: 'MBA, IIM C', rating: 4.6, students: 12000, image: 'https://randomuser.me/api/portraits/men/62.jpg' },
  { id: 'f6', name: 'Vikram Singh', subject: 'Data Science & AI', experience: '7 Years', qualifications: 'M.S. Data Science, Stanford', rating: 4.8, students: 2500, image: 'https://randomuser.me/api/portraits/men/22.jpg' },
  { id: 'f7', name: 'Neha Gupta', subject: 'Geography & Economy', experience: '9 Years', qualifications: 'UPSC Interview Appeared (Twice)', rating: 4.7, students: 1500, image: 'https://randomuser.me/api/portraits/women/33.jpg' },
  { id: 'f8', name: 'Rajeev Kumar', subject: 'Reasoning', experience: '11 Years', qualifications: 'B.Tech, NIT Durgapur', rating: 4.5, students: 9000, image: 'https://randomuser.me/api/portraits/men/11.jpg' },
  { id: 'f9', name: 'Sneha Roy', subject: 'English & Communication', experience: '6 Years', qualifications: 'M.A. English Literature', rating: 4.9, students: 4000, image: 'https://randomuser.me/api/portraits/women/12.jpg' },
  { id: 'f10', name: 'Arun Patel', subject: 'General Knowledge', experience: '13 Years', qualifications: 'M.Sc.', rating: 4.6, students: 6000, image: 'https://randomuser.me/api/portraits/men/9.jpg' },
];

const batches = [
  { id: 'b1', name: 'JEE Titan Batch', courseId: 'c1', startDate: '2026-09-01', timing: '09:00 AM - 12:00 PM', days: 'Mon, Wed, Fri', facultyId: 'f1', seats: 50, enrolled: 45, mode: 'Hybrid' },
  { id: 'b2', name: 'NEET Achievers', courseId: 'c2', startDate: '2026-09-15', timing: '02:00 PM - 05:00 PM', days: 'Tue, Thu, Sat', facultyId: 'f2', seats: 60, enrolled: 60, mode: 'Offline' },
  { id: 'b3', name: 'MERN Stack Weekend', courseId: 'c3', startDate: '2026-08-25', timing: '10:00 AM - 04:00 PM', days: 'Sat, Sun', facultyId: 'f3', seats: 100, enrolled: 80, mode: 'Online' },
  { id: 'b4', name: 'WBCS Foundation', courseId: 'c4', startDate: '2026-10-01', timing: '06:00 PM - 08:30 PM', days: 'Mon, Wed, Fri', facultyId: 'f4', seats: 40, enrolled: 12, mode: 'Online' },
  { id: 'b5', name: 'SSC Target Morning', courseId: 'c5', startDate: '2026-09-10', timing: '07:30 AM - 09:30 AM', days: 'Mon to Fri', facultyId: 'f5', seats: 120, enrolled: 110, mode: 'Online' },
  { id: 'b6', name: 'DS & ML Evening', courseId: 'c6', startDate: '2026-09-05', timing: '08:00 PM - 10:00 PM', days: 'Tue, Thu, Sat', facultyId: 'f6', seats: 50, enrolled: 30, mode: 'Online' },
  { id: 'b7', name: 'UPSC Super 50', courseId: 'c7', startDate: '2026-10-15', timing: '10:00 AM - 04:00 PM', days: 'Mon to Sat', facultyId: 'f7', seats: 50, enrolled: 48, mode: 'Offline' },
  { id: 'b8', name: 'Bank PO Express', courseId: 'c8', startDate: '2026-09-20', timing: '04:00 PM - 06:00 PM', days: 'Mon, Wed, Fri', facultyId: 'f8', seats: 80, enrolled: 75, mode: 'Hybrid' },
];

const notices = [
  { id: 'n1', title: 'Holiday Declaration: Diwali', date: '2026-10-25', category: 'Holiday', description: 'The institute will remain closed from Oct 30 to Nov 2 for Diwali.' },
  { id: 'n2', title: 'Mid-term Mock Tests Schedule', date: '2026-08-22', category: 'Exam', description: 'Mock tests for JEE and NEET batches will commence from next week.' },
  { id: 'n3', title: 'New Batch Announcement: Web Dev', date: '2026-08-20', category: 'General', description: 'Registrations are open for the upcoming MERN stack bootcamp.' },
  { id: 'n4', title: 'Assignment Submission Deadline', date: '2026-08-18', category: 'Assignment', description: 'All pending React assignments must be submitted by Friday.' },
  { id: 'n5', title: 'Guest Lecture by Industry Expert', date: '2026-08-15', category: 'Important', description: 'Join us for a seminar on AI in Medicine on coming Saturday.' },
  { id: 'n6', title: 'Fee Payment Reminder', date: '2026-08-10', category: 'General', description: 'Second installment of fees is due by the end of this month.' },
  { id: 'n7', title: 'SSC CGL Result Celebrations', date: '2026-08-05', category: 'General', description: 'Congratulations to our 50+ students who cleared SSC CGL Tier 1.' },
  { id: 'n8', title: 'Library Renovation', date: '2026-08-01', category: 'Important', description: 'The offline library will be closed for 3 days for renovation.' },
];

const assignments = [
  { id: 'a1', title: 'Physics Kinematics Problem Set', courseId: 'c1', dueDate: '2026-08-25', status: 'Pending', score: null },
  { id: 'a2', title: 'Biology Cell Structure Test', courseId: 'c2', dueDate: '2026-08-20', status: 'Submitted', score: null },
  { id: 'a3', title: 'React UI Component Building', courseId: 'c3', dueDate: '2026-08-15', status: 'Graded', score: 95 },
  { id: 'a4', title: 'Indian History Essay', courseId: 'c4', dueDate: '2026-08-10', status: 'Graded', score: 88 },
  { id: 'a5', title: 'Math Speed Test 1', courseId: 'c5', dueDate: '2026-08-05', status: 'Graded', score: 92 },
  { id: 'a6', title: 'Python Data Analysis Project', courseId: 'c6', dueDate: '2026-08-30', status: 'Pending', score: null },
  { id: 'a7', title: 'Ethics Case Study', courseId: 'c7', dueDate: '2026-08-28', status: 'Pending', score: null },
  { id: 'a8', title: 'Reasoning Puzzle Set 5', courseId: 'c8', dueDate: '2026-08-22', status: 'Pending', score: null },
  { id: 'a9', title: 'Digital Marketing Campaign Plan', courseId: 'c9', dueDate: '2026-08-26', status: 'Pending', score: null },
  { id: 'a10', title: 'IELTS Mock Writing Task 2', courseId: 'c10', dueDate: '2026-08-24', status: 'Pending', score: null },
];

const students = [
  { id: 's1', name: 'Alex Johnson', email: 'alex@demo.com', phone: '9876543210', courseId: 'c3', batchId: 'b3', attendance: 92, performance: 87, status: 'Active' },
  { id: 's2', name: 'Maria Garcia', email: 'maria@example.com', phone: '9876543211', courseId: 'c1', batchId: 'b1', attendance: 88, performance: 95, status: 'Active' },
  { id: 's3', name: 'Rahul Sharma', email: 'rahul@example.com', phone: '9876543212', courseId: 'c2', batchId: 'b2', attendance: 95, performance: 91, status: 'Active' },
  { id: 's4', name: 'Priya Patel', email: 'priya@example.com', phone: '9876543213', courseId: 'c3', batchId: 'b3', attendance: 85, performance: 82, status: 'Active' },
  { id: 's5', name: 'David Smith', email: 'david@example.com', phone: '9876543214', courseId: 'c4', batchId: 'b4', attendance: 75, performance: 78, status: 'Warning' },
  { id: 's6', name: 'Anita Roy', email: 'anita@example.com', phone: '9876543215', courseId: 'c5', batchId: 'b5', attendance: 98, performance: 96, status: 'Active' },
];

const writeDataFile = (filename, varName, data) => {
  const content = `export const ${varName} = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(path.join(__dirname, 'src/data', filename), content);
};

writeDataFile('courses.js', 'courses', courses);
writeDataFile('faculty.js', 'faculty', faculty);
writeDataFile('batches.js', 'batches', batches);
writeDataFile('notices.js', 'notices', notices);
writeDataFile('assignments.js', 'assignments', assignments);
writeDataFile('students.js', 'students', students);

console.log('Mock data generated successfully!');
