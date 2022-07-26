import React from "react";
import './AddExpense.css';

import ExpenseForm from "./ExpenseForm";

const AddExpense = (props) => {

    const SaveExpenseHandler = expenseData => {
        const expense = {
            ...expenseData,
            key: Math.random().toString()
        }

        // console.log(expense);
        props.onSaveExpense(expense);
    }
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseHandler={SaveExpenseHandler} />
    </div>
}
export default AddExpense;