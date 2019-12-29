import React, { Component } from 'react'

export class InputBudget extends Component {
    render() {
        return (
            <div className="card card-body mb-3">
                <form className="form-inline">
                    <label>Your Budget</label>
                    <input className="form-control mr-2" type="number"/>
                    <button className="btn btn-dark btn-block">Submit</button>  
                </form>
                
            </div>
        )
    }
}

export default InputBudget
