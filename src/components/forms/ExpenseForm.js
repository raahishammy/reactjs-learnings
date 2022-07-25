import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [expenseTitle, setExpenseTitle] = useState('');
    const [expensePrice, setExpensePrice] = useState('');
    const [expenseDate, setExpenseDate] = useState('');

    const titleChangeHandler = (event) => {
        setExpenseTitle(event.target.value);
    }

    const priceChangeHandler = (event) => {
        setExpensePrice(event.target.value);
    }

    const dateChangeHandler = event => {
        setExpenseDate(event.target.value);
    }

    const submitHandler = (event) =>{
        event.preventDefault();

        const expenseData =  {
            title: expenseTitle,
            price: expensePrice,
            date: new Date(expenseDate)
        }

        // console.log(expenseData);
        props.onSaveExpenseHandler(expenseData);

        setExpenseTitle('');
        setExpensePrice('');
        setExpenseDate('');
    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={expenseTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Price</label>
                <input type='number' value={expensePrice} min="0.01" step="0.01" onChange={priceChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' value={expenseDate} onChange={dateChangeHandler} />
            </div>
            <div className="new-expense__actions">
                <button type="submit">submit</button>
            </div>
        </div>
    </form>
}

export default ExpenseForm;