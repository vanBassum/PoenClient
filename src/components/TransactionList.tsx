import React, { useEffect, useState } from 'react';
import TransactionCard from './TransactionCard'; // Import the TransactionCard component
import WebApi, { Transaction } from './api/WebApi';

function TransactionList() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    WebApi.Transactions.transactionGetAll()
      .then((response) => {
        console.log('API call successful:', response);
        setTransactions(response.data || []);
      })
      .catch((error) => {
        console.error('API call failed:', error);
      });
  }, []);

  return (
    <div>



        {transactions.length > 0 ? (
          transactions.map((transaction) => (
            <TransactionCard transaction={transaction} />
          ))
        ) : (
          <p>No transactions available.</p>
        )}


    </div>
  );
}

export default TransactionList;
