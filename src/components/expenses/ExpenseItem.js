import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
     const [title, setTitle] = useState(props.title);
    const updateTitle = () => {
        setTitle("Update Title");
        // console.log(title);
    }
    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.price}</div>
                <button onClick={updateTitle} >Update</button>
            </div>
        </div>
    )
}

export default ExpenseItem;