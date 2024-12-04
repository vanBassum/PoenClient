import React, { useEffect, useState } from 'react';
import WebApi, { Token } from './api/WebApi';
import TokenCard from './TokenCard';

function TransactionList() {
    const [items, setItems] = useState<Token[]>([]);

    useEffect(() => {
        WebApi.Tokens.tokenGetAll()
            .then((response) => {
                console.log('API call successful:', response);
                setItems(response.data || []);
            })
            .catch((error) => {
                console.error('API call failed:', error);
            });
    }, []);

    return (
        <div>



            {items.length > 0 ? (
                items.map((item) => (
                    <TokenCard token={item} />
                ))
            ) : (
                <p>No tokens available.</p>
            )}


        </div>
    );
}

export default TransactionList;
