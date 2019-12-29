import React, { Component } from 'react'

const BudgetContext=React.createContext();
const reducer=(state,action)=>{
    switch(action.type){
    case "ADD":
        return {
            ...state,
            budget:action.budget
        }
    default:
        return state
    }
}
class BudgetProvider extends Component {
    state={
        budget:'',
        expenses:[
            {title:'Food',amount:100},
            {title:'Online Course',amount:15000}
        ]
    }
    render() {
        return (
            <BudgetContext.Provider value={this.state}>
                {this.props.children}
            </BudgetContext.Provider>
        )
    }
}
const BudgetConsumer=BudgetContext.Consumer;

export  {BudgetProvider,BudgetConsumer}
