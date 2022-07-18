import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Expenses from './components/expenses/Expenses';

class App extends Component {
  render() {
    
    const expenses = [
      {title: 'Car Insurance', price: 240.99, date: new Date(2022, 6, 26)},
      {title: 'Personal Stuff', price: 40.99, date: new Date(2022, 6, 26)},
      {title: 'Monthly Savings', price: 120.50, date: new Date(2022, 6, 25)},
      {title: 'Rent & Installments', price: 500.99, date: new Date(2022, 6, 23)},
    ];

    return (
      <div className="App">
        <Expenses expenses={expenses} />
      </div>
    );
  }
}

export default App;
