import React, { Component } from 'react'
import BalanceDisplay from './BalanceDisplay';
import ExpensesList from './ExpensesList'
export class DisplayBudget extends Component {
    render() {
        return (
            <div className="card card-body">
                <h3 className="text-center">Budget Info</h3>
                <BalanceDisplay/>
                {/* <h2>Balance Display</h2> */}
                {/* <h2>Expenses List</h2> */}
                <ExpensesList/>
            </div>
        )
    }
}

export default DisplayBudget
