import React from 'react';
import { Token } from './api';


const TokenCard: React.FC<{ token: Token }> = ({ token }) => {
    const {
        id,
        name,
        symbol,
        lastKnownPrice
    } = token;

    const price = lastKnownPrice !== null && lastKnownPrice !== undefined ? lastKnownPrice : 'N/A';

    return (
        <div className="card widget-card border-light shadow-sm">
            <div className="card-body p-4">
                <div className="row">
                    <div className="col-8">
                        <h5 className="card-title widget-card-title mb-3">{name || 'Unknown'} ({symbol || 'Unknown'})</h5>
                        <h4 className="card-subtitle text-body-secondary m-0">${price}</h4>
                    </div>
                    <div className="col-4">
                        <div className="d-flex justify-content-end">
                            <div className="lh-1 text-white bg-info rounded-circle p-3 d-flex align-items-center justify-content-center">
                                <i className="bi bi-truck fs-4"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TokenCard;
