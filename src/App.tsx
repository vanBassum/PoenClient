import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TokenList from './components/TokenList';
import TransactionList from './components/TransactionList';


function App() {
  return (
    <div className="container mt-4">
      <TokenList></TokenList>
      
      <TransactionList></TransactionList>
    </div>
  );
}

export default App;
