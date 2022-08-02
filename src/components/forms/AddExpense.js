import React, { useState } from "react";
import './AddExpense.css';

import ExpenseForm from "./ExpenseForm";

const AddExpense = (props) => {

    const [showForm, setShowForm] = useState(false);
    const SaveExpenseHandler = expenseData => {
        const expense = {
            ...expenseData,
            key: Math.random().toString()
        }

        // console.log(expense);
        props.onSaveExpense(expense);
        setShowForm(prevState => { return false;});
    }

    const formToggleHandler = () => {
        setShowForm(prevState => {return true;});
    }

    const formCancelButtonHandler = () => {
        setShowForm(prevState => {return false;})
    }

    let addExpenseContent = <button onClick={formToggleHandler}>Add Expense</button>;
    if(showForm == true){
        addExpenseContent = <ExpenseForm onSaveExpenseHandler={SaveExpenseHandler} onFormCancleButton={formCancelButtonHandler} />;
    }

    return <div className="new-expense">
        {addExpenseContent}
    </div>
}
export default AddExpense;