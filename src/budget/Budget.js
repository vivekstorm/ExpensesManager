import React, { Component } from 'react'
import InputBudget from './inputBudget'
import InputExpenses from './inputExpenses'
import DisplayBudget from '../display/DisplayBudget'
export class Budget extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-4">
                    <InputBudget/>
                    <InputExpenses/>
                    {/* <h2>Budget Input</h2>
                    <h2>Expenses Input</h2>  */}
                </div>
                <div className="col-lg-8">
                    {/* <h2>Display Budget Information</h2> */}
                    <DisplayBudget/>
                </div>
            </div>

        )
    }
}

export default Budget;
