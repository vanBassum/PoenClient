import React, { useEffect, useState } from 'react';
import WebApi, { Token } from './api/WebApi';

// Helper function to format prices
const formatPrice = (price: number | undefined): string => {
  if (price === undefined || price === null) return 'N/A';
  if (price >= 1000) {
    return `$${(price / 1000).toFixed(3)}k`;
  }
  return `$${price.toFixed(2)}`;
};

function TokenList() {
  const [tokens, setTokens] = useState<Token[]>([]);

  useEffect(() => {
    WebApi.Tokens.tokenGetAll()
      .then((response) => {
        console.log('API call successful:', response);
        setTokens(response.data || []);
      })
      .catch((error) => {
        console.error('API call failed:', error);
      });
  }, []);

  return (
    <div className="card widget-card border-light shadow-sm bg-primary">
      <div className="card-body p-4">
        <div className="row align-items-center justify-content-center">
          <div className="col-6">
            <h5 className="card-title widget-card-title text-white mb-1">Tokens</h5>
            <p className="mb-0 fs-7 text-white">Overview</p>
          </div>
          <div className="col-6 d-flex align-items-center justify-content-end">
            <span className="fs-1 bsb-w-85 bsb-h-85 text-white border border-3 border-primary-subtle rounded-circle d-flex align-items-center justify-content-center">
              <i className="bi bi-stars bsb-rotate-45"></i>
            </span>
          </div>
        </div>
        <div className="card mt-5 border-0">
          <div className="card-body">
            <div className="row gy-4">
              {tokens.length > 0 ? (
                tokens.map((token) => (
                  <div className="col-12" key={token.id}>
                    <div className="row align-items-center">
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <span className="fs-6 bsb-w-25 bsb-h-25 bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center me-3">
                            <i className="bi bi-arrow-right-short bsb-rotate-n45"></i>
                          </span>
                          <div>
                            <h6 className="m-0">{token.name}</h6>
                            <span className="fs-7 text-success">{token.symbol}</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <h6 className="h3 text-end m-0">{formatPrice(token.lastKnownPrice ?? 0)}</h6>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center">No tokens available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TokenList;
