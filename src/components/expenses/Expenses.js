import React, { useState } from "react";
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../globals/Card";

import Filters from "./Filters";

const Expenses = (props) => {
    const [filterDate, setfilterDate] = useState('2022');
    const applyFilterHandler = (filter) =>{
        console.log(filter);
        setfilterDate(filter);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filterDate
    })

    /**
     * Display Content dynamically 
     * 
     * First Approach
     * { filteredExpenses.length === 0 ? 'No Expense Found' : filteredExpenses.map(expense => <ExpenseItem key={expense.key} title={expense.title} price={expense.price} date={expense.date} />) } 
     * 
     * Second Approach
     * { filteredExpenses.length === 0 && 'No Expense Found' }
     * { filteredExpenses.length > 0 && filteredExpenses.length === 0 ? 'No Expense Found' : filteredExpenses.map(expense => <ExpenseItem key={expense.key} title={expense.title} price={expense.price} date={expense.date} />) }
     * 
     * Third Approach
     */
    let expenseItemeContent = 'No Expense Item found';

    if(filteredExpenses.length > 0){
        expenseItemeContent = filteredExpenses.map(expense => <ExpenseItem title={expense.title} price={expense.price} date={expense.date} key={expense.key} />)
    }

    
    return (
        <Card className="expenses">
            <Filters selected={filterDate} onFilterChnage={applyFilterHandler} />
            {expenseItemeContent}
        </Card>
        
    );
}
export default Expenses;