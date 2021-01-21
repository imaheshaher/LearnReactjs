import React from 'react'

export default class StateDemo extends React.Component {
    constructor() {
        super()
        this.state={
            show:true
        }
    }
    render() {
        return(
            <div>
                State
                {this.state.show ? 
                <h2 onClick={() => this.setState({show:false})}>Show</h2>:
                <p  onClick={() => this.setState({show:true})}>hi</p>}
            </div>
        )
    }
}