import React from 'react';
import { Transaction } from './api';


const TransactionCard: React.FC<{ transaction: Transaction }> = ({ transaction }) => {
    const {
        fromToken,
        toToken,
        lastKnownValue,
        received,
        timestamp,
    } = transaction;

    const formattedDate = timestamp ? new Date(timestamp).toLocaleDateString() : 'Unknown Date';
    const receivedAmount = received !== null && received !== undefined ? received : 'N/A';

    return (
        <div className="card widget-card border-light shadow-sm">
            <div className="card-body p-4">
                <div className="row">
                    <div className="col-8">
                        <h5 className="card-title widget-card-title mb-3">{fromToken?.name || 'Unknown'} → {toToken?.name || 'Unknown'}</h5>
                        <h4 className="card-subtitle text-body-secondary m-0">${lastKnownValue || 'Unknown'}</h4>
                    </div>
                    <div className="col-4">
                        <div className="d-flex justify-content-end">
                            <div className="lh-1 text-white bg-info rounded-circle p-3 d-flex align-items-center justify-content-center">
                                <i className="bi bi-truck fs-4"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex align-items-center mt-3">
                            <span className="lh-1 me-3 bg-danger-subtle text-danger rounded-circle p-1 d-flex align-items-center justify-content-center">
                                <i className="bi bi-arrow-right-short bsb-rotate-45"></i>
                            </span>
                            <div>
                                <p className="fs-7 mb-0">${receivedAmount}</p>
                                <p className="fs-7 mb-0 text-secondary">{formattedDate}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransactionCard;
