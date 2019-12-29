import React, { Component } from 'react'

const BudgetContext=React.createContext();
class BudgetProvider extends Component {
    state={
        budget:40000,
        expenses:[
            {title:'Food',amount:100},
            {title:'Online Course',amount:15000}
        ]
    }
    render() {
        return (
            <BudgetContext.Provider>
                {this.props.children}
            </BudgetContext.Provider>
        )
    }
}
const BudgetConsumer=BudgetContext.Consumer;

export  {BudgetProvider,BudgetConsumer}
