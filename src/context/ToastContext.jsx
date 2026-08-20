import { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'info') => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 3000);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-2 pointer-events-none">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 50, scale: 0.3 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
              className={`flex items-center p-4 mb-4 text-white rounded-lg shadow-lg ${
                toast.type === 'success' ? 'bg-green-600' :
                toast.type === 'error' ? 'bg-red-600' :
                'bg-blue-600'
              } pointer-events-auto`}
            >
              {toast.type === 'success' && <CheckCircle className="w-5 h-5 mr-3" />}
              {toast.type === 'error' && <AlertCircle className="w-5 h-5 mr-3" />}
              {toast.type === 'info' && <Info className="w-5 h-5 mr-3" />}
              <div className="font-medium">{toast.message}</div>
              <button
                onClick={() => removeToast(toast.id)}
                className="ml-4 text-white/80 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
