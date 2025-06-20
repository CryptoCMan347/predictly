import React from 'react';

interface Transaction {
  id: string;
  amount: number;
  credits: number;
  paymentType: string;
  status: string;
  createdAt: string;
}

interface PurchaseHistoryProps {
  transactions: Transaction[];
  loading: boolean;
  error: string;
}

const PurchaseHistory: React.FC<PurchaseHistoryProps> = ({ transactions, loading, error }) => {
  if (loading) return <div>Loading transaction history...</div>;
  if (error) return <div className="text-red-400">{error}</div>;
  if (transactions.length === 0) return <div>No transactions yet.</div>;

  return (
    <div className="bg-gray-900 rounded-lg p-4">
      <ul className="space-y-2">
        {transactions.map(tx => (
          <li key={tx.id} className="bg-gray-800 rounded p-3 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <div className="font-mono text-green-300">+{tx.credits} credits</div>
              <div className="text-gray-400 text-xs">${tx.amount.toFixed(2)} via {tx.paymentType} ({tx.status})</div>
            </div>
            <div className="text-gray-400 text-xs mt-1 md:mt-0">{new Date(tx.createdAt).toLocaleString()}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PurchaseHistory; 