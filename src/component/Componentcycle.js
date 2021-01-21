import React, { Component } from 'react';
import User from './User';

class Componentcycle extends Component {
    constructor() {
        super()
        this.state={
            data:null,
            toggle:true
        }
        console.log("constructor")
    }
    componentDidMount() {
        this.setState({data:"updated"})
        console.warn("component") //when all setup load then it call it 
        this.setState({data:"again"})
    }
    componentDidUpdate() {
        console.warn("component updated") //when state updated it called 
    }
    
    render() {
        console.warn("render") //
        return (
            <div>
                <h2>lIFE cycle</h2>
                <button onClick = { () => this.setState({data:"done"})} >hello</button>                
                <div>
                    {this.state.toggle ? <User /> : null}
                </div>
                <button onClick= {() => this.setState({toggle:!this.state.toggle})}>delete user </button>
            </div>
        );
    }
}

export default Componentcycle;