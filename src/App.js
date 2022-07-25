import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Expenses from './components/expenses/Expenses';
import AddExpense from './components/forms/AddExpense';
import ExpenseDate from './components/expenses/ExpenseDate';

class App extends Component {
  render() {
    
    const expenses = [
      {title: 'Car Insurance', price: 240.99, date: new Date(2022, 6, 26)},
      {title: 'Personal Stuff', price: 40.99, date: new Date(2022, 6, 26)},
      {title: 'Monthly Savings', price: 120.50, date: new Date(2022, 6, 25)},
      {title: 'Rent & Installments', price: 500.99, date: new Date(2022, 6, 23)},
    ];

    const [expeseList, setExpenseList] = useState(expenses);

    const saveExpenseData = expeseData => {
      console.log(expeseData);
      /*setExpenseList( prevState => {
        return ( ...prevState, expeseData);
      })*/
    }

    return (
      <div className="App">
        <AddExpense onSaveExpense={saveExpenseData} />
        <Expenses expenses={expenses} />
      </div>
    );
  }
}

export default App;
