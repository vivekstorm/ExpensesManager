import React, { Component } from 'react'
import {BudgetConsumer} from '../store'
export class InputBudget extends Component {
    state={
        budget:''
    }
    handleInput=(e)=>{
        this.setState({budget:e.target.value})
    }
    handleSubmit=(dispatch,e)=>{
        e.preventDefault()
        dispatch({
            type:"ADD",
            budget:this.state.budget
        })
    }
    render() {
        return (
            <BudgetConsumer>
                {value=>{
                    const {dispatch}=value
               return(
            <div className="card card-body mb-3">
                <form className="form-inline">
                    <label>Your Budget</label>
                    <input onChange={this.handleInput}value={this.state.budget}className="form-control mr-2" type="number"/>
                    <button onClick={this.handleSubmit.bind(this,dispatch)}className="btn btn-dark btn-block">Submit</button>  
                </form>
                
            </div>)
             }}
             </BudgetConsumer>
        )
    }
}

export default InputBudget
