import React, { useEffect, useState } from 'react';
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

    <div className="card widget-card border-light shadow-sm">
      <div className="card-body p-4">
        <h5 className="card-title widget-card-title mb-4">Transactions</h5>
        <div className="table-responsive">
          <table className="table table-borderless bsb-table-xl text-nowrap align-middle m-0">
            <thead>
              <tr>
                <th>From</th>
                <th>To</th>
                <th>Value</th>
                <th>Gain</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.length > 0 ? (
                transactions.map((transaction) => {
                  const paid = transaction.paid ?? 0;
                  const received = transaction.received ?? 0;
                  const value = transaction.lastKnownValue ?? 0;

                  // Calculate absolute gain and percentage gain
                  const absoluteGain = value - paid;
                  const percentageGain = paid > 0 ? ((absoluteGain / paid) * 100).toFixed(2) : 'N/A';

                  return (
                    <tr key={transaction.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="fs-6 bsb-w-35 bsb-h-35 text-bg-primary rounded-circle d-flex align-items-center justify-content-center me-2">
                            <i className="bi bi-arrow-right"></i>
                          </span>
                          <div>
                            <h6 className="m-0">{transaction.fromToken?.name || 'Unknown'}</h6>
                            <span className="text-secondary fs-7">{paid ? `${paid}` : 'N/A'} {transaction.fromToken?.symbol}</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="fs-6 bsb-w-35 bsb-h-35 text-bg-success rounded-circle d-flex align-items-center justify-content-center me-2">
                            <i className="bi bi-arrow-left"></i>
                          </span>
                          <div>
                            <h6 className="m-0">{transaction.toToken?.name || 'Unknown'}</h6>
                            <span className="text-secondary fs-7">{received ? `${received}` : 'N/A'} {transaction.toToken?.symbol}</span>
                          </div>
                        </div>
                      </td>
                      <td>{transaction.lastKnownValue !== null ? `$${transaction.lastKnownValue}` : 'N/A'}</td>
                      <td>
                        {absoluteGain !== 0 ? (
                          <>
                            <span className={`text-${absoluteGain > 0 ? 'success' : 'danger'}`}>
                              {absoluteGain > 0 ? '+' : ''}${absoluteGain.toFixed(2)}
                            </span>
                            <br />
                            <span className="text-secondary fs-7">{percentageGain !== 'N/A' ? `(${percentageGain}%)` : 'N/A'}</span>
                          </>
                        ) : (
                          'N/A'
                        )}
                      </td>
                      <td>{transaction.timestamp ? new Date(transaction.timestamp).toLocaleDateString() : 'Unknown Date'}</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={7} className="text-center">
                    No transactions available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TransactionList;
