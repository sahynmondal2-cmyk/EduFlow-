import React from 'react';
import { motion } from 'framer-motion';
import { IndianRupee, Download, CreditCard, Clock, CheckCircle } from 'lucide-react';

const Fees = () => {
  const transactions = [
    { id: 'TXN001', date: '2026-08-01', amount: 15000, purpose: 'Tuition Fee - Fall Semester', status: 'Paid' },
    { id: 'TXN002', date: '2026-07-15', amount: 2500, purpose: 'Library Fee', status: 'Paid' },
    { id: 'TXN003', date: '2026-09-01', amount: 15000, purpose: 'Tuition Fee - Spring Semester', status: 'Pending' },
  ];

  return (
    <div className="p-6 text-text-text">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold mb-2">Fee Management</h1>
        <p className="text-muted">View and manage your fee payments.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gradient-to-br from-primary-[#6366F1] to-secondary-[#8B5CF6] p-6 rounded-xl text-white relative overflow-hidden"
        >
          <div className="relative z-10">
            <p className="text-white/80 mb-1">Total Outstanding</p>
            <h2 className="text-4xl font-bold mb-4 flex items-center">
              <IndianRupee className="w-8 h-8 mr-1" /> 15,000
            </h2>
            <button className="bg-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Pay Now
            </button>
          </div>
          <CreditCard className="absolute -bottom-4 -right-4 w-32 h-32 opacity-20" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-surface p-6 rounded-xl border border-white/10 flex flex-col justify-center"
        >
          <h3 className="text-lg font-semibold mb-4">Payment Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-2 border-b border-white/10">
              <span className="text-muted">Total Paid (This Year)</span>
              <span className="font-semibold text-accent">₹17,500</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-white/10">
              <span className="text-muted">Next Due Date</span>
              <span className="font-semibold text-yellow-500">Sept 1, 2026</span>
            </div>
          </div>
        </motion.div>
      </div>

      <h2 className="text-xl font-bold mb-4">Transaction History</h2>
      <div className="bg-surface rounded-xl border border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-white/5/50 text-muted text-sm">
              <tr>
                <th className="p-4 font-medium">Transaction ID</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Purpose</th>
                <th className="p-4 font-medium">Amount</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {transactions.map((txn, idx) => (
                <motion.tr 
                  key={txn.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="hover:bg-white/5/20 transition-colors"
                >
                  <td className="p-4 font-mono text-sm text-white/80">{txn.id}</td>
                  <td className="p-4">{new Date(txn.date).toLocaleDateString()}</td>
                  <td className="p-4 text-white/80">{txn.purpose}</td>
                  <td className="p-4 font-semibold">₹{txn.amount.toLocaleString()}</td>
                  <td className="p-4">
                    <span className={`flex items-center space-x-1 text-sm ${
                      txn.status === 'Paid' ? 'text-green-400' : 'text-yellow-400'
                    }`}>
                      {txn.status === 'Paid' ? <CheckCircle className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                      <span>{txn.status}</span>
                    </span>
                  </td>
                  <td className="p-4">
                    {txn.status === 'Paid' ? (
                      <button className="flex items-center space-x-2 text-primary hover:text-white transition-colors">
                        <Download className="w-4 h-4" />
                        <span className="text-sm">Receipt</span>
                      </button>
                    ) : (
                      <button className="bg-primary/20 text-primary hover:bg-primary hover:text-white px-3 py-1 rounded transition-colors text-sm">
                        Pay
                      </button>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Fees;