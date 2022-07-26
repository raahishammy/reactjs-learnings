import React, { useState } from 'react';
import './App.css';

import Expenses from './components/expenses/Expenses';
import AddExpense from './components/forms/AddExpense';


const EXPENSES = [
  {key:'es1', title: 'Car Insurance', price: 240.99, date: new Date(2022, 6, 26)},
  {key:'es2', title: 'Personal Stuff', price: 40.99, date: new Date(2022, 6, 26)},
  {key:'es3', title: 'Monthly Savings', price: 120.50, date: new Date(2022, 6, 25)},
  {key:'es4', title: 'Rent & Installments', price: 500.99, date: new Date(2022, 6, 23)},
];

const App = () => {  

  const [expenses, setExpenses] = useState(EXPENSES);

  const saveExpenseData = expeseData => {
    console.log(expeseData);
    setExpenses( prevState => {
      return [expeseData, ...prevState];
    })
  }

  return (
    <div className="App">
      <AddExpense onSaveExpense={saveExpenseData} />
      <Expenses expenses={expenses} />
    </div>
  );

}

export default App;
