import React, { useState } from "react";
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../globals/Card";

import Filters from "./Filters";

const Expenses = (props) => {
    const [expsenseFilter, setExpsenseFilter] = useState('2020');
    const applyFilterHandler = (filter) =>{
        // console.log(filter);
        setExpsenseFilter(filter);
    }

    return (
        <Card className="expenses">
            <Filters selected={expsenseFilter} onFilterChnage={applyFilterHandler} />
            { props.expenses.map(expense => <ExpenseItem key={expense.key} title={expense.title} price={expense.price} date={expense.date} />)}
        </Card>
        
    );
}
export default Expenses;