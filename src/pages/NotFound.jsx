import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-8 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
          Page Not Found
        </h2>
        <p className="text-muted mb-8 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center space-x-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl transition-all font-medium"
        >
          <Home className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>
      </motion.div>
    </div>
  );
}