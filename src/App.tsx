import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TokenList from './components/TokenList';
import TransactionList from './components/TransactionList';

function App() {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* TokenList: Narrower column, stacks above TransactionList on small screens */}
        <div className="col-lg-4 col-md-5 col-12 mb-4">
          <TokenList />
        </div>
        {/* TransactionList: Wider column, stacks below TokenList on small screens */}
        <div className="col-lg-8 col-md-7 col-12">
          <TransactionList />
        </div>
      </div>
    </div>
  );
}

export default App;
